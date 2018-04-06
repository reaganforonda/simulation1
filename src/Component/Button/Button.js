import React from 'react';

export default function Button(props){
    return (
        <button onClick={props.onclick} type='button'>{props.title}</button>
    )
}