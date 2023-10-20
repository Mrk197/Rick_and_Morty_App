import styles from './Form.module.css';
import {useState} from 'react';
import { validation } from './validation';

export default function Form({login}) {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' }); 
    const togglePasswordButton = document.getElementById('toggle');
    const passwordInput = document.getElementById('password');

    const handleInputChange = (e) =>{
        e.preventDefault();
        setUserData({...userData, [e.target.name]:e.target.value}, setErrors(validation(userData)));
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    };

    const togglePassword = () => {
        console.log('type', passwordInput.type);
        if(passwordInput.type === 'password'){
            passwordInput.type = 'text';
            togglePasswordButton.textContent = 'Hide';
            togglePasswordButton.setAtribute('arial-label','Hide Password.');
        }

        else{
            passwordInput.type = 'password';
            togglePasswordButton.textContent = 'Show';
            togglePasswordButton.setAtribute('arial-label','Show Password as plain text.');
        }
    }

    return <div className={styles.login}>
        <h1>RICK AND MORTY APP</h1>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                type="email"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                onBlur={handleInputChange}
                autoComplete="username"
                />
                {errors.username && <p className={styles.warning}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                value={userData.password} 
                onChange={handleInputChange}
                onBlur={handleInputChange}
                autoComplete="password"
                />
                <div className={styles.toggle}>
                    {<button id="toggle" onClick={togglePassword}>Show</button>}
                </div>
                {errors.password && <p className={styles.warning}>{errors.password}</p>}
            </div>
            
            <div>
                <input type="submit" value="LOGIN" className={styles.button} />
            </div>

        </form>
    </div>
}