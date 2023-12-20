import React, { useState } from 'react';

const Nationality = () => {
  const [nationality, setNationality] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleRadioChange = (event) => {
    setNationality(event.target.value);
    setSelectedCountry('');
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor='nationality'>Nationality</label>
        <div>
          <input
            type='radio'
            id='indian'
            name='nationality'
            value='indian'
            checked={nationality === 'indian'}
            onChange={handleRadioChange}
          />
          <label htmlFor='indian'>Indian</label>
        </div>
        <div>
          <input
            type='radio'
            id='other'
            name='nationality'
            value='other'
            checked={nationality === 'other'}
            onChange={handleRadioChange}
          />
          <label htmlFor='other'>Other</label>
        </div>
      </div>

      {nationality === 'other' && (
        <div>
          <label htmlFor='country'>Select Country</label>
          <select
            id='country'
            name='country'
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value='' disabled>
              
            </option>
            <option value='usa'>USA</option>
            <option value='uk'>UK</option>
            <option value='Uganda'>Uganda</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Nationality;
