import React, { FunctionComponent, ReactNode } from "react";

export const CircularImage: FunctionComponent<{
  children?: ReactNode;
}> = props => {
  const { children } = props;
  return <div className="ui-circle">{children}</div>;
};
