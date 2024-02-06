
import { json } from "@remix-run/node";

export async function login(username, password) {

    const response = await fetch("http://localhost:8888/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();

    //return json({ user_id: 12345 });
}