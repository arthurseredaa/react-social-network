import React, {useEffect, useState} from 'react';
import s from './Header.module.css';
import dropdownArrow from '../../assets/icons/header/dropdown-arrow.svg';
import profileIcon from '../../assets/icons/header/profile.svg';
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

  const HeaderNavElement = (props) => {
    return (
        <li className={s.navItem} onClick={() => setDropdown(!dropdown)}>
          <img src={props.icon} alt=""/>
        </li>
    )
  }
    return (
        <header className={s.header}>
            <HeaderNav>
              <HeaderNavElement icon={dropdownArrow}/>
              <HeaderNavElement icon={profileIcon}/>
            </HeaderNav>
        </header>
    );
}





export {
    Header
};