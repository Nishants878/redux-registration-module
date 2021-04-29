import logo from './logo.svg';
import './App.css';
import { Route,  BrowserRouter, Switch } from 'react-router-dom';
import Register from './Containers/Register/Register'
import Login from './Containers/Login/Login'
import Topbar from './Components/Topbar/Topbar'
import Dashboard from './Containers/Dashboard/Dashboard'
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
    <header>
      <Topbar/>
    </header>
    <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard}/>
          </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
