'use client';

import React from "react";
import { useRouter } from 'next/navigation';
import { useUser } from '../../lib/context/user';

export default function Dashboard() {
    const user = useUser();
    const router = useRouter();

    const handleLogout = () => {
        user.logout();
        router.push("/");
    };

    if (!user.current) {
        router.push("/");
        return null; 
    }

    return (
        <>
            <center><h2>I am dashboard</h2></center>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </>
    );
}
