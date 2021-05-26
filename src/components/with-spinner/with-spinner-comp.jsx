import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner-styles";

export const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...others }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (<WrappedComponent {...others} />);
  };
  return Spinner;
};
