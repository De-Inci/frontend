'use client'

import { account } from '../../lib/appwrite';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Importing toast
import { useRouter } from 'next/navigation'; // For navigation
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for toast
import './register.css'

// Sign-up function
const signUp = async (email, password, name) => {
	try {
		const response = await account.create('unique()', email, password, name);
		console.log("User created successfully:", response);
		return response;
	} catch (error) {
		console.error("Sign-up failed:", error);
		throw error;
	}
};

export const SignUpForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [error, setError] = useState(null);
	const router = useRouter(); // Hook for navigation

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signUp(email, password, name);
			toast.success('Sign up successful! Redirecting to Sign In...'); // Success toast

			// Redirect to Sign In page after 2 seconds
			setTimeout(() => {
				router.push('/auth/signin');
			}, 2000);
		} catch (err) {
			setError(err.message);
			toast.error(`Sign-up failed: ${err.message}`); // Error toast
		}
	};

	return (
		<>
			<ToastContainer position='top-center' />
			<div className='mainContainer'>
				<div className='signup-form'>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
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
						<button type="submit">Sign Up</button>
						{error && <p>{error}</p>}
					</form>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;
