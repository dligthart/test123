

import { Link, useLoaderData } from "@remix-run/react";
import { json, redirect} from "@remix-run/node";
import { getUserId } from "../utils/session.server";

export async function loader( { request }) {
    const userId = await getUserId(request);

    if (!userId) {
        return redirect('/admin/login');
    }

    return json({ user: userId });
}


export default function Admin() {
    const { user } = useLoaderData();

    return (
        <section>
            <p>User {user} is logged in.</p>
            <Link to="/admin/logout">(Logout)</Link>
        </section>
    );
}