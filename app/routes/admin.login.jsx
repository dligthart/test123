import { Form } from "@remix-run/react";

import { redirect } from "@remix-run/node";

import { login } from "../models/user.server";
import { createSession } from "../utils/session.server";

export async function action({ request }) {
    console.log('request', request);

    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");
    
    const userResponse = await login(email, password);

    const user = await userResponse.json();

    return createSession({
        request,
        userId: user.user_id
    })
}


export default function AdminLogin() {
    return (
        <section>
            <Form method="post">
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" required />
                <button type="submit" className="button button-submit">Log in</button>
            </Form>
        </section>
    );
}