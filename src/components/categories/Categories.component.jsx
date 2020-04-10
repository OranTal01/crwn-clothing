import React, { useState } from 'react';
import './Categories.style.scss';

import { CATEGORIES_DATA } from './categories.data';
import Category from '../category/Category.component';

const Categories = () => {
    const [categories, setCategories] = useState(CATEGORIES_DATA);

    return (
        <div className='categories-menu'>
            { categories.map(({ id, ...restCategoryData }) => (
                <Category key={ id } { ...restCategoryData } />
            )) }
        </div>
    );
};

export default Categories;