import React from 'react';

function Alert({ alertMessage, onHandleAlert }) {
    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <div className="custom-alert-box">
                    <h2 className='custom-alert-message'>{alertMessage}</h2>
                    <button onClick={onHandleAlert}>tutup</button>
                </div>
            </div>
        </div>
    )
}
export default Alert