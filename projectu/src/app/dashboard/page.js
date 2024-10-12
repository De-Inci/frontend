'use client';

import { useState, useEffect } from 'react';
import { account } from '../lib/appwrite';
import { useRouter } from 'next/navigation';
import './dashboard.css';

export const Dashboard = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const currentUser = await account.get(); // Fetch the current user
                setUser(currentUser);
            } catch (error) {
                console.error('User not logged in:', error);
                router.push('/auth/signin'); // Redirect to SignIn if not logged in
            }
        };

        getUser();
    }, [router]);

    const handleLogout = async () => {
        try {
            await account.deleteSession('current'); // Logout the user
            router.push('/auth/signin'); // Redirect to SignIn page
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="mainContainer">
            <div className="dashboard-container">
                {user ? (
                    <>
                        <h1>Welcome, {user.name}!</h1>
                        <p>Your email: {user.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
