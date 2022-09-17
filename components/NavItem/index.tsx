import React from "react";
import "./style.css";

type NavItemProps = {
  endpoint: string;
};

const NavItem: React.FC<NavItemProps> = ({ endpoint }) => {
  return (
    <a href="#" data-endpoint={endpoint}>
      {endpoint.toUpperCase()}
    </a>
  );
};

export default NavItem;
