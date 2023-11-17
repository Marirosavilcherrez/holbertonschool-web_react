import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';

function App({isLoggedIn}) {
  return (
    <>
    <Notifications></Notifications>
        <div className= "App-header">
          <Header></Header>
        </div>
        {isLoggedIn === "false" ? (
          <div className= "App-body">
            <Login></Login>
          </div>
        ) : (
          <div className= "App-body">
            <CourseList></CourseList>
          </div>
        )}
        <div className= "App-footer">
          <Footer></Footer>
        </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
}

export default App;
