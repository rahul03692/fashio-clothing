import React from "react";
import MenuItem from "../menu-item/menu-item-comp";
import { connect } from "react-redux";
import { selectDirectoryItems } from "../../redux/directory/directory-selector";
import "./directory-styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...others }) => (
      <MenuItem id={id} {...others} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  sections: selectDirectoryItems(state),
});

export default connect(mapStateToProps)(Directory);
