export interface Project {
  title: string
  description: string
  tech: string[]
  link: string
}

export const profile = {
  name: '前端工程师',
  role: 'Frontend Engineer',
  tagline:
    '热爱把复杂问题变成清晰、流畅、可维护的用户界面，关注性能、可访问性与工程化。',
  email: 'recruit@d5data.ai',
  location: '杭州',
}

export const skills: { category: string; items: string[] }[] = [
  { category: '语言', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: '框架', items: ['React', 'Vue', 'Next.js', 'Vite'] },
  { category: '样式', items: ['Tailwind CSS', 'CSS Modules', 'Sass', 'Flexbox / Grid'] },
  { category: '工程化', items: ['Webpack', 'ESLint', 'Prettier', 'Git', 'CI/CD'] },
]

export const projects: Project[] = [
  {
    title: '实时数据看板',
    description: '基于 WebSocket 的流式数据可视化面板，支持大屏自适应与主题切换。',
    tech: ['React', 'TypeScript', 'ECharts', 'WebSocket'],
    link: '#',
  },
  {
    title: '组件库 Design System',
    description: '一套可复用的 UI 组件库，含按钮、表单、弹窗等，支持按需加载与暗色模式。',
    tech: ['React', 'Storybook', 'CSS Modules'],
    link: '#',
  },
  {
    title: '移动端 H5 活动页',
    description: '高还原度的移动端营销活动页，优化首屏加载与动画流畅度。',
    tech: ['Vue', 'Vite', 'GSAP'],
    link: '#',
  },
]
