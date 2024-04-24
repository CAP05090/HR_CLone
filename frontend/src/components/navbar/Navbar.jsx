import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  let productLink = [
    { to: "/screen", displaytext: "Screen" },
    { to: "/features/real-world-questions", displaytext: "Real World Questions" }
  ];
  let solutionLink = [
    { to: "/skill-strategy", displaytext: "Set Up a Skills Strategy" },
    { to: "/talent-brand", displaytext: "Showcase Your Talent Brand" },
    { to: "/embrace-ai", displaytext: "Embrace AI" }
  ];
  let resourcesLink = [
    { to: "/roles-directory", displaytext: "Roles Directory" },
    { to: "/integrations", displaytext: "Integrations" },
    { to: "/what's-news", displaytext: "What's New" }
  ];

  return (
    <>
      <div className={style.navbar}>
        <div>
          <Link to="/">
            <img className={style.logo} src='https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png' alt='HackerRank Logo' />
          </Link>
        </div>
        <div className={style.menu}>
          <img
            className={style.menubtn}
            src={menu
              ? "https://cdn-icons-png.flaticon.com/128/2976/2976286.png"
              : "https://cdn-icons-png.flaticon.com/128/2099/2099192.png"
            }
            alt={menu ? "Close Menu" : "Menu"}
            onClick={() => setMenu(!menu)} />
          <div className={`${style.menuItem} ${menu && style.menu}`}
            onClick={() => setMenu(false)} >
            <div className={style.dropdown}>
              <p className={style.dropbtn}>PRODUCTS</p>
              <div className={style.dropdown_content}>
                {productLink.map((link, id) => (
                  <Link key={id} to={link.to} className={style.lnk}>{link.displaytext}</Link>
                ))}
              </div>
            </div>
            <div className={style.dropdown}>
              <p className={style.dropbtn}>SOLUTIONS</p>
              <div className={style.dropdown_content}>
                {solutionLink.map((link, id) => (
                  <Link key={id} to={link.to} className={style.lnk}>{link.displaytext}</Link>
                ))}
              </div>
            </div>
            <div className={style.dropdown}>
              <p className={style.dropbtn}>RESOURCES</p>
              <div className={style.dropdown_content}>
                {resourcesLink.map((link, id) => (
                  <Link key={id} to={link.to} className={style.lnk}>{link.displaytext}</Link>
                ))}
              </div>
            </div>
            <div className={style.dropdown}>
              <Link className={style.lnk} to="/contact-us">Contact Us</Link>
            </div>
            <div className={style.usercontent}>
              <p><Link className={style.userlink} to="/auth/login">Login</Link></p>
              <p><Link to="/dashboard" className={style.userlink}>For Developer</Link></p>
              <p><Link to="/auth/signup" className={style.userlink}>Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
