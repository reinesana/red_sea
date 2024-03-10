import { FaExternalLinkAlt, FaPhoneAlt } from "react-icons/fa";
import { LuContact2 } from "react-icons/lu";


function Help() {
  return (
    <div className="help-body">
      <div className="help-card">
        <h1>Help Centers</h1>
        <div className="help-center">
          <h3>United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA)</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.unrwa.org">Website</a></p>
          <p><FaPhoneAlt />: +970 5 979 20223</p>
        </div>

        <div className="help-center">
          <h3>Palestine Red Crescent Society</h3>
          <p><FaExternalLinkAlt />: <a href="http://www.palestinercs.org/">Website</a></p>
          <p><FaPhoneAlt />: +970 8 282 0445</p>
        </div>

        <div className="help-center">
          <h3>UNICEF (United Nations Children's Fund)</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.unicef.org/">Website</a></p>
          <p><FaPhoneAlt />: +970 8 288 1800</p>
        </div>

        <div className="help-center">
          <h3>International Committee of the Red Cross (ICRC)</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.icrc.org/">Website</a></p>
          <p><FaPhoneAlt />: +972 8 282 3056</p>
        </div>

        <div className="help-center">
          <h3>Oxfam</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.oxfam.org/">Website</a></p>
          <p><FaPhoneAlt />: +44 1865 473727</p>
        </div>

        <div className="help-center">
          <h3>Doctors Without Borders (Médecins Sans Frontières)</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.msf.org/">Website</a></p>
          <p><LuContact2 />: <a href="https://www.msf.org/contact-us">Contact Form</a></p>
          <p><FaPhoneAlt />: +962 6 462 4775</p>
        </div>

        <div className="help-center">
          <h3>Save the Children</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.savethechildren.net/">Website</a></p>
          <p><FaPhoneAlt />: +962 6 593 2590</p>
        </div>

        <div className="help-center">
          <h3>Action Against Hunger (Action Contre la Faim)</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.actionagainsthunger.org/">Website</a></p>
          <p><LuContact2 />: <a href="https://www.actionagainsthunger.org/contact-us">Contact Form</a></p>
          <p><FaPhoneAlt />: +33 1 43 35 88 88</p>
        </div>

        <div className="help-center">
          <h3>Islamic Relief</h3>
          <p><FaExternalLinkAlt />: <a href="https://www.islamic-relief.org/">Website</a></p>
          <p><FaPhoneAlt />: +44 121 633 6275</p>
        </div>

        <div className="help-center">
          <h3>International Medical Corps</h3>
          <p><FaExternalLinkAlt />: <a href="https://internationalmedicalcorps.org/">Website</a></p>
          <p><LuContact2 />: <a href="https://internationalmedicalcorps.org/contact/">Contact Form</a></p>
          <p><FaPhoneAlt />: +1 424 252 6000</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
