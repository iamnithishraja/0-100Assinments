import React, { useState } from "react";

function App() {
  const [name, setName] = useState(Math.random());
  function click() {
    setName(Math.random());
  }
  return (
    <div>
      <button onClick={click}>re render</button>
      <Header title={name}></Header>
      <Header title="wtf"></Header>
      <Header title="wtf"></Header>
      <Header title="wtf"></Header>
      <Header title="wtf"></Header>
    </div>
  );
}

const Header = React.memo(({ title }) => {
  return (
    <>
      <header>{title}</header>
    </>
  );
});
export default App;
