import axios from "axios";
import { useState,useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard.component";
import ProductSidebar from "../../Components/Product/ProductSidebar.component";
import "./product.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/product.context";


//const config = {
	//url: "http://localhost:5000/products",
	//method: "get",
	//headers: { "Content-Type": "application/json" }
//};


const Products=()=>{
    
    const[searchParams] = useSearchParams();
    const category_id = searchParams.get("category_id")
    //const [products,setProducts]=useState([]);
    const {products}=useContext(ProductContext)
    const filterProducts=useMemo(()=>{
        if(!category_id){
            return products;
        }else{
            return products.filter((elem)=> elem.category ==  category_id );
        }
    },[products,category_id]);

    {/*const fetchProductData = async () => {
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
    return(
        <div className="product-main">
            <ProductSidebar/>
            <div className="product-wrapper">
                {filterProducts.map((product)=>{
                    return(
                     <ProductCard 
                     stock={product.stock}
                     key={product.sku}
                     name={product.name}
                     description={product.description}
                     imageURL={product.imageURL}
                     price={product.price}
                         id={product.id}
                     />
                    )
               } )}
            </div>
        </div>
    )
}

export default Products;



