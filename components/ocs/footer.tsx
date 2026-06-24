import Link from "next/link";

export function OCSFooter() {
  return (
    <footer className="cf-footer on-dark">
      <div className="cf-container cf-footer-inner" style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}>
        <div className="cf-footer-brand">
          <Link className="cf-logo" href="/">
            OCS Law
          </Link>
          <p className="cf-footer-tag">
            Full-service commercial law firm dedicated to serving the diverse needs of
            businesses in Canada.
          </p>
        </div>
        <div className="cf-footer-col">
          <span className="eyebrow">Navigate</span>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#team">Team</Link>
            </li>
          </ul>
        </div>
        <div className="cf-footer-col">
          <span className="eyebrow">Contact</span>
          <ul>
            <li>
              <a href="mailto:info@ocslaw.ca">info@ocslaw.ca</a>
            </li>
            <li>
              <a href="tel:+15199020501">+1 (519) 902-0501</a>
            </li>
            <li>
              <Link href="/#contact">620A Richmond St Suite 205, London ON</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="cf-container cf-footer-base">
        <span>&copy; 2026 OCS Law. All rights reserved.</span>
        <span>Barristers, Solicitors & Notaries Public</span>
      </div>
    </footer>
  );
}
