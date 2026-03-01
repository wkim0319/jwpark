import Link from "next/link";

/**
 * Next.js App Router: this file is shown when a route doesn't exist
 * (user navigates to a URL with no matching page) or when notFound() is called.
 */
export default function NotFound() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#008080] p-4"
      style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
    >
      <div className="rounded-lg border-2 border-[#0054a6] bg-white px-8 py-6 shadow-xl">
        <h1 className="text-xl font-bold text-gray-900">404 – Page not found</h1>
        <p className="mt-2 text-gray-600">
          This URL doesn’t exist. Head back to the AIM memories.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block rounded bg-[#0054a6] px-4 py-2 text-sm font-medium text-white hover:bg-[#003d7a]"
        >
          Back to chat
        </Link>
      </div>
    </div>
  );
}
