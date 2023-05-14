import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import StudentTableHeaders from './StudentTableHeaders';
import StudentTableRows from './StudentTableRows';

function App() {
  //set state while fetching student data
  const [isLoading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  /*fetch student data from api, then filter and sort the data before setting students state.
    then change loading to false so that table components will render*/
  useEffect(() => {
    axios.get('/grades')
      .then(response => {
        console.log("Response data: ", response.data);
        let goodStudents = response.data.filter((student) => student.grade >= 50);
        goodStudents.sort((a,b) => {
          const nameA = a.first_name.toUpperCase();
          const nameB = b.first_name.toUpperCase();
          if (nameA < nameB)
          {
            return -1;
          }
          if (nameA > nameB)
          {
            return 1;
          }

          return 0;
        })
        setStudents(goodStudents);
        setLoading(false);
      }
      );
  }, [])

  if (isLoading) {
    return <div className='App'>Loading...</div>;
  }

  //returns full table
  return (
    <>
    <div id='student-grades-table-container'>
        <table id='student-table' className='table-bordered'>
          <tbody id='student-table-body'>
            <StudentTableHeaders tableHeaders={['Name', 'Grade']} />
            <StudentTableRows students={students} />
          </tbody>
        </table>
    </div>
    </>
  );
}

export default App;
