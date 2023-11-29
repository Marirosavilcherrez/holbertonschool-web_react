import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite'

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

class App extends Component {
  // Event handler for keydown event
  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  // Attach event listener when the component is mounted
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Remove event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <div className={css(styles.wrapper)}>
        {/* Display notifications */}
        <Notifications listNotifications={listNotifications} />
        
        {/* Display header */}
        <Header />
        {/* Display CourseList or Login based on isLoggedIn */}
        <div className={css(styles.body)}>
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        {/* Display news section */}
        <BodySection title="News from the School">
          <p>Hi everyone!</p>
        </BodySection>
        </div>
        {/* Display footer */}
        <Footer className={css(styles.footer)} />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create ({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: 'solid #e0344a',
    zIndex: '1000',
  },
  wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  
  body: {
    justifyContent: "left",
  }
})

// Default props for App component
App.defaultProps = {
  isLoggedIn: false,
};

// PropTypes for App component
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func.isRequired,
};

export default App;
