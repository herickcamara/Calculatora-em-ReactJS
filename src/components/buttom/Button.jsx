import React from 'react'
import './button.css'

export default props =>{
    let classes = 'button '
    classes += props.triple?'triple':''
    classes += props.douplo?'douplo':''
    classes += props.opera?'opera':''
    
    return(
    
    <button onClick={e => props.click && props.click(props.lebal)} className={classes}> {props.lebal} </button>
)}