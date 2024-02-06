import { createCookieSessionStorage, redirect } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",

        // all of these are optional
        //domain: "remix.run",
        // Expires can also be set (although maxAge overrides it when used in combination).
        // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
        //
        // expires: new Date(Date.now() + 60_000),
        httpOnly: true,
        maxAge: 60,
        path: "/",
        sameSite: "lax",
        secrets: ["s3cret1"],
        secure: true,
    }
});

async function getSession(request) {
    const session = await sessionStorage.getSession(
        request.headers.get("Cookie")
    );

    return session;
}

export async function createSession({request, userId}) {
    const session = await getSession(request);
     // $_SESSION['userId] = $userId;
    session.set('userId', userId);

    return redirect('/admin', {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session, {
                maxAge: 60 * 60 * 24 * 7
            })
        }
    });
}

export async function getUserId(request) {
    const session = await getSession(request);

    const userId = session.get('userId');

    return userId;
}

export async function logout(request) {
    const session = await getSession(request);

    return redirect("/admin/login", {
        headers: {
          "Set-Cookie": await sessionStorage.destroySession(session),
        },
    });
}