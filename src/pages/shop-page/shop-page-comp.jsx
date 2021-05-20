import React from 'react';

import SHOP_DATA from './shop-data';
import CollectionsPreview from '../../components/collections-preview/collections-preview-comp'; 

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state={
            Collections: SHOP_DATA,
        }
    }

    render(){
        const {Collections}=this.state;
        return(
            <div className='shop-page'>
                {Collections.map( ({id,...others}) =>(
                    <CollectionsPreview  key={id} {...others}/>
                ))}
            </div>
        );
    }

}
export default ShopPage;