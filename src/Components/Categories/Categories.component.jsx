import React from "react";
import "./Categories.styles.scss";
import CategoryItem from "../Category/Category.component";
import axios from "axios";
import { useEffect, useState } from "react";


const config = {
	url: "http://localhost:5000/categories",
	method: "get",
	headers: { "Content-Type": "application/json" }
};

const Categories = () => {
	const [categories, setCategories] = useState([]);

	const fetchCategoryData = async () => {
		try {
			const response = await axios(config);
			console.log("respnse from category", response.data);
			setCategories(response.data);
		} catch (err) {
			console.log("error while fetching data ", err);
		}
	};
	useEffect(() => {
		fetchCategoryData();
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
