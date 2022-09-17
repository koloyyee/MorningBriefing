import React, { MouseEventHandler } from "react";
import "./style.css";

type NavItemProps = {
  endpoint: string;
  onClickHandler: MouseEventHandler<HTMLAnchorElement>;
};

const NavItem: React.FC<NavItemProps> = ({ endpoint, onClickHandler }) => {
  return (
    <a href="#" data-endpoint={endpoint} onClick={onClickHandler}>
      {endpoint.toUpperCase()}
    </a>
  );
};

export default NavItem;
