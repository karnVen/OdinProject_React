const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export function P06A2F1(){
    let list = people.map(person=><li>{person}</li>);
    return (<ul>{list}</ul>);
}

const people2 = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

export function P06A2F2(){
    let chemists= people2.filter(anything=>anything.profession==="chemist");
    // let list = fliterlist.map(person=><li>{person}</li>);
    // return (<ul>{list}</ul>);
//     const listItems = chemists.map(person =>
//   <li>{person}</li>
//);

const listItems = chemists.map(person =>
    <li>
    
      <p>
        <b>{person.name}:</b>
        
      </p>
    </li>
  );

 return <ul>{listItems}</ul>;
}