import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listCourse: [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40}
      ],

      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
  }

  render() {
    const { isLoggedIn } = this.props;
    const { listCourse, listNotifications } = this.state;

    return (
      <>
      <Notifications listNotifications={listNotifications}></Notifications>
          <div className= "App-header">
            <Header></Header>
          </div>
          {isLoggedIn === "false" ? (
            <div className= "App-body">
              <Login></Login>
            </div>
          ) : (
            <div className= "App-body">
              <CourseList listCourse={listCourse}></CourseList>
            </div>
          )}
          <div className= "App-footer">
            <Footer></Footer>
          </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
