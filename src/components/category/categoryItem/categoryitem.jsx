import React from "react";

export default function CategoryItem (props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props?.description && <p>{props.description}</p>}
        </article>
    );
}