import React, { useState, useEffect } from 'react'
import Table from './Table'
import axios from 'axios'

export default function Exercise() {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();

    const [state, setState] = useState({
        exercises: []
    })

    useEffect(() => {
        axios.get('/exercises/')
            .then(res => {
                setState({
                    ...state,
                    exercises: res.data
                })
            })
            .catch(error => console.log(error))
        return () => {
            //when the component unmounts
            source.cancel()
        }
    }, [])

    const deleteExercise = (id) => {
        axios.delete(`exercises/${id}`)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
        setState({
            ...state,
            exercises: state.exercises.filter(el => el._id!== id)
        })
    }

    const exerciseList = () => {
        return state.exercises.map(currentExercise => {
            return (
            <Table 
                exercise = { currentExercise } 
                deleteExercise = { deleteExercise }
                key = { currentExercise._id } />
                // console.log(currentExercises)
            )
        })
    }

    return (
        <div className='container section'>
            <h3>Logged Exercises</h3>
            <br></br>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { exerciseList() }
          </tbody>
        </table>
        </div>
    )
}



