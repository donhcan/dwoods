import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, errors } = useForm();

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, text } = contact;
            const payload = { name, email, text};
            await axios.post(url, payload);
            console.log(url);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="contact-form">
            <h2>Say Hey</h2>
            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                className="form-control" 
                                value={contact.name}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.name && 'Please enter your name'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                className="form-control" 
                                value={contact.email}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.email && 'Please enter your email'}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="text" 
                                cols="30" 
                                rows="5" 
                                placeholder="Write your message..." 
                                className="form-control" 
                                value={contact.text}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{display: 'block'}}>
                                {errors.text && 'Write your message'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                        <div className='button-block-div'>
                            <button type="submit" className="btn btn-primary">Send</button>
                            <div className='text-block'>Or</div>
                            <button type="submit" className="btn btn-primary">Schedule a call</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;