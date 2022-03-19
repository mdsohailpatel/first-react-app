import React from 'react'

export default function body() {
    return (
        <div className="container">
        <form className="row g-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </form>
        </div>
    )
}
