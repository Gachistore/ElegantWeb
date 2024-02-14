import { Outlet } from "react-router-dom";
import './styles.css';

const Auth = () => {
    return (
        <main className='auth'>
            <div className='auth__left'>
                <h2>3legant</h2>
            </div>
            <div className='auth__right'>
                <Outlet/>
            </div>
        </main>
    )
}

export default Auth;