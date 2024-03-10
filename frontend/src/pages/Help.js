import { FaExternalLinkAlt, FaPhoneAlt } from "react-icons/fa";
import { LuContact2 } from "react-icons/lu";


function Help() {
  return (
    <div className="help-body">
      <div className="help-card">
        <h1>Help Centers</h1>
        <div className="help-center">
          <h3>United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA)</h3>
          <p>The United Nations Relief and Works Agency for Palestine Refugees in the Near East is a UN agency that supports the relief and human development of Palestinian refugees. </p>
          <p><FaExternalLinkAlt /> <a href="https://www.unrwa.org">Website</a></p>
          <p><FaPhoneAlt /> +970 5 979 20223</p>
        </div>

        <div className="help-center">
          <h3>Palestine Red Crescent Society</h3>
          <p>The Palestine Red Crescent Society is the humanitarian organization that is the International Red Cross and Red Crescent Movement in the State of Palestine, which includes the West Bank, including East Jerusalem, and the Gaza Strip.</p>
          <p><FaExternalLinkAlt />: <a href="http://www.palestinercs.org/">Website</a></p>
          <p><FaPhoneAlt />: +970 8 282 0445</p>
        </div>

        <div className="help-center">
          <h3>UNICEF (United Nations Children's Fund)</h3>
          <p>UNICEF, originally called the United Nations International Children's Emergency Fund in full, now officially United Nations Children's Fund, is an agency of the United Nations responsible for providing humanitarian and developmental aid to children worldwide.</p>
          <p><FaExternalLinkAlt /> <a href="https://www.unicef.org/">Website</a></p>
          <p><FaPhoneAlt /> +970 8 288 1800</p>
        </div>

        <div className="help-center">
          <h3>International Committee of the Red Cross (ICRC)</h3>
          <p>present in Israel and the occupied territories since 1967 and work with the Palestine Red Crescent Society and Magen David Adom in Israel. The ICRC has offices in Tel Aviv, the West Bank and Gaza.</p>
          <p><FaExternalLinkAlt /> <a href="https://www.icrc.org/">Website</a></p>
          <p><FaPhoneAlt /> +972 8 282 3056</p>
        </div>

        <div className="help-center">
          <h3>Oxfam</h3>
          <p>Oxfam is a British-founded confederation of 21 independent non-governmental organizations NGOs, focusing on the alleviation of global poverty, founded in 1995 and led by Oxfam International</p>
          <p><FaExternalLinkAlt /> <a href="https://www.oxfam.org/">Website</a></p>
          <p><FaPhoneAlt /> +44 1865 473727</p>
        </div>

        <div className="help-center">
          <h3>Doctors Without Borders (Médecins Sans Frontières)</h3>
          <p>Médecins Sans Frontières, also known as Doctors Without Borders, is a charity that provides humanitarian medical care.</p>
          <p><FaExternalLinkAlt />: <a href="https://www.msf.org/">Website</a></p>
          <p><LuContact2 /> <a href="https://www.msf.org/contact-us">Contact Form</a></p>
          <p><FaPhoneAlt /> +962 6 462 4775</p>
        </div>

        <div className="help-center">
          <h3>Save the Children</h3>
          <p>The Save the Children Fund, commonly known as Save the Children, is an international, non-government operated organization.</p>
          <p><FaExternalLinkAlt /> <a href="https://www.savethechildren.net/">Website</a></p>
          <p><FaPhoneAlt /> +962 6 593 2590</p>
        </div>

        <div className="help-center">
          <h3>Action Against Hunger (Action Contre la Faim)</h3>
          <p>Action Against Hunger is a global humanitarian organization which originated in France and is committed to ending world hunger.</p>
          <p><FaExternalLinkAlt /> <a href="https://www.actionagainsthunger.org/">Website</a></p>
      
          <p><LuContact2 /> <a href="https://www.actionagainsthunger.org/contact-us">Contact Form</a></p>
          <p><FaPhoneAlt /> +33 1 43 35 88 88</p>
        </div>

        <div className="help-center">
          <h3>Islamic Relief</h3>
          <p>Islamic Relief Worldwide is a faith-inspired humanitarian and development agency which is working to support and empower the world's most vulnerable people.</p>
          <p><FaExternalLinkAlt /> <a href="https://www.islamic-relief.org/">Website</a></p>
          <p><FaPhoneAlt /> +44 121 633 6275</p>
        </div>

        <div className="help-center">
          <h3>International Medical Corps</h3>
          <p>International Medical Corps is a global, nonprofit, humanitarian aid organization that provides emergency medical services, healthcare training and capacity building to those affected by disaster, disease or conflict." It seeks to strengthen medical services and infrastructure in the aftermath of crises.</p>
          <p><FaExternalLinkAlt /> <a href="https://internationalmedicalcorps.org/">Website</a></p>
          <p><FaPhoneAlt /> +1 424 252 6000</p>
        </div>
      </div>
    </div>
  );
}

export default Help;