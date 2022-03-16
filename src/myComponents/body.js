import React from 'react'

export default function body() {
    return (
        <form class="row g-3">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
            </div>
        </form>
    )
}
