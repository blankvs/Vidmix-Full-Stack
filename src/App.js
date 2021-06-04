import './App.scss';
import routes from './routes'
import { connect } from 'react-redux'
import Header from './components/Header'

function App(props) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {routes}
      </div>
        <div className="user-name">
          {
            props.isLoggedIn ? `LOGGED AS • ${props.user.email}` : null
          }
        </div>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapStateToProps)(App);