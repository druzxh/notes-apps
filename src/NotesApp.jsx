import React from 'react';
import { getInitialData } from './utils';
import NoteList from './components/NoteList';
import AddNote from './components/AddNotes';
import { Fragment } from 'react';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchValue: "",
            originalNotes: getInitialData(),
            showAlert: false,
            alertMessage: "",
        };

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
    }

    handleArchive = (noteId) => {
        this.setState((prevState) => ({
            notes: prevState.notes.map((note) =>
                note.id === noteId ? { ...note, archived: !note.archived } : note
            ),
        }));
    };

    handleDelete = (id) => {
        const updatedNotes = this.state.notes.filter((note) => note.id !== id);

        this.setState({
            notes: updatedNotes,
        });
    };

    onAddNoteHandler({ title, body }) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
        };

        this.setState((prevState) => {
            return {
                notes: [newNote, ...prevState.notes],
            };
        });
    }

    handleSearchChange(event) {
        this.setState({ searchValue: event.target.value });
    }

    handleAlert() {
        this.setState({ showAlert: !this.state.showAlert });
    }

    handleSearchSubmit(event) {
        event.preventDefault();
        const searchQuery = this.state.searchValue.toLowerCase();
        const searchResults = this.state.notes.filter((note) =>
            note.title.toLowerCase() === searchQuery
        );
        console.log(searchQuery)
        console.log(searchResults)

        if (this.state.searchValue.trim() === "") {
            console.log("kosong")
            this.alertMessage = "Kolom pencarian tidak boleh kosong!"
            this.handleAlert();
        } else {
            if (searchResults.length === 0) {
                this.alertMessage = "Catatan tidak ditemukan!"
                this.handleAlert();
            } else {
                this.setState({
                    notes: searchResults,
                });
            }
        }


    }

    render() {
        return (
            <div className="container">
                <div className='navbar'>
                    <h1 className='nav-title'>Notes App</h1>
                    <form className="nav-search" onSubmit={this.handleSearchSubmit}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Cari judul atau nama catatanmu disini..."
                            value={this.state.searchValue}
                            onChange={this.handleSearchChange}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <h1 className='nav-title'>Versi 1.0</h1>
                </div>
                <AddNote addNote={this.onAddNoteHandler} />
                {this.state.showAlert && (
                    <div className="custom-alert-overlay">
                        <div className="custom-alert">
                            <div className="custom-alert-box">
                                <h2 className='custom-alert-message'>{this.alertMessage}</h2>
                                <button onClick={this.handleAlert}>tutup</button>
                            </div>
                        </div>
                    </div>
                )}
                <NoteList notes={this.state.notes} onArchive={this.handleArchive} onDelete={this.handleDelete} />
            </div>
        );
    }
}

export default NotesApp;
