import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyTypeSelector = () => {
  const [companyType, setCompanyType] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCompanyType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (companyType === 'private_limited') {
      navigate('/create-company');
    } else if (companyType === 'non_private_limited') {
      navigate('/notavailable');
    } else {
      alert('Please select a company type.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-6 py-20  mb-10 justifycenter">
        <div className="w-full max-w-sm">
        <label className="text-lg font-sans font-bold mb-10 gap-6 text-center ">
        Let’s begin our journey!
          </label>
          <div>
          <label className="text-lg font-sans font-medium mb-10 mt-4 gap-6 text-center">
          Select the type of company you wish to incorporate:
          </label>
          </div>
          <div className="flex flex-col font-sans gap-4 w-96  justify-self-end">
            <div className="bg-white border font-sans rounded-md shadow-sm py-4 px-6">
              <label htmlFor="private-limited">
                <input
                  type="radio"
                  id="private-limited"
                  name="companyType"
                  value="private_limited"
                  checked={companyType === 'private_limited'}
                  onChange={handleChange}
                />
                Private Limited Company
                <div> 
                  <ul>
                <span className="text-sm font-light ml-4">
                  <li>Often used by startups, easy going and requires only 2 persons to start the enterprise</li>
                </span>
                </ul>
                </div>
              </label>
            </div>
            <div className="bg-white border rounded-md shadow-sm py-4 px-6">
              <label htmlFor="non_private-limited">
                <input
                  type="radio"
                  id="non_private-limited"
                  name="companyType"
                  value="non_private_limited"
                  checked={companyType === 'non_private_limited'}
                  onChange={handleChange}
                />
               Other than Private Limited Company
                 <div>
                  <ul>
                <span className="text-sm font-light ml-4">
                  <li>Any specific type of entity you wish to start.</li>
                  <li className='text-sm text-bold'>Eg: Public Company, One Person Company (OPC), IFSC, etc</li>
                </span>
                </ul>
                </div>
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg w-full max-w-sm"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default CompanyTypeSelector;
