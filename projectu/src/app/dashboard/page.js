'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useUser } from '../../lib/context/user';
import '../dashboard/dashboard.css';
import axios from "axios";

export default function Dashboard() {
    const user = useUser();
    const router = useRouter();
    const [data, setData] = useState([]);
    const [newEntry, setNewEntry] = useState({ first_name: '', last_name: '', MathMarks: '', ScienceMark: '', EnglishMark: '', HindiMark: '', SocialSciencMark: '' });
    const [editEntry, setEditEntry] = useState(null);
    // const [user, setUser] = useState(null);
    const [newDataLabel, setNewDataLabel] = useState('');
    const [newDataValue, setNewDataValue] = useState('');
    const [updateLabel, setUpdateLabel] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [currentlyEditingId, setCurrentlyEditingId] = useState(null);

    const handleLogout = () => {
        user.logout();
        router.push("/");
    };

    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/data');
        const result = await response.json();
        setData(result);
    };

    const handleAdd = async () => {
        const entryToAdd = editEntry || newEntry; // Use editEntry if it's present, else newEntry
        const response = await fetch('http://localhost:5000/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entryToAdd)
        });
        
        if (response.ok) {
            const addedEntry = await response.json();
            setData([...data, addedEntry]);
            setNewEntry({ first_name: '', last_name: '', MathMarks: '', ScienceMark: '', EnglishMark: '', HindiMark: '', SocialSciencMark: '' });
            setEditEntry(null); // Reset editEntry after adding
        } else {
            const errorText = await response.text();
            console.error('Failed to add entry:', errorText);
            alert(errorText);
        }
    };
    

    const handleUpdate = async (id) => {
        const response = await axios.put(`http://localhost:5000/data/${id}`, editEntry); // Use editEntry directly
        if (response.status === 200) {
            setData(data.map(item => item.id === id ? response.data : item));
            setCurrentlyEditingId(null);
            setEditEntry(null); // Reset the edit entry after updating
        } else {
            console.error('Failed to update entry');
        }
    };
    
    
    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/data/${id}`, { method: 'DELETE' });
        setData(data.filter(item => item.id !== id));
    };

    const handleEditClick = (item) => {
        setEditEntry({ 
            id: item.id, // Include the ID here
            first_name: item.first_name, 
            last_name: item.last_name, 
            MathMarks: item.MathMarks, 
            ScienceMark: item.ScienceMark, 
            EnglishMark: item.EnglishMark, 
            HindiMark: item.HindiMark, 
            SocialSciencMark: item.SocialSciencMark 
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                    <h2>Data Management</h2>
                    <input type="text" placeholder="First Name" value={newEntry.first_name} onChange={(e) => setNewEntry({ ...newEntry, first_name: e.target.value })} />
                    <input type="text" placeholder="Last Name" value={newEntry.last_name} onChange={(e) => setNewEntry({ ...newEntry, last_name: e.target.value })} />
                    <input type="number" placeholder="Math Marks" value={newEntry.MathMarks} onChange={(e) => setNewEntry({ ...newEntry, MathMarks: e.target.value })} />
                    <input type="number" placeholder="Science Marks" value={newEntry.ScienceMark} onChange={(e) => setNewEntry({ ...newEntry, ScienceMark: e.target.value })} />
                    <input type="number" placeholder="English Marks" value={newEntry.EnglishMark} onChange={(e) => setNewEntry({ ...newEntry, EnglishMark: e.target.value })} />
                    <input type="number" placeholder="Hindi Marks" value={newEntry.HindiMark} onChange={(e) => setNewEntry({ ...newEntry, HindiMark: e.target.value })} />
                    <input type="number" placeholder="Social Science Marks" value={newEntry.SocialSciencMark} onChange={(e) => setNewEntry({ ...newEntry, SocialSciencMark: e.target.value })} />
                    <button onClick={handleAdd}>Add Entry</button>
                </section>

                <section className="data-section">
                    <h2>Current Data</h2>
                    <ul>
                        {data.map(item => (
                            <li key={item.id}>
                                {item.first_name} {item.last_name} - Math: {item.MathMarks}, Science: {item.ScienceMark}, English: {item.EnglishMark}, Hindi: {item.HindiMark}, Social: {item.SocialSciencMark}
                                <button onClick={() => handleEditClick(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>

                    {editEntry && (
                    <div>
                        <h3>Edit Entry</h3>
                        <input type="text" placeholder="First Name" value={editEntry.first_name} onChange={(e) => setEditEntry({ ...editEntry, first_name: e.target.value })} />
                        <input type="text" placeholder="Last Name" value={editEntry.last_name} onChange={(e) => setEditEntry({ ...editEntry, last_name: e.target.value })} />
                        <input type="number" placeholder="Math Marks" value={editEntry.MathMarks} onChange={(e) => setEditEntry({ ...editEntry, MathMarks: e.target.value })} />
                        <input type="number" placeholder="Science Marks" value={editEntry.ScienceMark} onChange={(e) => setEditEntry({ ...editEntry, ScienceMark: e.target.value })} />
                        <input type="number" placeholder="English Marks" value={editEntry.EnglishMark} onChange={(e) => setEditEntry({ ...editEntry, EnglishMark: e.target.value })} />
                        <input type="number" placeholder="Hindi Marks" value={editEntry.HindiMark} onChange={(e) => setEditEntry({ ...editEntry, HindiMark: e.target.value })} />
                        <input type="number" placeholder="Social Science Marks" value={editEntry.SocialSciencMark} onChange={(e) => setEditEntry({ ...editEntry, SocialSciencMark: e.target.value })} />
                        <button onClick={() => handleUpdate(editEntry.id)}>Update Entry</button>
                        <button onClick={() => setEditEntry(null)}>Cancel</button>
                    </div>
                )} 
                </section>
            </main>
        </div>
    );
}
