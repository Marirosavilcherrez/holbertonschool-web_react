import Notifications from '../Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function App() {
  return (
    <>
    <Notifications></Notifications>
        <div className= "App-header">
          <Header></Header>
        </div>
        <div className= "App-body">
          <Login></Login>
        </div>
        <div className= "App-footer">
          <Footer></Footer>
        </div>
    </>
  );
}

export default App;
