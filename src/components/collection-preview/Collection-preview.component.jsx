import React from 'react';
import './Collection-preview.style.scss';

import CollectionItem from '../collection-item/Collection-item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className="preview">
                { items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...restCollectionProps }) => (
                        <CollectionItem key={ id } { ...restCollectionProps } />
                    ))
                }
            </div>
        </div>
    );
};

export default CollectionPreview;