import { IoClose } from 'react-icons/io5';

function HelpModal ({ onClose }) {

    return (
        <div className="help-modal">
            <div className='modal-content'>
                <button className='close-button' onClick={onClose}><IoClose /></button>
                <h3>How to use our app:</h3>
                <p>Enter your location and choose a desired shelter.</p>
                <p>It will display the safest route to that selected shelter.</p>
                <p>If you are injured or are in need of medical attention, use the 'See Nearby Hospitals' button.</p>
                <p>For information specific to women and safety tips, press the 'Women's Safety' tab for help.</p>
                <p>If you would like to reach out to local Help Centers in Gaza, press the 'Help Centers' tab.</p>
            </div>
        </div>
    )
}

export default HelpModal;