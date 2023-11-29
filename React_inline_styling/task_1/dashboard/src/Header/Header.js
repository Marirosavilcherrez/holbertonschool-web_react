import React from 'react';
import logo from '../Assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
    
  return (
      <header className= {css(styles.HeaderStyle)}>
          <img src={logo} className={css(styles.logoStyle)} alt="logo"/> 
          <h1 className= {css(styles.titleStyle)}>School dashboard</h1>
      </header>
   )
}

const styles = StyleSheet.create({
    HeaderStyle: {
        display: 'flex',
        height: '30vh',
        color: '#e0344a',
        alignItems: 'center',
        borderBottom: 'solid #e0344a',
        width: '100%',
        top: 0,
    },

    logoStyle: {
        width: '144px',
    },

    titleStyle: {
        margin: 0,
    },
})

export default Header;