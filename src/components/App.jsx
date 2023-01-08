import React, { useState } from "react";


function App() {

  const [contactDetalis, setcontactDetalis] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
   

    setcontactDetalis((prevValue) => {
        return {
          ...prevValue,
          [name]: value,
        }
    })
  }


return (
    <div className="container">
      <h1>Hello {contactDetalis.fName} {contactDetalis.lName}</h1>
      <p>{contactDetalis.email}</p>
      <form>
        <input name="fName" onChange= {handleChange} placeholder="First Name" value={contactDetalis.fName}/>
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={contactDetalis.lName}/>
        <input name="email" onChange={handleChange} placeholder="Email" value={contactDetalis.email} />
        <button>Submit</button>
      </form>
    </div>
)

}

export default App;