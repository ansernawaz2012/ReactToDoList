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
      list: [],
      completedList: []
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
  // console.log(this.state.list[index]);
  // let newCompleteList = [];
  let newCompleteList = this.state.list[index];
  // this.setState(this.state.completedList.push(newCompleteList));
  // this.state.completedList.push(newCompleteList);
  // this.setState({completedList: newCompleteList});
  this.setState(prevState=> ({
    completedList: [...prevState.completedList, newCompleteList]
    
  }))
  
   console.log(this.state.completedList);


  let newList = this.state.list.slice();
  newList.splice(index, 1);
  this.setState({list: newList});
}

  render() {

    let listItems = [];
    let newCompletedList = [];
    this.state.list.forEach((item, i)=>{
      listItems.push(<ListItem item = {item} onClick = {()=>this.onClick(i)} />)

    });
    this.state.completedList.forEach((item, i)=>{
      newCompletedList.push(<ListItem item = {item} onClick = {()=>this.onClick(i)} />)

    });


    return (
      <div className="App">
        <h1>To Do List</h1>
        <input type="text" id="listItem" placeholder="Add Item" />
        <button type="button" onClick={()=>this.addItem()}>Add</button>
        <ul>
          {listItems}
        </ul>
        <h1>Completed List</h1>
        <ul>
          {/* {this.state.completedList} */}
        {newCompletedList}
        </ul>
      </div>
    );
  }
}

export default App;
