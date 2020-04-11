import React from 'react';
import './Collection-preview.style.scss';
import { withRouter } from "react-router-dom";

import CollectionItem from '../collection-item/Collection-item.component';

const CollectionPreview = (props) => {
    const { title, items, routeName, match, history } = props;
    return (
        <div className="collection-preview">
            <h1 className="title"
                onClick={ () => history.push(`${match.path}/${routeName}`) } >
                { title.toUpperCase() }
            </h1>
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

export default withRouter(CollectionPreview);