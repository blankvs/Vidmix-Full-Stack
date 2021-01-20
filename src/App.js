import './App.scss';
import routes from './routes'
import {connect} from 'react-redux'
import Header from './components/Header'

function App(props) {
  return (
    <div className="App">
      <Header/>
      {routes}
      <div className="userIn">
      {
        props.isLoggedIn?`LOGGED IN AS ${props.user.email}`: null
      }
      </div>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return reduxState 
}

export default connect(mapStateToProps)(App);
