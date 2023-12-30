// SelectionButton.js

import React, { useState } from 'react';
import './SelectionButton.css'; // Stilleri burada ekleyeceğiz
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını ekliyoruz

const SelectionButton = () => {
  const [selectedOption, setSelectedOption] = useState('All'); // Başlangıçta seçilen seçenek 'All'

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <button className="btn btn-primary btn-block">
            <div className="row">
              <div
                className={`col text-center option ${selectedOption === 'All' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('All')}
              >
                All
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Moment' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Moment')}
              >
                Moment
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Day' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Day')}
              >
                Day
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Month' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Month')}
              >
                Month
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Season' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Season')}
              >
                Season
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Year' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Year')}
              >
                Year
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Decade' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Decade')}
              >
                Decade
              </div>
              <div
                className={`col text-center option ${selectedOption === 'Decade+Season' ? 'selected' : ''}`}
                onClick={() => setSelectedOption('Decade+Season')}
              >
                Decade+Season
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionButton;
