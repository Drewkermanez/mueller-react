import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import StudentTableHeaders from './StudentTableHeaders';
import StudentTableRows from './StudentTableRows';
import FilterBar from './FilterBar';

function App() {
  //set state while fetching student data
  const [isLoading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [useFilteredStudents, setUseFilteredStudents] = useState(false);

  /*Fetch student data from api, then filter and sort the data before setting students state.
    Then change loading to false so that table components will render*/
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
        setFilteredStudents(goodStudents);
        setLoading(false);
      }
      );
  }, [])

  if (isLoading) {
    return <div className='App'>Loading...</div>;
  }

  //Tests for an int value, returns true or false
  function testIfInt(value) {
    console.log('Value in testIfInt: ', value);
    if(!isNaN(value))
    {
      console.log('User input is a number!');
      return true;
    }
      console.log('User input is not a number!');
      return false;
  }

  //Callback function for TableFilter component
  function tableFilter (userInput) {
    let fStudents;
    console.log('User input was: ', userInput, '\nInput type was: ', typeof userInput);
    //If int value, filter by grade
    if(testIfInt(userInput))
    {
      fStudents = students.filter((el) => {
        return el.grade == userInput;
      })
      setFilteredStudents(fStudents);
    }
    //Else, filter by name
    else 
    {
      setFilteredStudents(() => {
        return students.filter((el) => {
          let name = el.first_name + ' ' + el.last_name;
          return name.toLowerCase().includes(userInput.toLowerCase());
        })
      })
    }
    //Only change state to use filtered students for rendering if there is user input
    if(userInput)
    {
      setUseFilteredStudents(true);
    }
    //If no value in input after change, go back to using full student list
    else
    {
      setUseFilteredStudents(false);
    }
  }

  //returns full table
  return (
    <>
    <div id='student-table-filter'>
      <FilterBar filterCallback={tableFilter}/>
    </div>
    <div id='student-grades-table-container'>
        <table id='student-table' className='table-bordered'>
          <tbody id='student-table-body'>
            <StudentTableHeaders tableHeaders={['Name', 'Grade']} />
            <StudentTableRows students={useFilteredStudents ? filteredStudents : students} />
          </tbody>
        </table>
    </div>
    </>
  );
}

export default App;
