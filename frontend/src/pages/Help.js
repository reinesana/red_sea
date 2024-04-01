import React, { useState } from 'react';
import { FaExternalLinkAlt, FaPhoneAlt } from "react-icons/fa";
import { LuContact2 } from "react-icons/lu";

const helpCenters = [
  {
    name: "UNRWA",
    description: "The United Nations Relief and Works Agency for Palestine Refugees in the Near East is a UN agency that supports the relief and human development of Palestinian refugees.",
    website: "https://www.unrwa.org",
    phone: "+970 5 979 20223",
    categories: ["Humanitarian"]
  },
  {
    name: "Palestine Red Crescent Society",
    description: "The Palestine Red Crescent Society is the humanitarian organization that is the International Red Cross and Red Crescent Movement in the State of Palestine, which includes the West Bank, including East Jerusalem, and the Gaza Strip.",
    website: "http://www.palestinercs.org",
    phone: "+970 8 282 0445",
    categories: ["Humanitarian", "Medical"]
  },
  {
    name: "UNICEF (United Nations Children's Fund)",
    description: "UNICEF, originally called the United Nations International Children's Emergency Fund in full, now officially United Nations Children's Fund, is an agency of the United Nations responsible for providing humanitarian and developmental aid to children worldwide.",
    website: "https://www.unicef.org",
    phone: "+970 8 288 1800",
    categories: ["Humanitarian"]
  },
  {
    name: "International Committee of the Red Cross (ICRC)",
    description: "Present in Israel and the occupied territories since 1967 and work with the Palestine Red Crescent Society and Magen David Adom in Israel. The ICRC has offices in Tel Aviv, the West Bank and Gaza.",
    website: "https://www.icrc.org",
    phone: "+972 8 282 3056",
    categories: ["Humanitarian", "Medical"]
  },
  {
    name: "Oxfam",
    description: "Oxfam is a British-founded confederation of 21 independent non-governmental organizations NGOs, focusing on the alleviation of global poverty, founded in 1995 and led by Oxfam International.",
    website: "https://www.oxfam.org",
    phone: "+44 1865 473727",
    categories: ["Poverty"]
  },
  {
    name: "Doctors Without Borders",
    description: "Médecins Sans Frontières, also known as Doctors Without Borders, is a charity that provides humanitarian medical care.",
    website: "https://www.msf.org",
    phone: "+962 6 462 4775",
    categories: ["Medical"]
  }
];

function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const uniqueCategories = [...new Set(helpCenters.flatMap(center => center.categories))];

  const filterHelpCenters = helpCenters.filter(center => {
    const matchesCategory = selectedCategory ? center.categories.includes(selectedCategory) : true;
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="help-body">
      <div className="help-card">
        <h2>Help Centers</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="category-filters">
          {uniqueCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
          <button onClick={() => setSelectedCategory('')}>Clear</button>
        </div>
        <div className="help-centers-container">
          {filterHelpCenters.map((center, index) => (
            <div key={index} className="help-center">
              <p><FaExternalLinkAlt /> <a href={center.website}>Website</a></p>
              <p>{center.phone ? <><FaPhoneAlt /> {center.phone}</> : <><LuContact2 /> <a href={center.website}>Contact</a></>}</p>
              <h3>{center.name}</h3>
              {/* Limiting the description to 100 characters */}
              <p>{center.description.length > 100 ? center.description.substring(0, 97) + '...' : center.description}</p>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Help;
