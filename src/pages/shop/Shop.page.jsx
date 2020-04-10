import React, { useState } from 'react';
import './Shop.style.scss';

import { SHOP_DATA } from './shop.data';
import CollectionPreview from '../../components/collection-preview/Collection-preview.component';

const ShopPage = () => {
    const [shopData, setShopData] = useState(SHOP_DATA);
    return (
        <div className="shop-page">
            {
                shopData.map(({ id, ...restShopData }) => (
                    <CollectionPreview key={ id } { ...restShopData } />
                ))
            }
        </div>
    );
};

export default ShopPage;