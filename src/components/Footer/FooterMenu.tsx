import React from "react";
import { Link } from "react-router-dom";
import { footerMegaMenuItems } from "constants/MenuItems";

export default function FooterMenu() {
  return (
    <div className="footer-menu">
      {footerMegaMenuItems.map((item, index) => {
        return (
          <div className="menu-column" key={index}>
            <span className="menu-row-title">{item.title}</span>
            <div className="menu-row-content">
              {item.subItems.map((i, index) => (
                <Link to={i.href} className="title" key={index}>
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
