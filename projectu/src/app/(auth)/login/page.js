'use client';

import { account } from '../../lib/appwrite';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const signIn = async (email, password) => {
    try {
        const response = await account.createEmailPasswordSession(email, password);
        console.log('User signed in successfully:', response);
        return response;
    } catch (error) {
        console.error('Sign-in failed:', error);
        throw error;
    }
};

export const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(email, password);
            toast.success('Sign in successful');
            router.push('/dashboard');
        } catch (err) {
            setError(err.message);
            toast.error('Sign in failed');
        }
    };

    return (
        <>
            <ToastContainer position="top-center" />
            <div className="mainContainer">
                <div className="signin-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignInForm;
