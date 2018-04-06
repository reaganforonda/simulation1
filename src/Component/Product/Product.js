import React from 'react';
import Button from '../Button/Button';

export default function Product(props){
    return (
        <div>
           <h2>{props.product.name}</h2>
           <p>{props.product.price}</p>
           <img src={props.product.img}/>
           <div className='buttons'>
           <Button id={props.product.id} onclick={props.delete} title='Delete'/>
           <Button title='Edit'/>
           </div>
        </div>
    )
}