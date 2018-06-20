import React from 'react';

 const ContactPage = () =>
  <div>
    <h1>Say Hello!</h1>
    <form action="https://formspree.io/jacine.luisi@gmail.com" method="post">
     <div className="form-group">
       <label htmlFor="name">Name</label>
       <input name="name" autoComplete="name" placeholder="Your name" className="form-control" required />
     </div>
     <div className="form-group">
       <label htmlFor="email">Email</label>
       <input type="email" name="email" autoComplete="email" placeholder="Your email" className="form-control" required />
     </div>
     <div className="form-group">
       <label htmlFor="message">Message</label>
       <textarea className="form-control" name="message" placeholder="Leave a message 👋" rows="10" required />
     </div>
     <div className="form-group">
       <input type="submit" value="Send message" className="button button--primary" />
     </div>
   </form>
 </div>;

export default ContactPage;
