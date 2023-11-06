import "./styles.css"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-container">
      <p>
        Copyright © {currentYear} <strong>Bão Space</strong> | Eco Walls
      </p>
    </div>
  )
}
