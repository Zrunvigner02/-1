export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} 前端工程师作品集 · 用 React + Vite 构建</p>
      </div>
    </footer>
  )
}
