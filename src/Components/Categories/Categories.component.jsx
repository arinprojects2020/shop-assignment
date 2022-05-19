import React from "react";
import "./Categories.styles.scss";
import CategoryItem from "../Category/Category.component";
import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:5000/categories").then((response) => {
			setCategories(response.data);
		});
	}, []);

	return (
		<>
			<div className="categories-container">
				{categories
					.sort((a, b) => a.order - b.order)
					.filter(function (elem) {
						return elem.order >= 0;
					})
					.map((category) => {
						return (
							<CategoryItem
								key={category.key}
								description={category.description}
								imageUrl={category.imageUrl}
								order={category.order}
								name={category.name}
								categoryKey={category.key}
								id={category.id}
							/>
						);
					})}
			</div>
		</>
	);
};

export default Categories;
