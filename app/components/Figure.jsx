export default function Figure({image, title, variant}) {
    return (
        <figure className={variant}>
            <img
                src={image}
                alt={title} className="project-card__image" />
            <figcaption className="project-card__caption">{title}</figcaption>
        </figure>
    );
}