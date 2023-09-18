import React from 'react'
import './Post.css'
import warwickImage from './warwick.jpeg';
const Post = (props) => {
    return (
        
        <>
        <div className='Post'>
            <div className="image-container">
                <img src={props.link} alt={props.alt} />
            </div>
                <h2 className='name'>{props.name}</h2>
                <h4 className='country'>{props.release}</h4>
                <a href={props.hyperLink} target="_blank" rel="noopener noreferrer">
                    <h5 className='viewSite'>{props.viewSite}</h5>
                </a>
        </div>
        </>
    )
    
}
export default Post