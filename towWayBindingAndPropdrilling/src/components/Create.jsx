import { useState } from "react";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);

  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { name, age }; // send this data to api or database or backend server
    console.log(newUser);

    setName("");
    setAge(18);
  };

  return (
    <>
      <h1>Two Way Binding </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Full Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default Create;
