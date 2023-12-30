import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DateRangePicker.css'; // Özelleştirilmiş stilleri burada ekleyeceğiz

const DateRangePicker = () => {
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [viewType, setViewType] = useState('date'); // Varsayılan görünüm "date"

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };

  const handleViewTypeChange = (event) => {
    setViewType(event.target.value);
    setStartYear('');
    setEndYear('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Start Year:', startYear);
    console.log('End Year:', endYear);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>View Type:</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="yearRadio"
              value="year"
              checked={viewType === 'year'}
              onChange={handleViewTypeChange}
            />
            <label className="form-check-label" htmlFor="yearRadio">
              Year
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="dateRadio"
              value="date"
              checked={viewType === 'date'}
              onChange={handleViewTypeChange}
            />
            <label className="form-check-label" htmlFor="dateRadio">
              Date
            </label>
          </div>
        </div>
        {viewType === 'date' && (
          <>
            <div className="form-group">
              <label>Start Time:</label>
              <input
                type="date"
                className="form-control"
                value={startYear}
                onChange={handleStartYearChange}
                placeholder="YYYY"
                max={endYear || undefined}
              />
            </div>
            <div className="form-group">
              <label>End Time:</label>
              <input
                type="date"
                className="form-control"
                value={endYear}
                onChange={handleEndYearChange}
                placeholder="YYYY"
                min={startYear || undefined}
              />
            </div>
          </>
        )}
        {viewType === 'year' && (
          <div className="form-group">
            <label>Select Start Year:</label>
            <input
              type="number"
              className="form-control"
              value={startYear}
              onChange={handleStartYearChange}
              placeholder="YYYY"
            />
            <label className="mt-3">Select End Year:</label>
            <input
              type="number"
              className="form-control"
              value={endYear}
              onChange={handleEndYearChange}
              placeholder="YYYY"
              min={startYear || undefined}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DateRangePicker;
