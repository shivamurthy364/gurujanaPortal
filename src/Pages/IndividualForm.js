import React, { useState } from 'react';
import IndividualFormComp from '../components/IndividualFormComp';
import TextInput from '../components/TextInput';

const IndividualForm = () => {
  const [noDIN, setNoDIN] = useState(false); // Track DIN selection
  const [hasDIN, setHasDIN] = useState('');

  const handleDINChange = (e) => {
    setNoDIN(<IndividualFormComp/>);
  };
  const handleHasDIN = (e) =>{
    setHasDIN(<TextInput/>)
  };

  return (
    <form className="mb-20 pt-10">
      <div className="space-y-12">
        <div>
          <label htmlFor="checkDIN" className="text-sm font-medium">
            Is the individual having a Director Identification Number (DIN)?
          </label >
          <label className='text-sm font-medium ml-4 mr-4'> Yes</label>
          <input
            type="checkbox"
            onChange={handleHasDIN}
          />
          <label className='text-sm font-medium ml-2 mr-2'> No </label>
          <input
            type="checkbox" 
            onChange={handleDINChange} 
          />
        </div>

        {noDIN && ( 
          <>
           <div>
            <IndividualFormComp />
           </div>
          </>
        )}
        {hasDIN &&(
          <>
          <div>
             <label className='text-sm font-medium'> Please enter your DIN Number</label>
            <TextInput />
            <IndividualFormComp />
          </div>
         
          </>
        )}
      </div>
    </form>
  );
};

export default IndividualForm;
