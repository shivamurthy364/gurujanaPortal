import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 

const Founders = () => {
    const [formType, setFormType] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setFormType(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (formType === 'individual') {
        navigate('/individual-form');
      } else if (formType === 'non-individual') {
        navigate('/non-individual-form');
      } else {
        alert('Please individual or non-individual');
      }
    };
  return (
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col items-center gap-6 py-20  justifycenter">
      <div className="w-full max-w-sm">
        <label className="text-lg font-sans font-bold mb-4 gap-6 mt-8 text-center">
        Tell us about the founders for the company
        </label>
        <div className="flex flex-col font-sans gap-4 w-96  justify-self-end">
          <div className="bg-white border font-sans rounded-md shadow-sm py-4 px-6 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ">
            <label htmlFor="individual">
                <input
                    type="radio"
                    id="individual"
                    name="individual"
                    value="individual"
                    checked={formType === 'individual'}
                    onChange={handleChange}
                />
              Individuals Only
              <div> 
              <ul>
                    <span className="text-sm font-light ml-4">
                        {/* <li>Often used by startups, easy going and requires only 2 persons to start the enterprise</li> */}
                    </span>
              </ul>
              </div>
            </label>
          </div>
          <div className="bg-white border rounded-md shadow-sm py-4 px-6">
            <label htmlFor="non-individual">
              <input
                type="radio"
                id="non-individual"
                name="non-individual"
                value="non-individual"
                checked={formType=== 'non-individual'}
                onChange={handleChange}
              />
             Non Individuals Only
               <div>
                <ul>
              <span className="text-sm font-light ml-4">
                {/* <li>Any specific type of entity you wish to start.</li>
                <li className='text-sm text-bold'>Eg: Public Company, One Person Company (OPC), IFSC, etc</li> */}
              </span>
              </ul>
              </div>
            </label>
          </div>
          <div className="bg-white border font-sans rounded-md shadow-sm py-4 px-6 has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200 ">
            <label htmlFor="individual">
                <input
                    type="radio"
                    id="individual"
                    name="individual"
                    value="individual"
                    checked={formType === 'individual'}
                    onChange={handleChange}
                />
              Individuals + Non Individuals
              <div> 
              <ul>
                    <span className="text-sm font-light ml-4">
                        {/* <li>Often used by startups, easy going and requires only 2 persons to start the enterprise</li> */}
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
}

export default Founders
