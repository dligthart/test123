export default function Button({ onClick, variant, children }) {
    return (
        <button className="button {variant}" onClick={onClick}>
            {children}
        </button>
    );
}
