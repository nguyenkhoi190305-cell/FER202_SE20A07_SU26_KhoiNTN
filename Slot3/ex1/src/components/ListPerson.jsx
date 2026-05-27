import React from 'react';

function ListPerson() {

  const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];

  
  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
  const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
  const isEveryOneTeenager = people.every(person => person.age >= 10 && person.age <= 20);
  const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', lineHeight: '1.6' }}>
      <h2>ListPerson</h2>

      
      <h3>1. List of persons:</h3>
      <ul>
        {people.map((person, index) => (
          <li key={index}><strong>{person.name}</strong> - {person.age} years old</li>
        ))}
      </ul>

     
      <h3>2. First teenager found (age &gt;= 10 and age &lt;= 20):</h3>
      {firstTeenager ? (
        <p><strong>{firstTeenager.name}</strong> - {firstTeenager.age} years old</p>
      ) : (
        <p>Not found</p>
      )}

      <h3>3. All person of the people array is teenager (age &gt;= 10 and age &lt;= 20):</h3>
      <ul>
        {allTeenagers.map((person, index) => (
          <li key={index}><strong>{person.name}</strong> - {person.age} years old</li>
        ))}
      </ul>

      <h3>4. Check if every person of the people array is teenager, which should return true or false:</h3>
      <p><strong>{isEveryOneTeenager ? 'True' : 'False'}</strong></p>

      <h3>5. Checks if any person of the people array is teenager, which should return true or false:</h3>
      <p><strong>{isAnyTeenager ? 'True' : 'False'}</strong></p>
    </div>
  );
}

export default ListPerson;