import React from "react";
import CollectionsOverview from '../../components/collection-overview/collection-overview-comp'; 
import CollectionPage from '../collection-page/collection-page-comp';
import {Route} from 'react-router-dom';

const ShopPage = ({match}) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
  
);


export default ShopPage;
