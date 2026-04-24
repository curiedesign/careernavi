import type { HTMLAttributes } from 'react';

export function Card({ className = '', children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded border border-subtle bg-paper p-6 shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
