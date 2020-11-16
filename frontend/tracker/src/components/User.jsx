import React, { useState } from 'react'
import axios from 'axios'

export default function User() {
    const [state, setState] = useState({
        username: ''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: state.username,
        }
        // submit data to database
        axios.post('/users/add', user)
        .then(res => console.log(res.data))

        setState({
            ...state,
            username: ''
        })
    }

    const onChangeUsername = (e) => {
        setState({
            ...state,
            username: e.target.value
        })
    }

    return (
        <div className='container section'>
            <form action="!#" method="post" onSubmit={onSubmit}>
                <h3>Create new user</h3>
                <div className="form-group">
                    <label htmlFor="user">User:</label>
                    <input
                        onChange={onChangeUsername}
                        type="text"
                        className="form-control"
                        id='user'
                        placeholder='user'
                        required
                        value={state.username}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}
