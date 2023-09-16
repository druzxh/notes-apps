import React from 'react';
import { Fragment } from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            error: '', // Menyimpan pesan kesalahan
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, body } = this.state;
        if (title.trim() === '' && body.trim() === '') {
            this.setState({ error: 'Judul dan isi catatan tidak boleh kosong!' });
            return;
        } else if (body.trim() === '') {
            this.setState({ error: 'Isi catatan tidak boleh kosong!' });
            return;
        } else if (title.trim() === '') {
            this.setState({ error: 'Judul catatan tidak boleh kosong!' });
            return;
        }

        if (body.length > 50) {
            this.setState({ error: "Isi catatan tidak boleh lebih dari 50 karakter!" });
            return;
        }

        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
        };

        this.props.addNote(newNote);

        this.setState({
            title: '',
            body: '',
            error: '',
        });
    };

    render() {
        return (
            <div className='add-note'>
                <div className="add-note__content">
                    <div className="add-note__form">
                        <h1 className='add-note__title'>Buat Catatan</h1>
                        <form className="add-note__note-input" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Judul catatan"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <textarea
                                name="body"
                                placeholder="Buat catatanmu disini."
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                            <button type="submit">Tambah</button>
                        </form>
                        {this.state.error && (
                            <div className='add-note__error'>{this.state.error}</div>
                        )}
                    </div>
                    <div className="add-note__instructions">
                        <h2 className='add-note__title'>Instruksi:</h2>
                        <p><span><b>Search - </b></span>Gunakan kolom pencarian diatas untuk mencari catatan yang sudah kamu buat.</p>
                        <p><span><b>Buat catatan - </b></span>Isi judul dan isi catatan di samping. Pastikan untuk mengisi kedua bidang ini sebelum menambahkan catatan baru.</p>
                        <p><span><b>Note - </b></span>"Max catatan 50 karakter saja."</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNote;
