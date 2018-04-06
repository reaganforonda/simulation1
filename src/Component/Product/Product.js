import React from 'react';

export default function Product(props){
    return (
        <div>
           <h2>{props.product.name}</h2>
           <p>{props.product.price}</p>
           <img src={props.product.img}/>
        </div>
    )
}