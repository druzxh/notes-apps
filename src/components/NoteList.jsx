// NoteList.js
import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
    const activeNotes = notes.filter((note) => !note.archived);
    const archivedNotes = notes.filter((note) => note.archived);
    return (
        <div>
            <h2 className='active-title'>Catatan Aktif</h2>
            <div className="note-list">
                {activeNotes.length === 0 ? (
                    <h4>Tidak ada catatan!</h4>
                ) : (
                    activeNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            archived={note.archived}
                        />
                    ))
                )}
            </div>
            <h2 className='archive-title'>Arsip</h2>
            <div className="note-list">
                {archivedNotes.length === 0 ? (
                    <h4>Tidak ada catatan!</h4>
                ) : (
                    archivedNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            archived={note.archived}
                        />
                    ))
                )}
            </div>

        </div>
    );
}

export default NoteList;
