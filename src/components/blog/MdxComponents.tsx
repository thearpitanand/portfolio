import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@thearpitanand/lib/utils";
import { Mermaid } from "@thearpitanand/components/blog/Mermaid";

function isInternalHref(href?: string): boolean {
  if (!href) return false;
  return href.startsWith("/") || href.startsWith("#");
}

function MdxAnchor({
  href,
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(
    "font-medium text-cyan-300 underline-offset-2 hover:underline focus-visible:underline",
    className,
  );

  if (isInternalHref(href)) {
    return (
      <Link href={href ?? "#"} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      {...rest}
    >
      {children}
    </a>
  );
}

function MdxImage({ src, alt, className }: ImageProps) {
  if (typeof src !== "string") {
    return null;
  }
  return (
    <span className="my-6 block overflow-hidden rounded-lg border border-slate-200/10">
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={630}
        sizes="(max-width: 768px) 100vw, 768px"
        className={cn("h-auto w-full object-cover", className)}
      />
    </span>
  );
}

interface SummaryProps {
  children: ReactNode;
}

function Summary({ children }: SummaryProps) {
  return (
    <aside className="my-6 rounded-md border border-cyan-300/30 bg-cyan-300/5 p-4">
      <p className="mb-2 text-xs font-bold tracking-widest text-cyan-300 uppercase">
        TL;DR
      </p>
      <div className="text-sm text-slate-300 [&>p]:mt-0">{children}</div>
    </aside>
  );
}

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, string> = {
  info: "border-cyan-300/30 bg-cyan-300/5",
  tip: "border-emerald-400/30 bg-emerald-400/5",
  warning: "border-amber-400/30 bg-amber-400/5",
  danger: "border-red-400/30 bg-red-400/5",
};

function Callout({ type = "info", title, children }: CalloutProps) {
  return (
    <div className={cn("my-6 rounded-md border p-4", calloutStyles[type])}>
      {title && (
        <p className="mb-2 font-semibold text-slate-200">{title}</p>
      )}
      <div className="text-sm text-slate-300 [&>p]:mt-0">{children}</div>
    </div>
  );
}

function FAQ({ children }: { children: ReactNode }) {
  return (
    <dl className="my-6 divide-y divide-slate-200/10 border-y border-slate-200/10">
      {children}
    </dl>
  );
}

interface FAQItemProps {
  question: string;
  children: ReactNode;
}

function FAQItem({ question, children }: FAQItemProps) {
  return (
    <details className="group py-3">
      <summary className="cursor-pointer list-none font-medium text-slate-200 marker:hidden hover:text-cyan-300">
        <dt className="inline">{question}</dt>
      </summary>
      <dd className="mt-2 text-sm text-slate-400 [&>p]:mt-0">{children}</dd>
    </details>
  );
}

function Pre({ className, ...props }: HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-md border border-slate-200/10 p-4 text-sm",
        className,
      )}
      {...props}
    />
  );
}

function Code({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "rounded px-1 py-0.5 font-mono text-[0.85em]",
        className,
      )}
      {...props}
    />
  );
}

export const mdxComponents = {
  a: MdxAnchor,
  img: MdxImage,
  pre: Pre,
  code: Code,
  Summary,
  Callout,
  FAQ,
  FAQItem,
  Mermaid,
};
