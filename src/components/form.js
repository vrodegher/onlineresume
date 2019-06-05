import React from "react"


const Form = () =>

<form

className="contact-form"
 name="contact-form"
 method="POST"
 data-netlify="true"
 data-netlify-honeypot="bot-field"
 action="/success"
 >
   <input type="hidden" name="form-name" value="contact-form" />
   <h3><label for="name">Name</label>
   <input name="name" placeholder="Jean Doe" type="text" /></h3>
   <h3><label for="email">Email</label>
   <input name="email" placeholder="jean@jeandoe.com" type="email" /></h3>
   <h3><label for="message">Message</label>
   <textarea name="message" cols="30" rows="10"/></h3>
   <button className="button contact" type="submit">Send</button>
   
 </form>


export default Form;