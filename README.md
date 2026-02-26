# 🖼️ 智能去水印工具

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-stable-brightgreen.svg)

一个纯前端实现的智能去水印工具，专门用于移除豆包生成图片的水印。

[在线演示](#) · [功能特性](#-功能特性) · [快速开始](#-快速开始) · [使用说明](#-使用说明)

</div>

---

## 📖 目录

- [项目简介](#-项目简介)
- [功能特性](#-功能特性)
- [技术栈](#-技术栈)
- [快速开始](#-快速开始)
- [使用说明](#-使用说明)
- [隐私安全](#-隐私安全)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [部署指南](#-部署指南)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)
- [许可证](#-许可证)

---

## 🎯 项目简介

智能去水印工具是一个完全运行在浏览器端的图片处理工具，专门用于检测和移除豆包 AI 生成图片底部的水印。本项目采用纯前端技术栈，无需后端服务器，确保用户数据的绝对隐私安全。

### 为什么选择这个工具？

- ✅ **零成本部署**：无需服务器，可直接部署到 GitHub Pages、Netlify 等免费平台
- ✅ **隐私保护**：所有图片处理在浏览器本地完成，不上传任何数据
- ✅ **开箱即用**：无需安装依赖，直接打开 HTML 文件即可使用
- ✅ **批量处理**：支持同时处理多张图片，提高工作效率
- ✅ **智能识别**：基于图像处理算法自动检测水印区域

---

## ✨ 功能特性

### 核心功能

| 功能 | 描述 | 状态 |
|------|------|------|
| 📁 **拖拽上传** | 支持拖拽图片文件到上传区域 | ✅ 已实现 |
| 🖱️ **点击上传** | 点击上传区域选择文件 | ✅ 已实现 |
| 🔍 **智能检测** | 自动检测图片底部水印区域 | ✅ 已实现 |
| 🎨 **水印移除** | 使用图像修复算法移除水印 | ✅ 已实现 |
| 📦 **批量处理** | 同时处理多张图片 | ✅ 已实现 |
| 📊 **进度显示** | 实时显示处理进度 | ✅ 已实现 |
| 👁️ **结果预览** | 预览处理后的图片 | ✅ 已实现 |
| ⬇️ **单张下载** | 下载单张处理后的图片 | ✅ 已实现 |
| 📥 **批量下载** | 批量下载所有处理后的图片 | ✅ 已实现 |
| 🗑️ **清空功能** | 一键清空所有处理结果 | ✅ 已实现 |

### 技术特性

- 🎨 **现代化 UI**：采用渐变背景、卡片式设计
- 📱 **响应式布局**：完美适配桌面、平板、手机
- ⚡ **高性能**：使用 Canvas API 进行高效图像处理
- 🔒 **内存管理**：及时释放 Blob URL，避免内存泄漏
- 🌐 **跨浏览器**：支持主流现代浏览器

---

## ��️ 技术栈

本项目采用纯前端技术栈，零依赖，零构建工具。

### 前端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| **HTML5** | - | 页面结构 |
| **CSS3** | - | 样式和响应式设计 |
| **JavaScript (ES6+)** | - | 核心业务逻辑 |
| **Canvas API** | - | 图像处理 |

### 核心算法

- **水印检测**：基于边缘检测和对比度分析
- **图像修复**：使用梯度填充和图像插值

---

## 🚀 快速开始

### 方式一：直接使用（推荐）

1. 下载本项目
2. 用浏览器打开 `index.html` 文件
3. 开始使用！

### 方式二：本地服务器运行

```bash
# 克隆项目
git clone https://github.com/your-username/watermark-remover.git
cd watermark-remover

# 使用 Python 启动本地服务器
python3 -m http.server 8080

# 或使用 Node.js
npx http-server -p 8080

# 浏览器访问
open http://localhost:8080
```

### 方式三：在线使用

访问已部署的在线版本（如果已部署）：

```
https://your-username.github.io/watermark-remover/
```

---

## 📖 使用说明

### 基本使用流程

#### 第一步：上传图片

**方法一：拖拽上传**
1. 将图片文件拖拽到上传区域
2. 松开鼠标，图片自动开始处理

**方法二：点击上传**
1. 点击上传区域
2. 在文件选择器中选择图片文件
3. 支持多选（按住 Command/Ctrl 键）

#### 第二步：自动处理

- 系统自动检测水印区域
- 显示处理进度条
- 处理完成后显示结果

#### 第三步：查看结果

- 预览处理后的图片
- 查看水印检测状态
- 确认处理效果

#### 第四步：下载图片

**单张下载**
- 点击"下载"按钮
- 文件自动保存到本地

**批量下载**
- 点击"批量下载"按钮
- 所有处理完成的图片依次下载

### 支持的图片格式

| 格式 | 扩展名 | 最大大小 |
|------|---------|---------|
| JPEG | `.jpg`, `.jpeg` | 10MB |
| PNG | `.png` | 10MB |

### 高级功能

#### 清空所有结果

点击"清空全部"按钮可以：
- 清除所有处理结果
- 释放内存资源
- 准备处理新的图片

#### 移除单个结果

点击"移除"按钮可以：
- 删除单张处理结果
- 保留其他结果
- 释放对应内存

---

## 🔒 隐私安全

我们非常重视您的隐私安全，本项目采用以下措施保护您的数据：

### 隐私保护机制

| 措施 | 实现方式 |
|------|----------|
| **本地处理** | 所有图片处理在浏览器 Canvas 中完成 |
| **无网络请求** | 不发送任何图片数据到外部服务器 |
| **内存清理** | 处理完成后及时释放 Blob URL |
| **无持久化** | 不使用 LocalStorage 或 IndexedDB 存储图片 |
| **透明化** | UI 明确显示隐私说明 |

### 隐私承诺

- ✅ 所有图片处理均在您的浏览器本地完成
- ✅ 我们不会收集、存储或上传您的任何图片
- ✅ 您的图片数据永远不会离开您的设备
- ✅ 处理完成后，您可以随时关闭页面，数据自动清除

### 验证隐私安全

您可以通过以下方式验证我们的隐私承诺：

1. **检查网络请求**
   - 打开浏览器开发者工具（F12）
   - 切换到 Network 面板
   - 上传并处理图片
   - 观察网络请求，确认没有任何图片数据上传

2. **检查内存使用**
   - 打开浏览器任务管理器（Shift + Esc）
   - 观察内存使用情况
   - 确认数据在本地处理

3. **查看源代码**
   - 所有代码都是开源的
   - 可以审查每一行代码
   - 确认无数据上传逻辑

---

## 📂 项目结构

```
watermark-remover/
├── index.html              # 主页面入口
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── app.js             # 核心业务逻辑
├── assets/
│   └── images/            # 静态图片资源（预留）
├── README.md              # 项目文档
└── .gitignore            # Git 忽略文件
```

### 文件说明

| 文件 | 行数 | 说明 |
|------|------|------|
| [index.html](index.html) | 69 | HTML 结构，包含所有 UI 元素 |
| [css/style.css](css/style.css) | 347 | CSS 样式，包含响应式设计 |
| [js/app.js](js/app.js) | 317 | JavaScript 逻辑， git add . && git commit -m "清理HTML文件中的API调用代码

- 移除所有localhost:5001的API调用
- 确保使用预录制音频发音功能
- 清理learning_fullscreen.html中的API相关代码" && git push
包含水印检测和移除算法 |

---

## 👨‍💻 开发指南

### 开发环境要求

- 现代浏览器（Chrome 90+、Firefox 88+、Safari 14+、Edge 90+）
- 本地 Web 服务器（可选）

### 本地开发

```bash
# 1. 克隆项目
git clone https://github.com/your-username/watermark-remover.git
cd watermark-remover

# 2. 启动本地服务器
# 使用 Python
python3 -m http.server 8080

# 或使用 Node.js
npx http-server -p 8080

# 3. 浏览器访问
open http://localhost:8080

# 4. 开始开发
# 修改代码后刷新浏览器即可看到效果
```

### 代码规范

#### JavaScript

- 使用 ES6+ 语法
- 使用驼峰命名法（camelCase）
- 函数和类名使用大驼峰（PascalCase）
- 变量和方法名使用小驼峰（camelCase）

#### CSS

- 使用 BEM 命名规范
- 使用相对单位（rem、em、%）
- 优先使用 Flexbox 和 Grid 布局

#### HTML

- 使用语义化标签
- 保持良好的缩进
- 添加必要的注释

### 调试技巧

#### 控制台日志

```javascript
// 在 app.js 中添加日志
console.log('处理图片:', file);
console.log('检测到的水印区域:', region);
console.log('处理完成:', result);
```

#### 断点调试

1. 打开浏览器开发者工具（F12）
2. 切换到 Sources 面板
3. 找到 app.js 文件
4. 在代码行号左侧点击设置断点
5. 刷新页面触发断点

---

## 🌐 部署指南

### GitHub Pages 部署（推荐）

#### 步骤一：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`watermark-remover`
4. 选择 Public 或 Private
5. 点击 "Create repository"

#### 步骤二：推送代码

```bash
# 在项目根目录执行
cd "/Users/tungwah/有趣项目/watermark-remover"

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: 智能去水印工具"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/watermark-remover.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 步骤三：启用 GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 左侧菜单找到 **Pages**
3. 在 **Source** 部分：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
4. 点击 **Save**
5. 等待 1-3 分钟，GitHub 会自动构建并部署

#### 步骤四：访问网站

部署成功后，访问：
```
https://your-username.github.io/watermark-remover/
```

### Netlify 部署

#### 方法一：拖拽部署

1. 登录 [Netlify](https://app.netlify.com)
2. 进入 "Sites" 页面
3. 将 `watermark-remover` 文件夹拖拽到上传区域
4. 等待部署完成

#### 方法二：Git 集成

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录 Netlify
netlify login

# 部署
cd watermark-remover
netlify deploy --prod
```

### Vercel 部署

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署
cd watermark-remover
vercel --prod
```

### 自定义域名

#### GitHub Pages

1. 在仓库的 **Settings** → **Pages**
2. 在 **Custom domain** 中输入你的域名
3. 按照提示配置 DNS 记录

#### Netlify

1. 进入站点设置
2. 在 **Domain management** 中添加自定义域名
3. 配置 DNS 记录

---

## ❓ 常见问题

### Q1: 为什么我的图片没有检测到水印？

**A:** 可能的原因：
- 图片底部没有明显的水印
- 水印区域对比度不够高
- 图片格式不支持

**解决方案：**
- 尝试使用其他图片
- 检查图片是否为豆包生成

### Q2: 处理后的图片质量会下降吗？

**A:** 不会。我们使用 PNG 格式输出，保持原始质量。如果原始图片是 JPEG，可能会略微增加文件大小。

### Q3: 支持哪些浏览器？

**A:** 支持所有现代浏览器：
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Q4: 可以处理多大的图片？

**A:** 单张图片最大支持 10MB。对于超大图片，建议先压缩后再处理。

### Q5: 处理速度如何？

**A:** 处理速度取决于：
- 图片大小
- 设备性能
- 浏览器性能

一般来说，处理一张 1920x1080 的图片需要 1-3 秒。

### Q6: 可以批量处理多少张图片？

**A:** 理论上没有限制，但建议一次不超过 50 张，以免占用过多内存。

### Q7: 我的图片会被上传到服务器吗？

**A:** 绝对不会！所有处理都在浏览器本地完成，您可以打开开发者工具的 Network 面板验证。

### Q8: 如何验证隐私安全？

**A:** 请参考 [隐私安全](#-隐私安全) 部分的详细说明。

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

#### 报告 Bug

1. 在 [Issues](https://github.com/your-username/watermark-remover/issues) 中搜索是否已有相同问题
2. 如果没有，创建新的 Issue
3. 提供详细的信息：
   - 问题描述
   - 复现步骤
   - 浏览器版本
   - 截图（如果有）

#### 提出新功能

1. 在 [Issues](https://github.com/your-username/watermark-remover/issues) 中讨论新功能
2. 等待社区反馈
3. Fork 本仓库
4. 创建功能分支
5. 提交代码
6. 创建 Pull Request

#### 改进文档

1. Fork 本仓库
2. 修改文档
3. 提交 Pull Request

### 代码贡献流程

```bash
# 1. Fork 本仓库

# 2. 克隆你的 Fork
git clone https://github.com/your-username/watermark-remover.git

# 3. 创建功能分支
git checkout -b feature/your-feature-name

# 4. 进行修改
# ... 修改代码 ...

# 5. 提交修改
git add .
git commit -m "Add: your feature description"

# 6. 推送到你的 Fork
git push origin feature/your-feature-name

# 7. 创建 Pull Request
# 在 GitHub 上创建 PR
```

### 代码风格

- 遵循现有的代码风格
- 添加必要的注释
- 保持代码简洁清晰
- 测试你的修改

---

## 📜 许可证

本项目采用 [MIT License](LICENSE) 开源许可证。

```
MIT License

Copyright (c) 2024 Watermark Remover Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 致谢

感谢所有使用本工具的用户！

特别感谢：

- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - 强大的图像处理能力
- [现代浏览器](https://caniuse.com/) - 提供优秀的 Web 平台

---

## 📞 联系方式

- **Issues**: [GitHub Issues](https://github.com/your-username/watermark-remover/issues)
- **Email**: your-email@example.com

---

## 📊 项目统计

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/your-username/watermark-remover?style=social)
![GitHub forks](https://img.shields.io/github/forks/your-username/watermark-remover?style=social)
![GitHub issues](https://img.shields.io/github/issue git add .
s/your-username/watermark-remover)
![GitHub license](https://img.shields.io/github/license/your-username/watermark-remover)

</div>

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐️ Star**

Made with ❤️ by Watermark Remover Team

</div>
