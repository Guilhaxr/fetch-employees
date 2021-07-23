import DisplayEmployee from './Components/DisplayEmployee';
import {useState} from 'react'
import './App.css';
import axios from 'axios'




const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((response) => {setEmployee(response.results[0])});
  }

  return (
    <div >
     <DisplayEmployee employee={employee} />
     <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
