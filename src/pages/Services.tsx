import { Link } from "react-router-dom";
import siteData from "@/data/data";

export default function Services() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-4xl font-bold">
          Our Services
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.map((site) => (
            <Link
              key={site.slug}
              to={`/services/${site.slug}`}
              className="rounded-xl border p-6 transition hover:shadow-lg"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {site.slug}
              </h2>

              <p className="text-gray-600">
                {site.heroTitle}
              </p>

              <span className="mt-5 inline-block font-medium">
                View Service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}