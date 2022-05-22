import React from "react";
import axios from "axios";
import { useRoutes,Link } from "react-router-dom";
import { useEffect,useState } from "react";





 const ProductSidebar=()=>{
     const route = useRoutes();
     const config = {
        url: "http://localhost:5000/categories",
        method: "get",
        headers: { "Content-Type": "application/json" }
    };
    const [categories,setCategories] =  useState([]);

    const fetchSidebarData = async () => {
		try {
			const response = await axios(config);
			console.log("respnse from Sidebar", response.data);
			setCategories(response.data.sort((a,b)=>a.order-b.order).filter((category)=>category.enabled));
		} catch (err) {
			console.log("error while fetching data ", err);
		}
	}
    useEffect(() => {
		fetchSidebarData();
	},[]);

    const CategoryOption =({id,name})=>{
        return <option value={id}>{name}</option>;
    }

    const handleProductPage=(e)=>{
      route.push(`/products/${e.target.value}`)
    }
    return(
        <div className="sidebar">
            <div className="category-select" onChange={handleProductPage} value={route.query.category}>{
                categories.map((category)=>{
                    return(
                        <CategoryOption key ={category.id}
                        id={category.id}
                        name={category.name}/>
                    )
                })
            }
            
            </div>
            <div className=""sidebar-list>
            {categories.map((category)=>{
                return(
                    <div className="sidebar-item" key={category.id}>{route.query.category?(<Link to ={`/products/$(category.id)`}>{category.name}</Link>):""}
                    
                    </div>
                  
                )
            })}
                </div>
            </div>
    )
}

export default ProductSidebar;