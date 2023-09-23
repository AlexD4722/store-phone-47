import React, { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../styles/contact.scss';
import imgContact from '../assets/imgs/contact.jpg';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!name.trim()) {
            validationErrors.name = 'Please enter your name.';
        }

        if (!email.trim()) {
            validationErrors.email = 'Please enter your email address.';
        } else if (!isValidEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        if (!subject.trim()) {
            validationErrors.subject = 'Please enter your subject.';
        }

        if (!message.trim()) {
            validationErrors.message = 'Please enter your message.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
    };

    const isValidEmail = (email) => {
        // const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    return (
        <>
            <div className="container mt-5">
                <Row xs={1} sm={1} md={1} lg={1}>
                    <Col>
                        <div className='questions-and-contact'>
                            <span className='questions-and-contact__title'>You can ask us questions !</span>
                            <p className='questions-and-contact__description'>Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</p>
                        </div>
                    </Col>
                </Row>


                <Row xs={1} sm={1} md={3} lg={3}>
                    <Col>
                        <div className='contactus'>
                            <p className='contactus__country'>United States</p>
                            <h4 className='contactus__country-office'>United States Office</h4>
                            <p className='contactus__address'>205 Middle Road, 2nd Floor, New York</p>
                            <p className='contactus__phone'>+1 1234 567 88</p>
                            <a className='contactus__link' href="/#">info@example.com</a>
                        </div>
                    </Col>
                    <Col>
                        <div className='contactus'>
                            <p className='contactus__country'>United States</p>
                            <h4 className='contactus__country-office'>United States Office</h4>
                            <p className='contactus__address'>205 Middle Road, 2nd Floor, New York</p>
                            <p className='contactus__phone'>+1 1234 567 88</p>
                            <a className='contactus__link' href="/#">info@example.com</a>
                        </div>
                    </Col>
                    <Col>
                        <div className='contactus'>
                            <p className='contactus__country'>United States</p>
                            <h4 className='contactus__country-office'>United States Office</h4>
                            <p className='contactus__address'>205 Middle Road, 2nd Floor, New York</p>
                            <p className='contactus__phone'>+1 1234 567 88</p>
                            <a className='contactus__link' href="/#">info@example.com</a>
                        </div>
                    </Col>
                </Row>

                <Row xs={1} sm={1} md={2} lg={2}>
                    <Col>
                        <div className="contact-form">
                            <h3 className="contact-form__title">Get in Touch</h3>
                            <p className="contact-form__description">Quisque mattis tortor eu tristique sodales. Aenean sit amet justo nec sem vestibulum.</p>
                            <form onSubmit={handleSubmit}>
                                <Row xs={1} sm={1} md={1} lg={2}>
                                    <Col>
                                        <div className="form-group">
                                            <label htmlFor="name">Name :</label>
                                            <div className='form-error'> {errors.name && <p className="error">{"* " + errors.name}</p>}</div>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />

                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            {errors.email && <p className="error">{"* " + errors.email}</p>}
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                        </div>
                                    </Col>
                                </Row>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject:</label>
                                    {errors.subject && <p className="error">{errors.subject}</p>}
                                    <input
                                        type="text"
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    {errors.message && <p className="error">{errors.message}</p>}
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>

                                </div>
                                <button type="submit">SEND</button>
                            </form>
                        </div>
                    </Col>

                    <Col>
                        <div className="text-img">
                            <div className="text-img__title">
                                <p className="text-img__description">Nam maximus nunc a augue pulvinar, non euismod mauris tempus.
                                    Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus.
                                    Vestibulum enim eros, porta eget quam et, euismod dictum elit.</p>
                            </div>

                            <div className="img_contact">
                                <img src={imgContact} alt="img-contact"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >
        </>
    );
}

export default Contact;