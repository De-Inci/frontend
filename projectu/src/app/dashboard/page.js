'use client';

import React from "react";
import { useRouter }  from 'next/navigation';
import { useUser } from '../../lib/context/user';
import '../dashboard/dashboard.css';

export default function Dashboard() {
    const user = useUser();
    const router = useRouter();

    const handleLogout = () => {
        user.logout();
        router.push("/");
    };

    return (
        <>
            <center><h2>I am dashboard</h2>
            <button className="logout-btn" onClick={handleLogout}>Logout</button></center>
        </>
    );
}
