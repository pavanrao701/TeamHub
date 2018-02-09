import React from 'react';
import { Link} from 'react-router-dom';


export default class First extends React.Component{

render(){  
return(
<div className="title">
        <h1>React Router demo</h1>
        <Link to="/next"><button>Show the List</button></Link>
      </div>
)
}
}