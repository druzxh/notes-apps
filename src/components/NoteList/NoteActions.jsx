import React from 'react';

function NoteActions({ id, onDelete, onArchive, archived }) {
    return (
        <div className='actions'>
            <button className='action-delete' onClick={() => onDelete(id)}>Delete</button>
            <button className='action-archive' onClick={() => onArchive(id)}>
                {archived ? 'Unarchive' : 'Archive'}
            </button>
        </div>
    );
}

export default NoteActions;
