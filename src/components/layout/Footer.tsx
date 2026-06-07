export default function Footer() {
  return (
    <>
      <div className="footer-curve-wrap">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="1440" height="70" fill="var(--bg3)" />
          <path d="M0,75 C360,0 1080,0 1440,75 L1440,75 L0,75 Z" fill="var(--terra)" />
        </svg>
      </div>
      <footer>
        <span className="footer-text">Verônica Vilas · Full Stack Developer · Salvador, BA</span>
        <span className="footer-text">
          All rights reserved 2026 <span className="footer-heart">♥</span>
        </span>
      </footer>
    </>
  )
}
