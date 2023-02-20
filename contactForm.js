import React from "react";
import "./contact_form.css";
import {MdLocationOn, MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs";
// import userEvent from "@testing-library/user-event";
import { useState } from "react";

export default function ContactForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        contact_number: "",
        gender: "",
        age: "",
        message: ""
    })

    let name, value;

    const getUserData = (event)=>{
        name =  event.target.name;
        value = event.target.value;

        setUser({...user, [name]:value}) // jo pehla sa hai wo bhi raha,
                                         // aur phr naya item ai dynamically.
    }

    const postData = async (event) =>{
        event.preventDefault();
        
        // de-structurization of user object below:
        const {name, email, contact_number,gender, age, message} = user;

        // Database Url below in fetch statement:
        const response = await fetch("https://react-contact-form-41d70-default-rtdb.firebaseio.com/myContactForm.json",
        {
            method: "POST",
            headers :{
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                // yahan pr islia key:value pair mai nhi likha kunka key aur value dono ka naam
                // same hai. Islia bs direct key ka naam likha hai.
                name,
                email,
                contact_number,
                gender,
                age,
                message
            })
            
        }
        );
        if(response)
        {
          if(name == "" || email == "")
          {
            alert("Aah, you missed either name field or an email field.");
          }
          else{
            setUser({
                name: "",
                email: "",
                contact_number: "",
                gender: "",
                age: "",
                message: ""
            })
            alert("Data is stored successfully into the database.");
        }
      }
    }
  return (
    <div className="contact_container">
      <div className="contact_form">
        <div className="contact_form_left_part">
          <h1>We are here for you. <br /> Feel free to Contact Us</h1>
          <div className="our_info">
             <MdLocationOn style={{fontSize: 25}} />
             <p id="our_info_p">Karachi</p>
          </div>
          <div className="our_info">
             <MdEmail style={{fontSize: 25}} /> 
             <p id="our_info_p">abc@dgmail.com</p>
          </div>
          <div className="our_info">
             <BsFillTelephoneFill style={{fontSize: 25}} /> 
             <p id="our_info_p">021-34689102</p>
          </div>

        </div>
        <form className="contact_form_right_part" method="POST">
          <div className="inputs">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name"  onChange={getUserData} placeholder="Enter your name here" required />
          </div>

          <div className="inputs">
            <label htmlFor="name">Email:</label>
            <input type="email" name="email" id="email" value={user.email} onChange={getUserData} placeholder="Enter your email here" required />
          </div>

          <div className="inputs">
            <label htmlFor="contact">Contact Number:</label>
            <input type="tel" name="contact_number" id="number"  maxLength={11} value={user.contact_number} onChange={getUserData} placeholder="Enter your number here" />
          </div>

          <div className="inputs">
            <label htmlFor="gender">Gender:</label>

            <div className="radio">
              <input type="radio" name="gender" id="gender" value={user.gender} onChange={getUserData} />
              <p id="rc_p">Male</p>
            </div>

            <div className="radio">
              <input type="radio" name="gender" id="gender" value={user.gender} onChange={getUserData} />
              <p id="rc_p">Female</p>
            </div>

            <div className="radio">
              <input type="radio" name="gender" id="gender" value={user.gender} onChange={getUserData} />
              <p id="rc_p">Other</p>
            </div>

          </div>

          <div className="inputs">
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" value={user.age} onChange={getUserData} placeholder="Enter your age here" required />
          </div>

          <div className="inputs">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="messgae"
              cols="30"
              rows="10"
              value={user.message}
              onChange={getUserData}
            ></textarea>
          </div>

          <div id="btn_div">
            <button type="submit" onClick={postData}>Submit</button>
          </div>
        </form>
      </div>

      {/* <p id="last_p">Thanks for filling the form. We will contact you soon.</p> */}
    </div>
  );
}
