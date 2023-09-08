import React from "react";
import CategoryHeader from "./categoryHeader/categoryHeader";

export default function Category (props) {
    return (
        <React.Fragment>
            <CategoryHeader>
                A Faire
            </CategoryHeader>
            <CategoryItem />
        </React.Fragment>
    );
}