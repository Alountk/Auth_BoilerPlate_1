import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';
import { Edit } from './pages/Edit/Edit';


function App() {
  return (
   <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Edit" component={Edit}/>
      </Switch>
      <Footer />
   </Router>
  );
}

export default App;
