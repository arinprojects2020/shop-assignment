import React from "react";
import axios from "axios";
import { useSearchParams} from "react-router-dom";
import { useEffect,useState } from "react";
import "./ProductSideBar.styles.scss";



const CategoryOption = ({id,name,onClick})=>{
    return <div onClick ={()=>onClick(id)}>{name}</div>
};
const config = {
    url: "http://localhost:5000/categories",
    method: "get",
    headers: { "Content-Type": "application/json" }
};

 const ProductSidebar=()=>{
    const [searchParams ,setSearchParams]= useSearchParams();
    const category_id = searchParams.get("category_id");

   
    const [categories,setCategories] =  useState([]);

    const fetchSidebarData = async () => {
		try {
			const response = await axios(config);
			console.log("respnse from Sidebar", response.data);
			setCategories(response.data.sort((a,b)=>a.order-b.order).filter((category)=>category.enabled));
		} catch (err) {
			console.log("error while fetching data ", err);
		}
	};
    const onClick = (id)=>{
        if(id != category_id){
            searchParams.set("category_id",id);

        }else{
            searchParams.delete("category_id");
        }
        setSearchParams(searchParams);
    };
    useEffect(() => {
		fetchSidebarData();
	},[]);

   

    const handleProductPage=(e)=>{};
    return(
        <div className="sidebar">
            <div className="category-select" onChange={handleProductPage} >{
                categories.map((category)=>{
                    return(
                        <CategoryOption key ={category.id}
                        id={category.id}
                        name={category.name}
                            onClick={onClick}
                        />
                    );
                }) }
            
            </div>
            </div>
                  
                
            );
            };

export default ProductSidebar;