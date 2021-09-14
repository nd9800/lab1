import './App.css';
import React, { Component } from "react";
let index = 0;
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: []
        }
        this.buttonClick = this.buttonClick.bind(this);
        this.delete = this.delete.bind(this);
    }
    buttonClick()
    {
        let txt =<p id={index} className = 'txt' onClick = {this.delete}>{document.getElementById('task').value}</p>
        let stt = true;
for(let item of this.state.name)
{
    if(txt.props.children === item.props.children)
    {
        stt = false;
    }

}
if(stt)
{
    this.setState({
        name: [...this.state.name,txt]
    });
    index++;
}
else
{
    alert('Err: Duplicate');
}
    }
    delete(e)
    {
        this.setState({
            name: this.state.name.filter(item=>{
                return item.props.id != e.target.id;
            })
        })
    }
    render() {
        return (
            <div className='container'>
                <h2>TO-DO TASK</h2>
                <input type='text' placeholder='Enter Task' id='task' />
                <button onClick = {this.buttonClick}>Add task</button>
                <p>Click an item to remove</p>
                <h1>{ this.state.name}</h1>
            </div>
        );
    }
}

export default App;
