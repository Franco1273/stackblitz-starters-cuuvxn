import React from 'react';
import TeacherItem from './TeacherItem';

const Subjects = ['Math', 'IT', 'Physics', 'Chemistry', 'History'];
const teachers = [
  {
    Surname: 'Lagreca',
    Name: 'Franco',
    Subject: 'Math',
    selected: false,
  },
  {
    Surname: 'Lapolla',
    Name: 'Luigi',
    Subject: 'IT',
    selected: false,
  },
  {
    Surname: 'Mussella',
    Name: 'Vincenzza',
    Subject: 'History',
    selected: false,
  },
  {
    Surname: 'Loglisci',
    Name: 'Antonio',
    Subject: 'Chemistry',
    selected: false,
  },
  {
    Surname: 'Colonna',
    Name: 'Giulia',
    Subject: 'Physics',
    selected: false,
  },
  {
    Surname: 'Colonna',
    Name: 'Gianfranco',
    Subject: 'Math',
    selected: false,
  },
  {
    Surname: 'Masiello',
    Name: 'Andrea',
    Subject: 'Physics',
    selected: false,
  },
];

export default function TeachersList() {
  const [teachersList, setTeachersList] = React.useState([...teachers]);

  const toggleState = (index) => {
    setTeachersList((currentState) => {
      const newList = [...currentState];
      return newList.map((item, ind) => {
        return ind === index ? { ...item, selected: !item.selected } : item;
      });
    });
  };

  const UnselectAll = () => {
    setTeachersList(() => {
      return [...teachers];
      /*const newList = [...teachers];
      return newList.map((item) => {
        return { ...item, selected: false };
      });*/
    });
  };

  const FilterTeachers = (subjectSelected) => {
    setTeachersList(() => {
      const newList = [...teachers];
      return newList.filter((item) => {
        return item.Subject === subjectSelected;
      });
    });
  };

  return (
    <>
      <div>
        Selected Teachers :{' '}
        {teachersList.filter((item) => item.selected === true).length}
      </div>

      <button onClick={UnselectAll}>Uselect All</button>

      <label for="Subjects">Select by Subject : </label>
      <select
        name="Subjects"
        id="Subjects"
        onChange={(e) => FilterTeachers(e.target.value)}
      >
        <option value=""></option>
        <option value="Math">Math</option>
        <option value="IT">IT</option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="History">History</option>
      </select>

      {teachersList.map((teacher, index) => (
        <TeacherItem
          key={index}
          teacher={teacher}
          toggleState={() => toggleState(index)}
        />
      ))}
    </>
  );
}
/*

*/
