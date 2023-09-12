import React from "react";

export default function CategoryItem (props) {
    console.log(props);
    return (
        <article>
            <h2>{props.issue.title}</h2>
            {/* <p>{props.issue.dueDate}</p> */}
            <p>{props.issue.user}</p>
            <p>{props.issue.description}</p>
            {props.issue.checklist[0].isChecked ? <input type="checkbox"/> : <input type="checkbox" />}
            <p>{props.issue.checklist[0].description}</p>
        </article>
    );
}