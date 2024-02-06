import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPage } from "../models/page.server";

export const loader = async ({ params }) => {
    const page = await getPage(params.slug);
    return json({ page });
};

export default function Page() {

    const { page } = useLoaderData();
    console.log(page);
    return (
        <section className="page page-{page.slug}">
            <h1>{page.title}</h1>
            {page.content ? <p>{page.content}</p> : null}
        </section>

    );
}