import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 max-w-md pb-16 text-xs text-slate-500 sm:pb-0">
      <p>
        Built with Next.js and Tailwind CSS, deployed with Vercel. Inspired by{" "}
        <Link
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-slate-400 hover:text-cyan-300 focus-visible:text-cyan-300"
        >
          Brittany Chiang&apos;s portfolio
        </Link>
        .
      </p>
    </footer>
  );
}
