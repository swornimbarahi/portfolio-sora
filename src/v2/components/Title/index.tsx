import React, { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";

interface TitleProps {
  block?: boolean;
  bold?: number;
  className?: string;
  children: ReactNode;
  size?: number;
  uppercase?: boolean;
}

const Title: FunctionComponent<TitleProps> = ({
  block = true,
  bold = 0,
  className = "",
  children,
  size = 2,
  uppercase = false
}) => {
  const titleStyle = {
    "ui-text--caps": uppercase,
    "ui-font-bold": bold === 1,
    "ui-font-bolder": bold === 2
  };

  return block ? (
    <div className={classnames(titleStyle, `ui-font--${size}`, className)}>
      {children}
    </div>
  ) : (
    <span className={classnames(titleStyle, `ui-font--${size}`, className)}>
      {children}
    </span>
  );
};

export default Title;
