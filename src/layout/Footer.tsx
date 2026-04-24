import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="border-t border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} CareerNavi &middot; Built by{' '}
          <span className="text-warm-charcoal">thegirldesigns</span>
        </p>
        <nav className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-ink transition">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-ink transition">
            Terms
          </Link>
          <a href="#contact" className="hover:text-ink transition">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
