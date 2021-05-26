import React from "react";
import CollectionsOverview from "../../components/collection-overview/collection-overview-comp";
import CollectionPage from "../collection-page/collection-page-comp";
import { Route } from "react-router-dom";
import { firestore, transformItems } from "../../firebase/firebase.utils";
import { SetLoading, UpdateItems } from "../../redux/shop/shop-actions";
import { connect } from "react-redux";
import {WithSpinner} from '../../components/with-spinner/with-spinner-comp';
import {selectLoading} from '../../redux/shop/shop-selector'
const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  unSubscribe = null;

  componentDidMount() {
    const { updateItems,isLoading,loading} = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const transformMap = transformItems(snapshot);
      updateItems(transformMap);
      if(loading===true) isLoading(!loading);
    });
  }

  render() {
    const { match ,loading} = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner  isLoading={loading} {...props}/>)} />
        <Route
          path={`${match.path}/:collectionId`}
          render={props =>(<CollectionPageWithSpinner isLoading={loading} {...props} />)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: selectLoading(state),
});


const mapDispatchToProps = (dispatch) => ({
  updateItems: (transformMap) => dispatch(UpdateItems(transformMap)),
  isLoading:(loading) => dispatch(SetLoading(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
