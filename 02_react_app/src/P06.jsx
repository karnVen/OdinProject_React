// export  function P06F1(){
//     const animal = ["dog","cow","cat"];
//     return ( <div>
//         <h1>animals</h1>
//         <ul>
//             {animal.map((animal)=>
//             {
//                 return <li key={animal}>{animal}</li>;
//             })}

//         </ul>
//    </div> )
// }

export function P06F1(){
  const animals = ["Lion", "Cow", "Snake", "Lizard","dog","ku"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animalsList}
      </ul>
    </div>
  );
}

/////////////////////////////////////////////////////////////////////
function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

export function P06F2() {
  const animals = ["Lion", "Cow", "Snake", "Lizard","kfjekl"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

////////////////////////////////////////////////////////////////////
function List2(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}
export function P06F3(){
    const animals = ["Lion", "Cow", "Snake", "Lizard","kfjekl"];
    return (
        <div> <List2 animals={animals} /></div>
    )
}
//////////////////////////////////////////////////////////////////
function List3(props){
    if(!props.animals){
        return ( 
            <h1>loading</h1>
        )
    }
    if (props.animals .length==0){
        return (
            <h1>no animlal</h1>
        )
    }
}
export function P06F4(){
    const animals =[];
    return(
        <div><List3 animals={animals}/></div>
    )
}
