import React from "react";
import "./menu.css";

const NavLink: React.FC<{ url: string }> = ({ url, children }) => {
  return <a href={url}>{children}</a>;
};

export const Menu: React.FC = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink url="/home">home</NavLink>
          </li>
          <li>
            <NavLink url="/about">about</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
