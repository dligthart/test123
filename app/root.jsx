import {
  LiveReload,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

import styles from "./styles/app.css";
import TheHeader from "./components/TheHeader";
import Section from "./components/Section";
import TheFooter from "./components/TheFooter";
import ButtonDarkMode from "./components/ButtonDarkMode";

export const meta = () => [
  { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=yes" },
]

export const links = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  const menuItems = [
    {
      slug: "home",
      title: "Home",
      content: "Welcome home.",
    }
  ];

  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <ButtonDarkMode />
        <TheHeader title="123 Test" menuItems={menuItems}/>
        <main>
          <Outlet />
        </main>
        <TheFooter />
        
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
