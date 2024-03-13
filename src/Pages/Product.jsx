import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const Product = all_products.find((e)=> e.id===Number(productId))
    return(
        <div>
            <Breadcrums Product = {Product}/>
            <ProductDisplay Product = {Product}/>
        </div>
    )
}

export default Product