import React from 'react';
import { getInitialData } from './utils';
import { NoteList, Heading, AddNote, Alert } from './components';
class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchValue: "",
            originalNotes: getInitialData(),
            showAlert: false,
            alertMessage: "",
            addNoteData: {
                title: '',
                body: '',
            },
            error: ""
        };

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleAlert = this.handleAlert.bind(this);
        this.handleNoteChange = this.handleNoteChange.bind(this);
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

        if (title.trim() === '' && body.trim() === '') {
            this.setState({ error: 'Judul dan isi catatan tidak boleh kosong!' });
            return
        } else if (body.trim() === '') {
            this.setState({ error: 'Isi catatan tidak boleh kosong!' });
            return
        } else if (title.trim() === '') {
            this.setState({ error: 'Judul catatan tidak boleh kosong!' });
            return
        }

        if (body.length > 50) {
            setError('Isi catatan tidak boleh lebih dari 50 karakter!');
        }

        this.setState((prevState) => {
            return {
                notes: [newNote, ...prevState.notes],
                addNoteData: {
                    title: '',
                    body: '',
                },
                error: ''
            };
        });
    }

    handleNoteChange(name, value) {
        this.setState((prevState) => ({
            addNoteData: {
                ...prevState.addNoteData,
                [name]: value,
            },
        }));
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
                <Heading onSearchChange={this.handleSearchChange} onSubmitSearch={this.handleSearchSubmit} value={this.searchValue} />
                <AddNote addNote={this.onAddNoteHandler} onChange={this.handleNoteChange} formData={this.state.addNoteData} error={this.state.error} />
                {this.state.showAlert && (
                    <Alert alertMessage={this.alertMessage} onHandleAlert={this.handleAlert} />
                )}
                <NoteList notes={this.state.notes} onArchive={this.handleArchive} onDelete={this.handleDelete} />
            </div>
        );
    }
}

export default NotesApp;
