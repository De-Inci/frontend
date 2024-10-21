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
        <div className="dashboard-wrapper">
            <header className="dashboard-header">
                <div className="user-info">
                    {user.current ? (
                        <>
                            <span className="navbar-email">{user.current.email}</span>
                        </>
                    ) : ( ""
                    )}
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </header>
            <main className="dashboard-content">
                <section className="intro-section">
                    <h2>Unleash the Full Potential of AI</h2>
                    <p>
                        AI Ally is a versatile assistant that utilizes state-of-the-art natural language processing to provide real-time support and assistance across various domains.
                    </p>
                </section>

                <section className="applications-section">
                    <h2>Different Destinations</h2>
                    <p>
                        We explore the diverse ways in which this technology can revolutionize work across various industries and fields.
                    </p>
                    <ul className="applications-list">
                        <li><strong>Students:</strong> AI Ally assists in research, provides learning materials, and answers questions.</li>
                        <li><strong>Professionals:</strong> Get quick access to relevant data and insights.</li>
                        <li><strong>Writers:</strong> AI Ally generates ideas and suggests writing improvements.</li>
                        <li><strong>Designers:</strong> Analyze vast amounts of visual data and get inspiration for creative projects.</li>
                    </ul>
                </section>

                <section className="testimonials-section">
                    <h2>What Our Users Say</h2>
                    <p>"This tool has transformed the way I work, making everything easier and more efficient." - John Doe</p>
                    <p>"The AI text tool helped me generate creative ideas for my projects. It's a game-changer!" - Jane Smith</p>
                    <p>"Thanks to this tool, I've been able to accelerate my work and achieve better results." - Mark Lee</p>
                </section>
            </main>
        </div>
    );
}
