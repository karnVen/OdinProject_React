// function Button(props){
//     const st={
//         color:props.color,
//         font:props.fontSize + 'px'
//     }
//     return (
//         <button style={st}>{props.text} </button>
//     )
// }

function Button({ text = "Click Me!", color = "black", fontSize = 12 }){
    const st={
        color:color,
        font:fontSize + 'px'
    }
    return (
        <button style={st}>{text} </button>
    )
}

export function P08F1(){
    return (
        <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
                  <Button text="Don't Click Me!" color="red" fontSize={12} />
                  <Button text ="the defual" />

        </div>
    )
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function Button2({ text = "Click Me!", color = "blue", fontSize = 12}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };
  
   const handleClick = () => {
    window.location.href = "https://www.google.com";
  };
  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export function P08F2() {
 

  return (
    <div>
      <Button2 />
    </div>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function Button3({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </div>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////
function Avatar({person,size}) {
  return (<div>
    <h1>{person.name}</h1>
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  </div>);
}

export function P08A1F1() {
  return (
    <Avatar  person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}/>
  );
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar2 ({person, size }){
  return (<img 
                className={person.name}
                src={getImageUrl(person)}
                height={size}
                width={size}

                />
    
  )

}
export function P08A1F2(){
  return (
    <div>
      <Avatar2 
      size={200}
      person={
        {
          
          name:"lali",
          imageId:'YfeOqp2'
        }

      }/>
      <Avatar2 
      size={100}
      person={{
        name:'lita',
        imageId:'OKS67lh'
      }}/>
    </div>
  )
}
/////////////////////////////////////////////////////////////
 function getImageUrl3(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar3({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export function P08A1F3() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
///////////////////////////////////////////////////////////////////////////
export function getImageUrl4(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl4(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b> {profession}</li>
        <li>
          <b>Awards: {awards.length} </b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export  function P08A1F4() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}
