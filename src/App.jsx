import './App.css'
import Users from './components/Users'

const userPromise = fetch('http://localhost:3000/users')
  .then(response => response.json());

function App() {


  return (
    <>
      <h1>Simple CRUD Client</h1>
      <Users userPromise={userPromise}></Users>
    </>
  )
}

export default App
