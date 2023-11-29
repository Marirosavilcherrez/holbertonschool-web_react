import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
    return (
    <main className={css(styles.LoginStyle)}>
        <p>Login to access the full dashboard</p>
            <label htmlFor="email" className = {css(styles.labelStyle)}>Email: </label>
            <input type = "email" id="email" name="email" className = {css(styles.inputStyle)}/>
            <label htmlFor="password" className = {css(styles.labelStyle)}>Password: </label>
            <input type = "password" id="password" name="password" className = {css(styles.inputStyle)}/>
            <button className = {css(styles.buttonStyle)}>OK</button>
    </main>
    );
}

const styles = StyleSheet.create({
    LoginStyle: {
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

    labelStyle: {
        paddingleft: '10px',
    },

    inputStyle: {
        width: '15%',
        height: '10px',
        padding: '8px',
        marginbottom: '10px',
        bordercolor: '#ccc',
    },

    buttonStyle: {
        marginleft: '10px',
        width: '35px',
        height: '28px',
        borderradius: '8px',
        bordercolor: 'rgb(220, 215, 215)',
    },
})

export default Login;