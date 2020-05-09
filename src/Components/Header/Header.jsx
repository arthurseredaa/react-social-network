import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <h1>React<span>⚛</span></h1>
        </header>
    );
}

export {
    Header
};