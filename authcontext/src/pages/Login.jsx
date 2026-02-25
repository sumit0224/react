import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/login', formData);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/'); // Redirect to home/dashboard
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Login</h2>
                {error && <p style={styles.error}>{error}</p>}
                <div style={styles.inputGroup}>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />
                </div>
                <button type="submit" disabled={loading} style={styles.button}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p style={{ marginTop: '15px' }}>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );
};

const styles = {
    container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' },
    form: { display: 'flex', flexDirection: 'column', width: '320px', padding: '25px', border: '1px solid #444', borderRadius: '8px', backgroundColor: '#2a2a2a', color: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
    inputGroup: { marginBottom: '15px', display: 'flex', flexDirection: 'column' },
    input: { padding: '10px', borderRadius: '4px', border: '1px solid #555', marginTop: '5px', backgroundColor: '#333', color: '#fff' },
    button: { padding: '12px', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' },
    error: { color: '#ff4d4f', fontSize: '14px', marginBottom: '10px' }
};

export default Login;