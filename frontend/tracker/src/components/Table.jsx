import React from 'react'
import { Link } from 'react-router-dom'

export default function Table(props) {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td><Link to={"/edit/" + props.exercise._id}><button className='btn btn-info'>Edit</button></Link></td>
            <td><button className='btn btn-danger' onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button></td>
        </tr>   
    )
}
