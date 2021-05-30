import React from "react";

import { connect } from "react-redux";
import {selectCollectionsPreview} from '../../redux/shop/shop-selector';
import CollectionsPreview from '../collections-preview/collections-preview-comp';
import "./collection-overview-styles.scss";

const CollectionOverview = ({ collections }) => {
  return(
  <div className="collection-overview">
    {collections.map(({ id, ...others }) => (
      <CollectionsPreview key={id} {...others} />
    ))}
  </div>
)};

const mapStateToProps = (state) => ({
  collections: selectCollectionsPreview(state),
});

export default connect(mapStateToProps)(CollectionOverview);
