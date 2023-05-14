import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [isLoading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

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
    //console.log("Still loading!!");
    return <div className='App'>Loading...</div>;
  }

  function StudentTableHeaders({ tableHeaders }) {
    //const tableHeaders = ['Name', 'Grade']
    return (
      <tr className='student-table-row'>
        {tableHeaders.map((h, index) => {
          return (
            <th key={`student-table-header-${index}`} className='student-table-header'>{h}</th>
          )
        })}
      </tr>
    )
  }

  function StudentTableRows({ students }) {
    //{`${s.first_name} + ${s.last_name}`} key={`student-table-name-cell-${s.id}`}
    console.log(`Number of students in StudentTableRows: ${students.length}`);
    return (
      <>
        {students.map((s) => {
          let fullName = s.first_name + " " + s.last_name;
          let grade = s.grade;
          let id = s.id;
          let textStyle;
          if(grade >= 85)
          {
            textStyle = 'text-success';
          }
          if(grade < 85 && grade >= 65)
          {
            textStyle = 'text-body';
          }
          if(grade < 65)
          {
            textStyle = 'text-danger';
          }
          return (
            <tr key={id} className='student-table-row'>
              <StudentTableCell cellContent={fullName} />
              <StudentTableCell cellContent={grade} nodeClass={textStyle}/>
            </tr>
          )
        })}
      </>
    )
  }

  function StudentTableCell({ cellContent, nodeClass }) {
    let content = cellContent;
    return (
        <td className={nodeClass}>
          {content}
        </td>
    )
  }

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
