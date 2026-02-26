class WatermarkRemover {
    constructor() {
        this.uploadedFiles = [];
        this.processedImages = [];
        this.isProcessing = false;
        this.initElements();
        this.initEventListeners();
    }

    initElements() {
        this.uploadArea = document.getElementById('uploadArea');
        this.fileInput = document.getElementById('fileInput');
        this.progressSection = document.getElementById('progressSection');
        this.progressFill = document.getElementById('progressFill');
        this.progressText = document.getElementById('progressText');
        this.progressCount = document.getElementById('progressCount');
        this.resultsSection = document.getElementById('resultsSection');
        this.resultsGrid = document.getElementById('resultsGrid');
        this.downloadAllBtn = document.getElementById('downloadAllBtn');
        this.clearAllBtn = document.getElementById('clearAllBtn');
    }

    initEventListeners() {
        this.uploadArea.addEventListener('click', () => this.fileInput.click());
        this.fileInput.addEventListener('change', (e) => this.handleFiles(e.target.files));
        this.uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.uploadArea.classList.add('drag-over');
        });
        this.uploadArea.addEventListener('dragleave', () => {
            this.uploadArea.classList.remove('drag-over');
        });
        this.uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            this.uploadArea.classList.remove('drag-over');
            this.handleFiles(e.dataTransfer.files);
        });
        this.downloadAllBtn.addEventListener('click', () => this.downloadAll());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());
    }

    handleFiles(files) {
        const validFiles = Array.from(files).filter(file => {
            if (!file.type.match('image/(jpeg|png)')) {
                alert('文件 "' + file.name + '" 不是支持的图片格式（仅支持 JPG、PNG）');
                return false;
            }
            if (file.size > 10 * 1024 * 1024) {
                alert('文件 "' + file.name + '" 超过 10MB 大小限制');
                return false;
            }
            return true;
        });
        if (validFiles.length === 0) return;
        this.uploadedFiles = [...this.uploadedFiles, ...validFiles];
        this.processImages();
    }

    async processImages() {
        if (this.isProcessing) return;
        this.isProcessing = true;
        this.showProgress();
        this.processedImages = [];
        try {
            for (let i = 0; i < this.uploadedFiles.length; i++) {
                const file = this.uploadedFiles[i];
                const progress = ((i + 1) / this.uploadedFiles.length) * 100;
                this.updateProgress(progress, i + 1, this.uploadedFiles.length);
                const result = await this.processSingleImage(file);
                this.processedImages.push(result);
            }
            this.showResults();
        } catch (error) {
            console.error('处理失败:', error);
            alert('处理过程中出现错误，请重试');
        } finally {
            this.isProcessing = false;
        }
    }

    async processSingleImage(file) {
        const id = this.generateId();
        const originalUrl = URL.createObjectURL(file);
        try {
            const image = await this.loadImage(originalUrl);
            const watermarkRegion = await this.detectWatermark(image);
            const processedBlob = await this.removeWatermark(image, watermarkRegion);
            const processedUrl = URL.createObjectURL(processedBlob);
            return {
                id: id,
                originalFile: file,
                originalUrl: originalUrl,
                processedUrl: processedUrl,
                watermarkDetected: watermarkRegion !== null,
                watermarkRegion: watermarkRegion,
                status: 'completed'
            };
        } catch (error) {
            console.error('处理图片 ' + file.name + ' 失败:', error);
            return {
                id: id,
                originalFile: file,
                originalUrl: originalUrl,
                processedUrl: null,
                watermarkDetected: false,
                watermarkRegion: null,
                status: 'failed',
                error: error.message
            };
        }
    }

    loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('图片加载失败'));
            img.src = url;
        });
    }

    async detectWatermark(image) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const bottomHeight = Math.floor(canvas.height * 0.2);
        const startY = canvas.height - bottomHeight;
        let maxContrast = 0;
        let bestY = startY;
        for (let y = startY; y < canvas.height - 20; y++) {
            let contrast = 0;
            for (let x = 0; x < canvas.width; x++) {
                const idx = (y * canvas.width + x) * 4;
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                const brightness = (r + g + b) / 3;
                if (x > 0) {
                    const prevIdx = (y * canvas.width + (x - 1)) * 4;
                    const prevBrightness = (data[prevIdx] + data[prevIdx + 1] + data[prevIdx + 2]) / 3;
                    contrast += Math.abs(brightness - prevBrightness);
                }
            }
            contrast /= canvas.width;
            if (contrast > maxContrast) {
                maxContrast = contrast;
                bestY = y;
            }
        }
        if (maxContrast > 30) {
            return {
                x: 0,
                y: bestY,
                width: canvas.width,
                height: canvas.height - bestY,
                confidence: Math.min(maxContrast / 100, 1)
            };
        }
        return null;
    }

    async removeWatermark(image, region) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        if (region) {
            const safeHeight = region.y;
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = image.width;
            tempCanvas.height = safeHeight;
            tempCtx.drawImage(image, 0, 0, image.width, safeHeight, 0, 0, image.width, safeHeight);
            ctx.drawImage(tempCanvas, 0, 0);
            const gradient = ctx.createLinearGradient(0, safeHeight - 50, 0, safeHeight);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, safeHeight - 50, image.width, 50);
        } else {
            ctx.drawImage(image, 0, 0);
        }
        return new Promise((resolve) => {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, 'image/png');
        });
    }

    showProgress() {
        this.progressSection.classList.remove('hidden');
        this.resultsSection.classList.add('hidden');
    }

    updateProgress(percent, current, total) {
        this.progressFill.style.width = percent + '%';
        this.progressText.textContent = '处理中... ' + Math.round(percent) + '%';
        this.progressCount.textContent = current + '/' + total;
    }

    showResults() {
        this.progressSection.classList.add('hidden');
        this.resultsSection.classList.remove('hidden');
        this.renderResults();
    }

    renderResults() {
        this.resultsGrid.innerHTML = '';
        this.processedImages.forEach(result => {
            const card = this.createResultCard(result);
            this.resultsGrid.appendChild(card);
        });
    }

    createResultCard(result) {
        const card = document.createElement('div');
        card.className = 'result-card';
        const img = document.createElement('img');
        img.className = 'result-image';
        img.src = result.processedUrl || result.originalUrl;
        img.alt = result.originalFile.name;
        const info = document.createElement('div');
        info.className = 'result-info';
        const name = document.createElement('div');
        name.className = 'result-name';
        name.textContent = result.originalFile.name;
        const status = document.createElement('div');
        status.className = 'result-status';
        if (result.status === 'completed') {
            status.innerHTML = '<span class="status-success">✓ 处理完成</span>';
            if (result.watermarkDetected) {
                status.innerHTML += ' <span style="margin-left: 10px;">检测到水印</span>';
            } else {
                status.innerHTML += ' <span style="margin-left: 10px;">未检测到水印</span>';
            }
        } else {
            status.innerHTML = '<span class="status-error">✗ 处理失败</span>';
        }
        const actions = document.createElement('div');
        actions.className = 'result-actions';
        if (result.status === 'completed') {
            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'btn btn-primary btn-sm';
            downloadBtn.textContent = '下载';
            downloadBtn.onclick = () => this.downloadSingle(result);
            actions.appendChild(downloadBtn);
        }
        const removeBtn = document.createElement('button');
        removeBtn.className = 'btn btn-secondary btn-sm';
        removeBtn.textContent = '移除';
        removeBtn.onclick = () => this.removeResult(result.id);
        actions.appendChild(removeBtn);
        info.appendChild(name);
        info.appendChild(status);
        info.appendChild(actions);
        card.appendChild(img);
        card.appendChild(info);
        return card;
    }

    downloadSingle(result) {
        const link = document.createElement('a');
        link.href = result.processedUrl;
        link.download = '去水印_' + result.originalFile.name;
        link.click();
    }

    downloadAll() {
        this.processedImages.forEach((result, index) => {
            if (result.status === 'completed') {
                setTimeout(() => {
                    this.downloadSingle(result);
                }, index * 500);
            }
        });
    }

    removeResult(id) {
        this.processedImages = this.processedImages.filter(img => img.id !== id);
        this.uploadedFiles = this.uploadedFiles.filter(file => {
            const result = this.processedImages.find(img => img.originalFile === file);
            return result !== undefined;
        });
        if (this.processedImages.length === 0) {
            this.resultsSection.classList.add('hidden');
        } else {
            this.renderResults();
        }
    }

    clearAll() {
        this.processedImages.forEach(result => {
            URL.revokeObjectURL(result.originalUrl);
            if (result.processedUrl) {
                URL.revokeObjectURL(result.processedUrl);
            }
        });
        this.uploadedFiles = [];
        this.processedImages = [];
        this.resultsSection.classList.add('hidden');
        this.progressSection.classList.add('hidden');
        this.fileInput.value = '';
    }

    generateId() {
        return Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WatermarkRemover();
});
