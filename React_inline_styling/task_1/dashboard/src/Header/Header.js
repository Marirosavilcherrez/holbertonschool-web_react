import React from 'react';
import logo from '../Assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
    
  return (
      <div className= {css(styles.header)}>
          <img src={logo} className={css(styles.logo)} alt="logo"/> 
          <h1 className= {css(styles.title)}>School dashboard</h1>
      </div>
   )
}

const styles = StyleSheet.create ({
    header: {
        display: 'flex',
        height: '30vh',
        color: '#e0344a',
        alignItems: 'center',
        borderBottom: 'solid #e0344a',
        width: '100%',
        top: 0,
    },

    logo: {
        width: '144px',
    },

    title: {
        margin: 0,
    },
})

export default Header;