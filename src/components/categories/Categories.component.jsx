import React from 'react';
import './Categories.style.scss';

import { useState } from 'react';
import { categoriesData } from './categoriesData';
import Category from '../category/Category.component';

const Categories = () => {
    const [categories, setCategories] = useState(categoriesData);

    return (
        <div className='categories-menu'>
            { categories.map(({ title, imageUrl, id, size }) => (
                <Category key={ id } title={ title } imageUrl={ imageUrl } size={ size } />
            )) }
        </div>
    );
};

export default Categories;