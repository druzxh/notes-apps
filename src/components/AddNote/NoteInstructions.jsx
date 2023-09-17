import React from "react"

function NoteInstructions() {
    return (
        <div className="add-note__instructions">
            <h2 className='add-note__title'>Instruksi:</h2>
            <p><span><b>Search - </b></span>Gunakan kolom pencarian diatas untuk mencari catatan yang sudah kamu buat.</p>
            <p><span><b>Buat catatan - </b></span>Isi judul dan isi catatan di samping. Pastikan untuk mengisi kedua bidang ini sebelum menambahkan catatan baru.</p>
            <p><span><b>Note - </b></span>"Max catatan 50 karakter saja."</p>
        </div>
    )
}
export default NoteInstructions