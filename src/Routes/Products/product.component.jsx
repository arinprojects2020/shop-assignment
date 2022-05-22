import axios from "axios";
import { useEffect,useState } from "react";
import ProductCard from "../../Components/Product/ProductCard.component";
import ProductSidebar from "../../Components/Product/ProductSidebar.component";
import "./product.styles.scss";


const config = {
	url: "http://localhost:5000/products",
	method: "get",
	headers: { "Content-Type": "application/json" }
};


const Products=()=>{
    const [products,setProducts]=useState([]);

    const fetchProductData = async () => {
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
	}, []);
    return(
        <div className="product-main">
            <ProductSidebar/>
            <div className="product-wrapper">
                {products.map((product)=>{
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



