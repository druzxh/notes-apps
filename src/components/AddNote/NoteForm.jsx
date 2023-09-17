import React from 'react';

function NoteForm({ onChange, onSubmit, value, error }) {
    const handleChange = (event) => {
        const { name, value } = event.target;



        onChange(name, value);
        console.log(name)

    };
    console.log(error)
    return (
        <div className="add-note__form">
            <h1 className='add-note__title'>Buat Catatan</h1>
            <form className="add-note__note-input" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Judul catatan"
                    value={value.title}
                    onChange={handleChange}
                />
                <textarea
                    name="body"
                    placeholder="Buat catatanmu disini."
                    value={value.body}
                    onChange={handleChange}
                />
                <button type="submit">Tambah</button>
            </form>
            {error && (
                <div className='add-note__error'>{error}</div>
            )}
        </div>
    );
}

export default NoteForm;
