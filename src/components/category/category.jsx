import React from "react";
import CategoryHeader from "./categoryHeader/categoryHeader";
import CategoryItem from "./categoryItem/categoryItem";
// import getCategories from "../../api/getCategories";

import './category.css'

export default function Category(props) {

    const category = [
        {
            title: 'A Faire',
            issues: [
                {
                    title: 'Tache n°1',
                    dueDate: new Date(),
                    user: 'Audrey',
                    checklist: [
                        {
                            isChecked: false,
                            description: 'test n°1'
                        },
                        {
                            isChecked: false,
                            description: 'test n°2'
                        }
                    ]
                }
            ]
        }
    ];
    return (
        <div className="category">
            <CategoryHeader>
                {category[0].title}
            </CategoryHeader>
            <CategoryItem issue={category[0].issues[0]} />
        </div>
    );
}