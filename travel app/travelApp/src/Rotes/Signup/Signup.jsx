import React, { useState, useRef } from 'react';
import axios from 'axios'; // For API calls (if applicable)
import { useNavigate } from 'react-router-dom'; // For navigation
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import './Signup.css'; // Import your custom CSS file

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate(); // Hook for navigation
    const popupRef = useRef(null); // Ref for popup element

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSignup = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post('http://localhost:3001/users/signup', formData);
            console.log(response.data);

            // Handle successful signup
            if (response.data.success) {
                alert('Signup successful');
                const redirectTimeout = 5000; // Adjust delay in milliseconds (5 seconds here)
                setTimeout(() => navigate('/Landing'), redirectTimeout);
            } else {
                console.error('Signup failed:', response.data.message);
            }
        } catch (error) {
            console.error('There was an error signing up!', error);
        }
    };

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const userInfo = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`,
                    },
                });
                console.log(userInfo.data);
                localStorage.setItem('token', tokenResponse.access_token);
                navigate('/Landing'); // Navigate after Google login
            } catch (error) {
                console.error('Failed to fetch user info from Google:', error);
            }
        },
        onError: (error) => console.log('Login Failed:', error),
    });



    return (
        <div className="containerr"> {/* Define a container class */}
            <div className="heading">Sign Up</div>
            <form className="form" onSubmit={handleSignup}>
                <input
                    placeholder="Username"
                    id="username"
                    name="username"
                    type="text"
                    className="input"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Password"
                    id="password"
                    name="password"
                    type="password"
                    className="input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <input type="submit" value="Sign Up" className="signup-button" />
            </form>
            <button type="button" className="login-button button" onClick={login}>
                <FcGoogle className='icon' /> <span>Continue with Google</span>
            </button>

            <span>
                Already have an acoount ? <Link to='/signin' >Login </Link>
            </span>
        </div>
    );
};

export default Signup;
