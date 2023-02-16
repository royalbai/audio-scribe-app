import axios from "axios";
import React, { useEffect, useState } from "react";
import { EditText } from 'react-edit-text';

function SavedNotes({ data }) {
    const [journals, setJournals] = useState([]);
    useEffect(() => {
        axios.get(`https://audioscribe.fly.dev/api/v1/voices`, {
        headers: {
            Authorization: `Bearer ${data.token}`
        }
        })
        .then(res => {
            setJournals(res.data.voices);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div className="saved wrapper">
            <h3>My Saved Journals</h3>
            {journals.length ? (
                <ul>
                    {journals.map((journal, index) => (
                        <li key={index}>
                            <h5>{journal.title}</h5>
                            <div className="editContainer">
                                <EditText defaultValue={journal.text} editButtonContent={<i className="fa-solid fa-pen"></i>} showEditButton />
                            </div>
                            <p>{journal.date}</p>
                            <p>{journal.time}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading journals...</p>
            )}
        </div>
    )
}

export default SavedNotes;