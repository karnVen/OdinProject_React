export function Greeting(){
    return <h1>&quot;I swear by my pretty floral bonnet, I will end you.&quot;</h1>
}
export function Rule() {
  // Could replace <></> with <div></div>
  return (
    <>
      <h1>Example h1</h1>
      <h2>Example h2</h2>
    </>
  );
}
export function Circle() {
  return (
  <div className="container">
    <svg>
      <circle cx="55" cy="45" r="20" stroke="green" strokeWidth="8" />
    </svg>
  </div>
  );
}
export function LiveError(){
    return ( 
   <div>
  <h1>Test title</h1>
  <svg>
    <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
  </svg>
  <form>
    <input type="text" />
  </form>
</div>


)
}

