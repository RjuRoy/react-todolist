import React, {Component} from 'react';
// import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todinput from './components/Todoinput';
import TodoList from './components/TodoList';

class App extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <Todinput />
          <TodoList />
        </div>
      </div>
    )
  }
}

export default App;
