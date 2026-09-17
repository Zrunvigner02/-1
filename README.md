# 前端工程师作品集（笔试题-前端）

笔试题-前端 的答案：用 React + Vite + TypeScript 实现一个响应式个人作品集落地页。

> **关于设计稿的说明**：题目提供的 Figma 设计稿链接在自动化环境下被 CloudFront 拦截（403），
> 无法程序化读取设计细节。因此本实现是基于「前端工程师（实习）作品集」这一题意的**最佳努力实现**：
> 采用现代前端技术栈，实现了导航栏、Hero 区、技能栈、项目卡片、联系区与页脚等常见落地页模块，
> 并做好响应式适配。**建议最终提交前对照 Figma 设计稿核对视觉细节并微调。**

## 快速开始

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
npm run build      # 生产构建，产物在 dist/
npm run preview    # 本地预览构建产物
```

## 技术栈

- **React 18** + **TypeScript**：组件化 + 类型安全
- **Vite 5**：极速开发与构建
- **纯 CSS**（CSS 变量设计令牌 + Flexbox/Grid）：无额外 UI 依赖，降低安装成本

## 项目结构

```
src/
├── main.tsx              # 入口
├── App.tsx               # 页面组合
├── styles.css            # 全局样式（设计令牌 + 响应式）
├── data.ts               # 内容数据（技能 / 项目）
└── components/
    ├── Navbar.tsx        # 吸顶导航（移动端汉堡菜单）
    ├── Hero.tsx          # 首屏
    ├── Skills.tsx        # 技能栈
    ├── Projects.tsx      # 项目卡片
    ├── Contact.tsx       # 联系区
    └── Footer.tsx        # 页脚
```

## 实现要点

- **响应式**：桌面 4 列技能 / 3 列项目，平板 2 列，移动端单列 + 汉堡菜单；
- **设计令牌**：颜色、圆角、阴影、间距统一由 CSS 变量管理，便于主题切换；
- **无障碍**：语义化标签、`aria-label`/`aria-expanded`、`prefers` 友好的对比度；
- **动效**：卡片 hover 抬升、按钮渐变、平滑滚动，全部 CSS 实现，无 JS 动画库依赖。
