import React, { useState } from 'react';
import '../styles/login.scss';


function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // ...
    };

    return (
        <div id="login">
            <div id="wapper">
                <form method="get" action="" id="form-login">
                    <h1  className="form-heading">REGISTER</h1>
                    <div  className="form-group">
                        <i  className="fa-regular fa-user icon"></i>
                        <input value={username} onChange={handleUsernameChange} type="text"  className="form-input" id="username" name="username" placeholder="Username" />
                    </div>
                    <div  className="form-group">
                        <i  className="fa-regular fa-user icon"></i>
                        <input value={email} onChange={handleEmailChange} type="text"  className="form-input" id="username" name="username" placeholder="Username" />
                    </div>
                    <div  className="form-group">
                        <i  className="fa-solid fa-key icon"></i>
                        <input value={password} onChange={handlePasswordChange} id="password" name="password" type="password"  className="form-input" placeholder="Password" />
                        <i id="eye_toggle"  className="fa-solid fa-eye-slash icon"></i>
                        <i  className="fa-solid fa-eye-slash icon"></i>
                    </div>
                    <input type="submit" value="Register"  className="form-submit" />
                    <a id="register" href="login.php">LOGIN</a>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;