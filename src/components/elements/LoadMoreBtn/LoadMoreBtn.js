import React from 'react';
import './LoadMoreBtn.css'

const loadMoreBtn = (props)=>{
return(
    <div className='rmdb-loadmorebtn' onClick={props.onClick}>
        LoadMoreBtn
    </div>
)
}
export  default loadMoreBtn;