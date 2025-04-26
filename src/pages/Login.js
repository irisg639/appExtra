import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = { email, password };
    
        try {
            const result = await loginUser(credentials);
    
            if (result?.user?.id) {
                login({ name: result.user.name, id: result.user.id });
                navigate('/productos');
            } else {
                setErrorMessage(result.error || 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Error al iniciar sesión');
        }
    };
    

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {errorMessage && <p className="error">{errorMessage}</p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
