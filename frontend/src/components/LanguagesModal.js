import { IoClose } from 'react-icons/io5';

function LanguagesModal ({ onClose }) {

    return (
        <div className="languages-modal">
            <div className='modal-content'>
                <button className='close-button' onClick={onClose}><IoClose /></button>
                <p>Lorem ipsum.</p>
            </div>
        </div>
    )
}

export default LanguagesModal;