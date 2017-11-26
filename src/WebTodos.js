import React, { Component } from 'react';
import WebTodo from './WebTodo';
import Status from './Status';

class WebTodos extends Component {

    listItems: WebTodo[];

    constructor() {
        super();
        this.listItems = [];
        this.state = { listItems: this.listItems };
        this.fetchTodos();
    }

    fetchTodos() {

        fetch('http://localhost:8080/todos/all')
            .then((response) => response.json())
            .then((response) => {
                this.listItems = response;
                this.setState({ listItems: this.listItems });
            })
    }

    mapTodosAsRow() {
        const items = this.state.listItems.map((trItem, index) =>

            <tr key={trItem.id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{trItem.task}</td>
                <td className="text-center">
                    {
                        (trItem.completed) ?
                            <i className="fa fa-check fa-lg text-success" aria-hidden="true"></i>
                            :
                            <i className="fa fa-times fa-lg text-danger" aria-hidden="true"></i>
                    }
                </td>
                <td className="text-center text-info">
                    <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                </td>
            </tr>
        );
        return items;
    }

    addTodo() {

        let newTodo = {
            id: this.state.listItems[this.state.listItems.length - 1].id + 1,
            task: this.input.value,
            completed: false
        };

        fetch('http://localhost:8080/todos/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task: newTodo.task,
                completed: newTodo.completed
            })
        })
            .then((response) => response.json())
            .then((response) => {
                let status = response;
                console.log(status);
                if (status.queryStatus) {
                    this.listItems.push(newTodo);
                    this.setState({ listItems: this.listItems });
                    this.input.value = '';
                }
            })

    }

    render() {
        return (
            <div className="container">
                <div className="well well-sm">
                    <h3 className="text-center">Some Todos from API</h3>
                </div>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th className="text-center"><h3>#</h3></th>
                            <th className="text-center"><h3>Task</h3></th>
                            <th className="text-center"><h3>Completed</h3></th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.mapTodosAsRow()}
                    </tbody>
                </table>

                <form action="#">
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" placeholder="New Todo" className="form-control"
                                ref={(input) => this.input = input} />
                            <span className="input-group-btn">
                                <button className="btn btn-success" type="button"
                                    onClick={this.addTodo.bind(this)}>
                                    <i className="fa fa-plus fa-lg" aria-hidden="true"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}

export default WebTodos;