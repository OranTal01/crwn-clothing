import React from 'react';
import './Category.style.scss';

const Category = ({ title, imageUrl, size }) => {
    return (
        <div className={ `${size} category-item` }>
            <div
                className='background-image'
                style={ {
                    backgroundImage: `url(${imageUrl})`
                } }
            />
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
};

export default Category;