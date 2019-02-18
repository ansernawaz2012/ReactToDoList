import React, { Component } from 'react';
import './App.css';


const ListItem = (props)=> {
  return (
    <li onClick = {props.onClick}>
      {props.item}
    </li>
  );

}

class App extends Component {
  
  constructor() {
    super();

    this.state = { 
      list: []
    };

  }
  
addItem() {
  let item = document.getElementById("listItem").value;
  if (item == "") {
    return;
  }
  document.getElementById("listItem").value = "";
  let newList = this.state.list.slice();
  newList.push(item);
  this.setState({list: newList});
}

onClick(index) {
  let newList = this.state.list.slice();
  newList.splice(index, 1);
  this.setState({list: newList});
}

  render() {

    let listItems = [];
    this.state.list.forEach((item, i)=>{
      listItems.push(<ListItem item = {item} onClick = {()=>this.onClick(i)} />)

    });

    return (
      <div className="App">
        <h1>To Do List</h1>
        <input type="text" id="listItem" placeholder="Add Item" />
        <button type="button" onClick={()=>this.addItem()}>Add</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}

export default App;
