import Button from "./Button";

export default function ButtonDarkMode() {
    
    function toggleDarkMode() {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
        } else {
            document.body.classList.toggle("dark-theme");
        }
    }
    
    return (
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    )
}
