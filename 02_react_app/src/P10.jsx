import {useState} from 'react';

// export function P10F1() {
//   const [person, setPerson] = useState({ name: "John", age: 100 });



//   // BAD - Don't do this!
// //   const handleIncreaseAge = () => {
// //     // mutating the current state object
// //     person.age = person.age + 1;
// //     setPerson(person);
// //   };

//   // GOOD - Do this!
//   const handleIncreaseAge = () => {

//     // copy the existing person object into a new object
//     // while updating the age property
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//      // we've called setPerson, surely person has updated?

//   };


//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase age</button>
//     </>
//   );
// }
export function P10F1() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));

    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
// export function P10F2() {
//   const [count, setCount] = useState(0);

//   setCount(count + 1);

//   return <h1>{count}</h1>;
// }
export function P10F3(){
    const [value,setValue] =useState('');
    return (<div><input  type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)} />
      <h1>{value}</h1>
   </div>)
}


export function P10A3(){
  const [first,setFirst] = useState('');
  const [last, setlast]= useState('');
  let fullname = first + last;
  return(
   <div>
    <input type="text" value = {first} onChange={(event )=>setFirst(event.target.value)}/>
    <h1>{first}</h1>
   </div>
  )
}