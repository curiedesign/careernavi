import { V2_INHERITED_CONTENT } from '@/content/v2-inherited';

export function WorkbenchPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm tracking-widest uppercase text-accent mb-4">The workbench</p>
      <h1 className="font-serif text-5xl leading-tight tracking-tight mb-6">
        Six tools. Coming soon.
      </h1>
      <p className="text-lg text-charcoal max-w-2xl mb-12">
        The draft-and-elevate workbench arrives in Plan 5. Here&rsquo;s what you&rsquo;ll find
        when it ships.
      </p>
      <ul className="grid sm:grid-cols-2 gap-px bg-subtle border border-subtle">
        {V2_INHERITED_CONTENT.workbenchTools.map((t) => (
          <li key={t.id} className="bg-paper p-6">
            <h2 className="font-serif text-xl mb-2">{t.label}</h2>
            <p className="text-sm text-muted">Placeholder &mdash; implementation in Plan 5.</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
