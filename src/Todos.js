import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

  todosList: Todo[];

  constructor() {
    super();
    this.initTodos();
    this.state = { todosList: this.todosList };

  }

  initTodos() {
    this.todosList = [{
      id: 1,
      content: 'Todo #1'
    },
    {
      id: 2,
      content: 'Todo #2'
    },
    {
      id: 3,
      content: 'Todo #3'
    },
    {
      id: 4,
      content: 'Todo #4'
    },
    {
      id: 5,
      content: 'Todo #5'
    }
    ];
  }

  getTodosList() {
    const listItems = this.state.todosList.map((listItem, index) =>

      <li className="list-group-item" key={listItem.id}>
        {listItem.content}

        <button type="button" className="close" data-dismiss="alert" onClick=
          {this.deleteTodo.bind(this, index)}>
          <a className="alert-link"><span className="glyphicon glyphicon-trash"></span></a>
        </button>
      </li>

    );

    return listItems;
  }

  deleteTodo(index) {
    this.todosList.splice(index, 1);
    this.setState({ todosList: this.todosList });
  }

  addTodo() {
    let _id = this.todosList.length + 1;
    if (this.input.value !== '') {
      this.todosList.push({ id: _id, content: this.input.value });
      this.setState({ todosList: this.todosList });
      this.input.value = '';
    }
    else {
      alert('hobby can\'t be empty');
    }
  }

  resetTodos() {
    this.initTodos();
    this.setState({ todosList: this.todosList });
  }

  render() {
    return (
      <div className="container">
        <div className="well well-sm">
          <h3 className="text-center">Todos Component</h3>
        </div>
        <ul className="list-group">
          <h4 className="text-info">List of Todos</h4>
          {this.getTodosList()}
        </ul>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="enter new hobby"
            ref={(input) => this.input = input} />
          <br />
          <div className="btn-group btn-group-justified">
            <a type="submit" className="btn btn-success" onClick={this.addTodo.bind(this)}>
              <span className="glyphicon glyphicon-plus"></span>
            </a>
            <a className="btn btn-danger" onClick={this.resetTodos.bind(this)}>
              <span className="glyphicon glyphicon-refresh"></span>
            </a>
          </div>
        </div>
      </div>

    );
  }

}

export default Todos;
