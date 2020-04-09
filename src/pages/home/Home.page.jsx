import React from 'react';
import './Home.style.scss';

import Categories from '../../components/categories/Categories.component';

const Home = () => (
    <div className="homepage">
        <h1>Home Page</h1>
        <Categories />
    </div>
);

export default Home;