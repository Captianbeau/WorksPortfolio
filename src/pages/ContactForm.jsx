import {useRef} from 'react';
import emailjs from '@emailjs/browser';
export default function Contact () {
    []
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_3uvhu67', 'template_gv48yvq', form.current, {
            publicKey: 'oAk9I3pt8MSpkeAs4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return <div>
        <form className='form' ref={form} onSubmit={sendEmail}>
        <input
        className='email'
            name="user_name"
            type="text"
            placeholder="Your Name"
            />
            <input
            className='email'
            name="email"
            type="text"
            placeholder="Email"
            />
            <input
            className='message'
            name="message"
            type="text"
            placeholder="Your Message"
            />
            <button className='submit' type="submit" value="Send">
                Submit
            </button>
        </form>
    </div>
}