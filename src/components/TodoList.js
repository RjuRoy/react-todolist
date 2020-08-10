import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends Component {
    render() {
        return (
            <section>
                <h2>
                    <TodoItems/>
                </h2>
            </section>
        )
    }
}
