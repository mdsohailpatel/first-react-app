import React from 'react'
import TodoIteam from "./TodoIteam";

export default function Todos(props) {
    return (
        <>
            <h3>Todo List</h3>
            <div className="row">
                {
                    props.todos.length === 0 ? "no todos to print" :
                        props.todos.map((todo) => {
                            return (
                                <>
                                    <div className="card col-3 my-3 mx-5">
                                        <div className="card-body">
                                            <TodoIteam todo={todo} key={todo['sno']} onDelete={props.onDelete} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                }
            </div>
            </>
    )
}