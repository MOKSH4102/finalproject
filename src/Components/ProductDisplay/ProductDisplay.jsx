import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import stardull_icon from '../Assets/star_dull_icon.png'
import Product from '../../Pages/Product'
import { ShopContext } from '../../Context/Shopcontext'

const ProductDisplay = (props) => {
    const {Product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    <img src={Product.image} alt="" />
                    
                </div>
                <div className="productdisplay-image">
                    <img className='productdisplay-main-img' src={Product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{Product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={stardull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${Product.old_price} </div>
                    <div className="productdisplay-right-price-new">${Product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                   A Lightweight, Usally knitted, pullover shirt, close fitting and with a round neckline and short sleeves, warm as a undershirt or outer garment. 
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : </span>Women, T-shirt, Crop-top</p>
                <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay