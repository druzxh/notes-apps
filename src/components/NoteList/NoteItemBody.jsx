import React from 'react';
import { showFormattedDate } from '../../utils';
import NoteActions from './NoteActions';

function NoteItemBody({ id, title, body, createdAt, archived, onDelete, onArchive }) {
    return (
        <div className="note-item-body">
            <h3 className="note-title">{title}</h3>
            <p className="note-text">{body}</p>
            <div className='note-footer'>
                <p>
                    <strong>Created At:</strong> {showFormattedDate(createdAt)}
                </p>
                <NoteActions id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
            </div>
        </div>
    );
}

export default NoteItemBody;
