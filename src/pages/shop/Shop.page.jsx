import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/Collection-overview.component';
import collectionPage from '../collection/Collection.page';

import './Shop.style.scss';

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={ `${match.path}` } component={ CollectionOverview } />
            <Route exact path={ `${match.path}/:collectionId` } component={ collectionPage } />
        </div>
    );
};

export default ShopPage;