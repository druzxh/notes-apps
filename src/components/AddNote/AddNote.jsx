import React from "react";
import NoteInstructions from "./NoteInstructions";
import NoteForm from './NoteForm';

function AddNote({ addNote, onChange, formData, error }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        addNote(formData);
    };

    return (
        <div className='add-note'>
            <div className="add-note__content">
                <NoteForm onChange={onChange} onSubmit={handleSubmit} value={formData} error={error} />
                <NoteInstructions />
            </div>
        </div>
    );
}
export default AddNote