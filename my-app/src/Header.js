// src/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
            <h1>My App2</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </header>
    );
};

export default Header;
