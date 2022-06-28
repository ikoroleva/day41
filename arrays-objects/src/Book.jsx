import { Checkbox } from "./Checkbox";

export function Book({ book }) {
    const {
        title,
        author,
        description,
        website,
        isbn,

        ...options
    } = book;
    return (
        <div className="book">
            {console.log(title)}
            <h2><a href={website}>{title}</a> </h2>
            <h3>by {author}</h3>
            <div className="book_description">{description}</div>
            <Checkbox id={isbn} />
        </div>
    )

}