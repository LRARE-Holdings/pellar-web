import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-6">
          404
        </p>
        <h1 className="font-outfit font-light text-5xl md:text-7xl text-off-white leading-[1.05] tracking-tight max-w-3xl">
          Nothing here.
        </h1>
        <p className="mt-8 font-dm text-lg text-stone max-w-md leading-relaxed">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 mt-10 font-dm text-lg text-forest hover:text-sage transition-colors duration-300 border-b border-transparent hover:border-sage pb-1"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Back to Pellar</span>
        </Link>
      </div>
    </main>
  );
}
