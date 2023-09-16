import React from 'react';
import NoteActions from './NoteActions';
import NoteItemBody from './NoteItemBody';
import { showFormattedDate } from '../utils';
function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
    return (
        <div className={`note-item ${archived ? 'archived' : ''}`}>
            <NoteItemBody
                id={id}
                title={title}
                body={body}
                createdAt={createdAt}
                archived={archived}
                onDelete={onDelete}
                onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;
