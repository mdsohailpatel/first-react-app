import React, { useState } from 'react';

export const AddTodos = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [decs,setdecs] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !decs) {
            alert("Please enter a title and description")
        }else{
        addTodo(title,decs);
        }
    }

    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="addTodo" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="addTodo" placeholder="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">decsription</label>
                    <textarea className="form-control" value={decs} onChange={(e)=>{setdecs(e.target.value)}} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-success">AddTodos</button>
            </form>
        </div>
    )
}
