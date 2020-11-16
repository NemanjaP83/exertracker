import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function CreateExercise() {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();

    const [state, setState] = useState({
        username: '',
        description: '',
        duration: '',
        date: new Date(),
        users: []
    })

    useEffect(() => {
        axios.get('/users')
            .then(res => {
            if (res.data.length > 0) {
                setState({
                    ...state,
                    users: res.data.map(user => user.username),
                    username: res.data[0].username
                })
            } 
            })
        
        return () => {
            //when the component unmounts
            // console.log("component unmounted")
            source.cancel('Operation canceled by the user.')
        }
    }, [])

    const onChangeUsername = (e) => {
        setState({
            ...state,
            username: e.target.value
        })
    }

    const onChangeDescription = (e) => {
        setState({
            ...state,
            description: e.target.value
        })
    }

    const onChangeDuration = (e) => {
        setState({
            ...state,
            duration: e.target.value
        })
    }

    const onChangeDate = (date) => {
        setState({
            ...state,
            date: date
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const exercise = {
            username: state.username,
            description: state.description,
            duration: state.duration,
            date: state.date
        }
        // submit data to database
        axios.post('/exercises/add', exercise)
        .then(res => console.log(res.data))
        // window.location = '/'
    }

    return (
        <div className='container section'>
            <h3>Create new exercise log</h3>
            <form action="/" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="select">Username:</label>
                    <select
                        className='form-control'
                        name="username"
                        id="select"
                        required
                        value={state.username}
                        onChange={(e) => onChangeUsername(e)} >
                          {state.users.map((user) => {
                              return (
                                <option value={user} key={user}>
                                      {user}
                                </option>
                              )
                            })}
                    </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={state.description}
                            onChange={(e) => onChangeDescription(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration (in minutes)</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={state.duration}
                            onChange={(e) => onChangeDuration(e)}
                        />
                    </div>
                    <div className="form-group">
                            <label htmlFor="date">Date:</label>
                            <div>
                                <DatePicker
                                selected={ state.date }
                                onChange={ onChangeDate }
                                />
                            </div>
                    </div>
                <div className="form-group">
                    <input value='Create Exercise Log' type='submit' className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

