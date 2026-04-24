import { Link } from 'react-router';

export function Header() {
  return (
    <header className="border-b border-subtle bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-tight">
          CareerNavi
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/#how" className="text-charcoal hover:text-ink transition">
            How it works
          </a>
          <Link to="/workbench" className="text-charcoal hover:text-ink transition">
            Workbench
          </Link>
          <Link to="/privacy" className="text-charcoal hover:text-ink transition">
            Privacy
          </Link>
          <a href="#signin" className="text-charcoal hover:text-ink transition hidden sm:inline">
            Sign in
          </a>
          <a
            href="#start"
            className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 text-sm font-medium hover:bg-warm-charcoal transition"
          >
            Start
          </a>
        </nav>
      </div>
    </header>
  );
}
