import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../components/UI/Checkbox/Checkbox";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className='auth-form-container'>
            <h1 className='auth-form-container__title'>Sign In</h1>
            <p className='auth-form-container__message'>Don't have an account yet? <Link to='/auth/register'>Sign Up</Link></p>
            <form className='auth-form'>
                <Input 
                    type='text' 
                    placeholder='Username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default Login;