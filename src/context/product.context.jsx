import { createContext } from "react";
//import axios from "axios";
import { addCollectionAndDocuments } from "../Utils/Firebase/firebase.utils";
import { useEffect,useState } from "react";
import SHOP_DATA from "../shop-data";




//const config = {
	//url: "http://localhost:5000/products",
	//method: "get",
	//headers: { "Content-Type": "application/json" }
//};

export const ProductContext = createContext({
    products:[],
});

export const ProductsProvider =({children})=>{
    const [products,setProducts]=useState([]);
	useEffect(()=>{
		addCollectionAndDocuments("categories",SHOP_DATA)
	},[]);

  {/*  const fetchProductData = async () => {
		try {
			const response = await axios(config);
			console.log("respnse from product", response.data);
			setProducts(response.data);
		} catch (err) {
			console.log("error while fetching data ", err);
		}
	};
	useEffect(() => {
		fetchProductData();
	}, []);*/}

    const value = {products};

    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )

}