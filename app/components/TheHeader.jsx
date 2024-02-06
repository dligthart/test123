import {
    Link,
} from "@remix-run/react";

export default function TheHeader({title, menuItems}) {
    return (
        <header className="header">
            <h1><a href="/" rel="home" className="header__logo">{title}</a></h1>
            <nav className="header__nav">
                <ul className="header__menu">

                    {menuItems.map((page) => {
                        return <li key={page.slug} className="header__menu-item">
                            <Link to={`/pages/` + page.slug.toLowerCase()}>{page.title}</Link>
                        </li>
                    })}   
                </ul>
            </nav>
        </header>
    );
}