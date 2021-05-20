import React from "react";
import {CollectionItem} from '../collection-item/collection-item-comp';
import './collections-preview-styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id,...others}) => (
          <CollectionItem key={id} {...others} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
