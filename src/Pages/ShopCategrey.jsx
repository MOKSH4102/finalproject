import React, { useContext } from 'react'
import './CSS/ShopCategrey.css'
import { ShopContext } from '../Context/Shopcontext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategrey = (props) => {
    const {all_product} = useContext(ShopContext);
    return(
        <div className='shop-categrey'>
            <img src={props.banner} alt="" />
            <div className="shopcategery-indexsort">
                <p>
                    <span>Showing 1-12</span>out of 36 products
                </p>
                <div className="shopcategrey-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategrey-products">
                {all_product.map((item,i)=>{
                    if(props.categrey===item.categrey){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategrey