import React from 'react';

export default function Button(props){
    return (
        <button onClick={()=>props.onclick(props.id)} type='button'>{props.title}</button>
    )
}