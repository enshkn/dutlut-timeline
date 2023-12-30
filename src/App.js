// App.js

import React, { useState } from 'react';
import SearchBar from './components/timeline/SearchBar';
import LocationFilter from './components/timeline/LocationFilter';
import DateRangePicker from './components/timeline/DateRangePicker';
import Selection from './components/timeline/Selection';
import Timeline from './components/timeline/Timeline';

const App = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div>
      {/* Arama çubuğu */}
      <SearchBar />

      {/* Filtre tuşu */}
      <div className="text-center my-3">
        <button className="btn btn-primary" onClick={toggleFilters}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Filtreler */}
      {showFilters && (
        <div className="d-flex justify-content-center mt-3">
          <DateRangePicker />
          <DateRangePicker />
        </div>
      )}

      {/* Timeline */}
      <div className="text-center my-5">
        <Timeline />
      </div>

      {/* Selection Button */}
      <div className="fixed-bottom text-center mb-3">
        <Selection />
      </div>
    </div>
  );
};

export default App;
