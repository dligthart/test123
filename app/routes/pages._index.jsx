import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPages } from "../models/page.server";

export async function loader() {
    return json({
        pages: await getPages()
    });
};

export default function Pages() {
    const { pages } = useLoaderData();
    return (
      <main>
        <section className="pages">
          <header>
            <h2>Pages</h2>
          </header>
          <ul className="pages__list">
          {pages.map((page) => (
            <li key={page.slug}>
              <Link
                to={`/pages/` + page.slug}
                className="text-blue-600 underline"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      </main>
    );
  }