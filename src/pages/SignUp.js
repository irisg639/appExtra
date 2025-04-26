import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/UserService';
import { useAuth } from '../context/AuthContext';

function SignUp() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, password };

        try {
            const result = await createUser(user);

            if (result?.id) {
                login({ name: result.name, id: result.id });
                navigate('/productos');
            } else {
                setErrorMessage('Error al crear usuario');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('No se pudo registrar');
        }
    };

    return (
        <div className="signup-container">
            <h2>Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default SignUp;
