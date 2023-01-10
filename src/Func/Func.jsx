import React, {useState, useEffect} from "react";

function Func () {
  const [name, setName] = useState("Functional Component");
  const listOfObj = [
    {
      id: 1,
      name: "Person1",
    },
    {
      id: 2,
      name: "Person2",
    },
    {
      id: 3,
      name: "Person3",
    },
  ];
  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    setTimeout(() => {
        setName("Functional Component");
    }, 2000)
  }, [name]);
  const changeName = () => {
    setName("Class Component");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeName}>Click me</button>
      <div>
        <ul>
          {listOfObj.map((list) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Func;
