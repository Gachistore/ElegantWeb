import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/UI/Input/Input";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import Button from "../components/UI/Button/Button";

const Register = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className='auth-form-container'>
            <h1 className='auth-form-container__title'>Sign Up</h1>
            <p className='auth-form-container__message'>Already have an account? <Link to='/auth/login'>Sign In</Link></p>
            <form className='auth-form'>
                <Input
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    type='text' 
                    placeholder='Username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input 
                    type='email' 
                    placeholder='Email Address'  
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type='password' 
                    placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='auth-form__agreement'>
                    <Checkbox
                        ref={ref}
                    />
                    <p>I agree with <a href="">Privacy Policy</a> and <a href="">Terms of Use</a></p>
                </div>
                <Button>
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default Register;