import React from 'react';
import NoteItemBody from './NoteItemBody';
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
