import React, {useState} from 'react';
import s from './Header.module.css';
import dropdownArrow from '../../assets/icons/header/dropdown-arrow.svg';
import profileIcon from '../../assets/icons/header/profile.svg';
import {NavLink} from "react-router-dom";
import {Preloader} from "../Preloader/Preloader";
const Header = () => {

  const [dropdown, setDropdown] = useState(false);

  const HeaderNav = (props) => {
    return (
        <ul className={s.headerNav}>
          {dropdown && <h1>Hello, world</h1>}
          {props.children}
        </ul>
    )
  }

  // const HeaderNavElement = (props) => {
  //   return (
  //       <li className={s.navItem} onClick={() => setDropdown(!dropdown)}>
  //         <img src={props.icon} alt=""/>
  //       </li>
  //   )
  // }
    return (
        <header className={s.header}>
            <HeaderNav>
              <h1 className={s.headerTitle}>React<span><NavLink to={'/profile'}>DEV</NavLink></span></h1>
            </HeaderNav>
        </header>
    );
}





export {
    Header
};