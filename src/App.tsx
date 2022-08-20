/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import  {  useState } from "react";
import axiosInstance from "./API/Interceptor";
import { employee } from "./API/Api";

function App() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [contact, setContact] = useState(" ");

  const [nameError, setnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [contactError, setcontactError] = useState(false);
  const resetUser =()=> {
    setName('');
    setEmail('');
    setContact('');
  }

    function saveUser (e:any) {
      e.preventDefault();
      console.warn(name,email,contact);
      let data={name,email,contact}
      
      axiosInstance.post(`${employee}`, JSON.stringify(data)).then((result)=>{
        console.log(result, 'Irfan..'); 
        resetUser();

      }).catch((e)=>{
console.log(e, 'error api..');

      })


//       fetch('http://localhost:8000/employee', {
//   method: 'POST',
//   headers: { 
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
  
//   body: JSON.stringify(data),
  
// }).then((result)=>{
//   console.warn("result",result)
//   resetUser();
// })
    }

    function nameHandler(e:any) {
      let len = e.target.value.length;
      console.log(e.target.value, len)
      if (len < 5) {
        setnameError(true);
      } else {
        setnameError(false); 
      }
      setName(e.target.value);
    }

    function emailHandler(e:React.ChangeEvent<HTMLInputElement>) {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
        setemailError(false);
        //console.log('Vailid email');
      } else {
        setemailError(true);
        //console.log('Invailid email');
      }
      setEmail(e.target.value);
    }
    function contactHandler(e:React.ChangeEvent<HTMLInputElement>) {
      let len = e.target.value;
    if (/^[0-9]+$/.test(len) && len.length === 10) {
      setcontactError(false);
      // console.log('Vailid phone number');
    } else {
      setcontactError(true);
      //console.log('Invailid phone number');
    }
      setContact(e.target.value);
    }


  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="container">
    <div className="App">
    <div className="brand-title">Dragon register</div>
      <div>Name</div>
      <input type="text" value={name} onChange={nameHandler} name="name"/>{" "}
      <br />
      {nameError ? (
          <span className="errCls">Name should greater than 5 charecter</span>
        ) : null}
         <br />
      <div>Email</div>
      <input type="mail" value={email} onChange={emailHandler} name="email"/>{" "}
      <br />
      {emailError ? (
          <span className="errCls">Enter valid email id</span>
        ) : null} <br />
      <div>Phone</div>
      <input type="number" value={contact} onChange={contactHandler} name="contact"/>{" "} 
       <br /> 
       {contactError ? (
          <span className="errCls">Enter valid phone number</span>
        ) : null}
       <br />
       {/* <lable>Phone</lable> */}
      {/* <input type="number" value={contact} onChange={(e) => {setContact(e.target.value);}} name="contact"/>{" "} 
       <br /> 
       {contactError ? (
          <span className="errCls">Enter valid email id</span>
        ) : null}<br />  */}
      <button onClick={resetUser}>Reset</button>
      <button onClick={saveUser}>Submit</button>
    </div>
    </div>
  );
}

export default App;
