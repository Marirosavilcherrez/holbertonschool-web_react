import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
    <main className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
            <label htmlFor="email" className = {css(styles.label)}>Email: </label>
            <input type = "email" id="email" name="email" className = {css(styles.input)}/>
            <label htmlFor="password" className = {css(styles.label)}>Password: </label>
            <input type = "password" id="password" name="password" className = {css(styles.input)}/>
            <button className = {css(styles.button)}>OK</button>
    </main>
    );
}

const styles = StyleSheet.create ({
    login: {
        backgroundcolor: '#FFFFFF',
        borderbottom: '3px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '10px',
        fontFamily: 'sans-serif',
        fontSize: '18px', 
    },

    label: {
        paddingleft: '10px',
    },

    input: {
        width: '15%',
        height: '10px',
        padding: '8px',
        marginbottom: '10px',
        bordercolor: '#ccc',
    },

    button: {
        marginleft: '10px',
        width: '35px',
        height: '28px',
        borderradius: '8px',
        bordercolor: 'rgb(220, 215, 215)',
    },
})

export default Login;