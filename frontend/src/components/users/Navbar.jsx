import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import { AuthContext } from '../../Context/authContext';

export const Navbar = () => {
  const {login, logoutHandler} = useContext(AuthContext)
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={style.navbar}>
      <div>
        <Link className={style.logo} to="/dashboard">
          <img src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" alt="logo" />
        </Link>
      </div>
      <div className={style.menu}>
        <img className={style.menubtn}
          src={menu 
            ? "https://img.icons8.com/?size=100&id=120374&format=png"
            :  "https://img.icons8.com/?size=100&id=46&format=png"
            } alt={menu ? "closeMenu" : "menu"}
          onClick={toggleMenu}
        />
        <ul className={`${style.menuItems} ${menu && style.menu}`} onClick={() => setMenu(false)}>
          <li className={style.container}>
            <Link className={style.link} to="/dashboard">Prepare</Link>
            <Link className={style.link} to="/skills-verification">Certify</Link>
            <Link className={style.link} to="/contest">Contests</Link>
          </li>
          {login && (
            <div className={style.inbox}>
              <Link to="/inbox"className={style.ibx}><img src="https://img.icons8.com/?size=96&id=108791&format=png" alt="message" /></Link>
              <Link to="/notifications" className={style.ibx}><img src="https://img.icons8.com/?size=96&id=z8yqcMdq4T2h&format=png" alt="notification" /></Link>
            </div>
          )}
          {login ? (
            <li className={style.userlink}>
              <hr />
              <Link className={style.link} to="/profile">Profile</Link>
              <Link className={style.link} to="/leaderboard">leaderboard</Link>
              <Link className={style.link} to="/challenges/bookmarks">Bookmarks</Link>
              <Link className={style.link} to="/settings">Settings</Link>
            <button className={style.btn} onClick={logoutHandler}>Logout</button>
          </li>
          ) : (
            <li>
              <div className={style.searchContainer}>
                <img className={style.searchIcon}
                  src="https://th.bing.com/th/id/OIP.1YYDJgEoM_aSw7Iu7voVsAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="searchbar" />
                <input className={style.searchInput} placeholder="Search" />
              </div>
              <Link className={style.auth} to="/auth/login">Login</Link>
              <Link className={style.auth} to="/auth/signup">Signup</Link>
            </li>
          )}
        </ul>
      </div>
      <div className={style.user}>
        
      </div>
    </div>
  );
};

