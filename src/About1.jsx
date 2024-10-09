import './App.css';
import React, { useState } from 'react';
import Card from './Card';
import './Card.css';
import { heads2024 } from './Data/heads2024.js';
import {heads2023} from './Data/heads2023.js';
import {heads2022} from './Data/heads2022.js';
import {sms2024} from './Data/sms2024.js';
import {sms2023} from './Data/sms2023.js';
import {sms2022} from './Data/sms2022.js';


// Map data for easier access based on category and year
const dataMap = {
  heads: {
    2024: heads2024,
    2023: heads2023,
    2022: heads2022,
  },
  sms: {
    2024: sms2024,
    2023: sms2023,
    2022: sms2022,
  },
};

const AboutUs = () => {
  const [expandYear, setExpandedYear] = useState(['2024']);
  const [showCategory, setShowCategory] = useState({
    2024: 'heads',
    2023: 'heads',
    2022: 'heads',
  });

  // Toggles expanded year
  const toggleYear = (year) => {
    setExpandedYear((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  // Toggles category (Heads/SMs) per year
  const toggleShowCategory = (year, category) => {
    setShowCategory((prev) => ({
      ...prev,
      [year]: category,
    }));
  };

  // Dynamically renders content for each year
  const renderContent = (year) => {
    const selectedData = dataMap[showCategory[year]][year];

    return (
      <>
        <CategoryButtons year={year} showCategory={showCategory[year]} toggleShowCategory={toggleShowCategory} />

        <div className="card-container">
          {selectedData.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              designation={member.designation}
              // pfp={"./images/2022/HEADS/aditi.jpeg"}
              pfp={`/${member.pfp}`}
              fb={member.fb}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </>
    );
  };

  // Component to render category toggle buttons
  const CategoryButtons = ({ year, showCategory, toggleShowCategory }) => (
    <div className="tab">
      <button
        className={`buttonCategory ${showCategory === 'heads' ? 'active' : ''}`}
        onClick={() => toggleShowCategory(year, 'heads')}
      >
        Heads
      </button>
      <button
        className={`buttonCategory ${showCategory === 'sms' ? 'active' : ''}`}
        onClick={() => toggleShowCategory(year, 'sms')}
      >
        Student Members
      </button>
    </div>
  );

  // Component to render year section
  const YearSection = ({ year }) => (
    <div className="yearCollapsible">
      <button
        type="button"
        className={`collapsible ${expandYear.includes(year) ? 'active' : ''}`}
        onClick={() => toggleYear(year)}
      >
        {year}
      </button>
      {expandYear.includes(year) && <div className="content show">{renderContent(year)}</div>}
    </div>
  );

  return (
    <div className="App fade-in">
      <div className="topArea">
        <div className="title">
          <h1>Student Welfare Group</h1>
        </div>
        <p>
          Student Welfare Group helps students in improving their skills, attitude, and resources necessary to both
          succeed in the college environment as well as to pursue productive and satisfying lives by organizing
          different activities on the campus. Our Group strives to contribute to the overall educational mission of the
          Institute by facilitating the academic, emotional, social, and vocational development of the entire campus
          community.
        </p>
      </div>

      <hr />

      <div className="heading">
        <h1>Our Team</h1>
      </div>

      <div className="yearSection">
        {['2024', '2023', '2022'].map((year) => (
          <YearSection key={year} year={year} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
