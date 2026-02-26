import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        try {
            const response = await axios.post('http://localhost:3000/register', formData);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong');
            console.log(error)
        } finally {
            setLoading(false);
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                {error && <p> {error}</p>}
                <label htmlFor="">name</label>
                <input value={formData.name} name='name' type="text" placeholder='enter your name' onChange={handleChange} />
                <label htmlFor="">email </label>
                <input value={formData.email} type="email" name='email' placeholder='enter your email' onChange={handleChange} />
                <label htmlFor="">password</label>
                <input value={formData.password} type="password" name='password' placeholder='enter new password' onChange={handleChange} />

                <button type='submit'>sign-up</button>
            </form>

        </div>
    )
}

export default Signup
