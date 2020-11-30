import React, { Component, useState } from 'react'

class Template extends Component {
  constructor(props) {
    super(props);   
    
    this.state = {
      edit: false,      
      starterData: [
        {
          id: Math.floor(Math.random() * 1000),
          title: "Happy Easter:",          
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Finance Memo.",    
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Birthday Card",
        }
      ]
    };
  }  

  addItem(e) {
    e.preventDefault();
    this.setState({
      starterData: [
        ...this.state.starterData,
        {
          id: Math.floor(Math.random() * 1000),
          title: e.target.item.value,
        }
      ]
    });
    e.target.item.value = "";
  }

  deleteItem() {
    let id = arguments[0];
    this.setState({
      starterData: this.state.starterData.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }      
   
  render() {
    return (
      <div>
        <form onSubmit={this.addItem.bind(this)}>
            <input 
            type="text" 
            name="item" 
            className="item" 
            />
          <button className="Add">Add</button>
        </form>        
            {this.state.starterData.map((item) => (
            <li>                          
                {item.title}
                <button onClick={this.deleteItem.bind(this, item.id)}>
                  X
                </button>            
                              
            </li> 
            ))}           
      </div>
    );
  }
}

export default Template;