import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/Collection-item.component';
import { selectCollection } from '../../redux/shop/shop-selectors';

import './Collection.page.style.scss';

const collectionPage = ({ collection: { items, title } }) => {
    return (
        <div className="collection-page">
            <h2 className="title">{ title }</h2>
            <div className="items">
                { items.map(item =>
                    <CollectionItem key={ item.id } item={ item } />) }
            </div>

        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(collectionPage);