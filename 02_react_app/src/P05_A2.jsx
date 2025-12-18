export function P05A2F1(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Zara';
  return <div>
   
   <img
        className="Avator"
         src={avatar} 
         alt={description}
         
         />
         <h1>{description}</h1>
         </div>

}


//  const taday = new Date();
// function formatDate(){
//     return new Intl.DateTimeFormat(
//         'en-US',
//         { weekday : 'long'}
//     ).format(date);
// }
// export function P05A2F2(){

   
// return (<h1>today is {formateDate(today)}</h1>);
// }


 const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}
export function P05A2F2() {
   
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}


export function P05A2F3() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}




const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export  function P05A2F4() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improvkjn the videophonihhljkh
          e</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

