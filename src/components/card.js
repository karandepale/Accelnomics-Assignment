import React from "react";

const Card = ( { item  , handleClick} ) =>{
    const {title , price , img} = item;
    return (
        <div className="cards">
            <div className="image-box">

                <img src={img} alt="" />

                <div className="details">
                    <p> {title}  </p>
                    <p>Price - {price}Rs </p>


                    <button className="btn" onClick={()=>handleClick(item)} > Add to cart </button>
                </div>

                

            </div>
        </div>
    )
}

export default Card;