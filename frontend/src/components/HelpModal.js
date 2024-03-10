import { IoClose } from 'react-icons/io5';

function HelpModal ({ onClose }) {

    return (
        <div>
            <button className='close-button' onClick={onClose}><IoClose />

            </button>
        </div>
    )
}

export default HelpModal;