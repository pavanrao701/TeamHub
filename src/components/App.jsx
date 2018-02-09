import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import First from '../containers/First';
import Next from '../containers/Next';


export default class Main extends React.Component{

render(){
  return(
  <Router>
      <div>
        <Route exact path="/" component={First} />
        <Route path="/next" component={Next} />
      </div>
  </Router>

)
}
}