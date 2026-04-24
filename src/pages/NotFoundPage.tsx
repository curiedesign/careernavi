import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm tracking-widest uppercase text-accent mb-4">Off the edge</p>
      <h1 className="font-serif text-8xl leading-none tracking-tight mb-6">404</h1>
      <p className="text-lg text-charcoal mb-10">
        This page doesn&rsquo;t exist. Blank page, fresh start.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-ink text-paper px-8 py-4 text-base font-medium hover:bg-warm-charcoal transition"
      >
        Back to home
      </Link>
    </div>
  );
}
