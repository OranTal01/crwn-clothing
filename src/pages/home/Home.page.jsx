import React from 'react';
import './Home.style.scss';

import Categories from '../../components/categories/Categories.component';

const HomePage = () => (
    <div className="homepage">
        <Categories />
    </div>
);

export default HomePage;