import React from "react";
import { EditText, EditTextarea } from 'react-edit-text';

function SavedNotes({ journals }) {

    return (
        <div className="saved wrapper">
            <h3>My Saved Journals</h3>
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
        </div>
    )
}

export default SavedNotes;