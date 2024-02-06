export default function Section({ children, id, title }) {
    return (
        <section id="{id}">
                <header>
                    <h2>{title}</h2>
                </header>
                <div className="container">
                    {children}
                </div>
        </section>
    );
}
