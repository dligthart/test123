import Article from "./Article";
import Figure from "./Figure";

export default function Card({image, title, className}) {
    return (
        <Article className="project-card">
            <Figure 
                image={image}
                title={title}
                variant={className} />
        </Article>
    );
}