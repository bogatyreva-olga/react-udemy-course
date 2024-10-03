import './App.css';
import persons from "./data/person";
import Person from "./components/Person";


function App() {
 return <div className="App">
  {persons.map((person) => {
   const {id, firstName, lastName, email, img} = person
   return <Person
       id={id}
       firstName = {firstName}
       lastName = {lastName}
       email = {email}
   />
  })}
 </div>
 }

export default App;
