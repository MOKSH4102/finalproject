import React, { useContext } from "react";
import "./CSS/ShopCategrey.css";
import { ShopContext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategrey = (props) => {
  console.log("🚀 ~ ShopCategrey ~ props:", props);
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-categrey">
      <img className="shopcategrey-banner" src={props.banner} alt="" />
      <div className="shopcategery-indexsort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategrey-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategrey-products">
        {all_products.map((item, i) => {
          console.log(
            "🚀 ~ {all_products.map ~ props.categrey:",
            props.categrey
          );
          if (props?.categery === item?.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategrey-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategrey;
