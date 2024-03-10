import React from 'react';
import { IoClose } from 'react-icons/io5';
import LanguageSelector from './LanguageSelector';

function LanguagesModal ({ onClose, apiKey }) {

    return (
        <div className="languages-modal">
            <div className='modal-content'>
                <button className='close-button' onClick={onClose}><IoClose /></button>
                <h2>Please choose your language</h2>
                <LanguageSelector apiKey={apiKey} />
            </div>
        </div>
    )
}

export default LanguagesModal;
