import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <main className={css(styles.loginStyle)}>
      <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
      <div className={css(styles.formStyle)}>
        <div>
            <label htmlFor="email" className={css(styles.labelStyle)}>Email: </label>
            <input type="email" id="email" name="email" className={css(styles.inputStyle)} />
        </div>
        <div>
            <label htmlFor="password" className={css(styles.labelStyle)}>Password: </label>
            <input type="password" id="password" name="password" className={css(styles.inputStyle)} />
        </div>
        <button className={css(styles.buttonStyle)}>OK</button>
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  loginStyle: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontFamily: 'sans-serif',
    '@media screen and (max-width: 900px)': {
      width: '95%',
      margin: '0 auto',
    },
  },

  paragraph: {
    paddingLeft: '20px',
    fontSize: '16px',
  },

  formStyle:{
    display: 'flex',
    flexDirection: 'row',
    '@media screen and (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
    },
},

  labelStyle: {
    paddingLeft: '20px',
    marginBottom: '5px',
    fontSize: '18px',
    '@media screen and (max-width: 900px)': {
        fontSize: '16px',
    },
  },

  inputStyle: {
    marginLeft:'5px',
    width: '45%',
    height: '15px',
    padding: '8px',
    marginBottom: '10px',
    borderColor: '#ccc',
    '@media screen and (max-width: 900px)': {
        border: 'none',
    },
  },

  buttonStyle: {
    marginLeft:'5px',
    width: '10%',
    height: '40px',
    borderRadius: '8px',
    borderColor: 'rgb(220, 215, 215)',
    '@media screen and (max-width: 900px)': {
        borderColor: 'orange',
        outline: 'none', /* Delete the contorn */
        boxShadow: 'none',
        width: '15%',
        marginLeft: '15px',
        backgroundColor: 'transparent',
        height:'30px'
    },
  },
})

export default Login;
