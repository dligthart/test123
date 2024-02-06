export default function Article({className, children}) {
    return (
        <article className={className}>
            {children}
        </article>
    );
}