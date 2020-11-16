import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// components
import Navbar from './components/Navbar'
import Exercise from './components/Exercise'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import User from './components/User'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Exercise} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={User} />
    </Router>
  );
}

export default App
