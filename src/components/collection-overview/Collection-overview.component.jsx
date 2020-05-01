import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';
import CollectionPreview from '../collection-preview/Collection-preview.component';

import './Collection-overview.style.scss';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            <div>
                {
                    collections.map(({ id, ...restShopData }) => (
                        <CollectionPreview key={ id } { ...restShopData } />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionOverview);