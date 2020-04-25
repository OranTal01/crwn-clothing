import React from 'react';
import { connect } from 'react-redux';

import { selectCategories } from '../../redux/categories/categories-selectors';
import Category from '../category/Category.component';

import './Categories.style.scss';


const Categories = ({ categories }) => {

    return (
        <div className='categories-menu'>
            { categories.map(({ id, ...restCategoryData }) => (
                <Category key={ id } { ...restCategoryData } />
            )) }
        </div>
    );
};

const mapStateToProps = state => ({
    categories: selectCategories(state)
});

export default connect(mapStateToProps)(Categories);