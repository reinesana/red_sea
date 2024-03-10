import { IoClose } from 'react-icons/io5';

function HelpModal ({ onClose }) {

    return (
        <div className="help-modal">
            <div className='modal-content'>
                <button className='close-button' onClick={onClose}><IoClose /></button>
                <p>Lorem ipsum.</p>
            </div>
        </div>
    )
}

export default HelpModal;