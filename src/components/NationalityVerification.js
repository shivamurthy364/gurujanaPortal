import React, { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';

const NationalityVerification = () => {
  const [nationality, setNationality] = useState('');
  const [showPANField, setShowPANField] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [showPassportField, setPassportfield] =useState (false);

  // Handle nationality selection
  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
    setShowPANField(event.target.value === 'india');
    setPassportfield(event.target.value ==='other');
  };
  const handleConsentToggle = () => setShowConsent(!showConsent);

  return (
    <div className="verification-container mt-3">
      <h2 className="text-base font-semibold ">Select your nationality:</h2>
      <select
        name="nationality"
        id="nationality"
        value={nationality}
        onChange={handleNationalityChange}
        className='ring-1 ring-inset mb-4 mt-3'
      >
        <option value="" >Please select...</option>
        <option value="india">India</option>
        <option value="other">Other</option>
      </select>

      {showPANField && (
       <div> 
        <div className="mt-4">
          <p className="text-sm font-medium">
            PAN verification is required for Indian citizens.
          </p>
          <input
            type="text"
            placeholder="Enter your PAN number"
            name="panNumber"
            required={showPANField}
            className="block rounded-md border-0 py-1.5 pl-2 mb text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
        <div className='col-span-full mt-6'>
            <label htmlFor='uploadidproof' className='text-sm font-medium'> Identity Proof </label>
            <select id="idproof" name='idproof' className='ring-1 ring-inset mb-4'>
                <option value='' disabled></option>
                <option value='adhar'> Adhar Number</option>
                <option value='voter'> Voter ID Number</option>
                <option value='dlnumber'>DL Number</option>
                <option value='passport'>Passport Number</option>
            </select>
        </div>
        <input type='text'
         placeholder='Enter your id proof number here'
         className="block rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         />
        </div>
        <div className="col-span-full mt-4">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload your self attested identity proof document here 
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                             >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600"> PDF up to 1MB</p>
                </div>
            </div>
        </div>
        <div className='col-span-full mt-4 rounded-md border-0 shadow-sm '>
            <label htmlFor='residentialproof' className='text-sm font-medium'> Address Proof </label>
            <select id="residentialproof" name='residentialproof' className='ring-1 ring-inset'>
                <option value='' disabled></option>
                <option value='mobile_bill'> Mobile Bill</option>
                <option value='telephone_bill'> Telephone Bill</option>
                <option value='electricity_bill'>Electricity Bill</option>
                <option value='bank_statement'>Bank Statement</option>
            </select>
        </div>
        <div className="col-span-full mt-5">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload your self attested residential proof document here 
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                             >
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600"> PDF up to 1MB</p>
                </div>
            </div>
        </div>

    </div>
      )}

      {showPassportField &&(
        <div><div className='mt-4'>
            <p className='text-sm font-medium'>
                Passport verification is required for Non-Indian citizens.
            </p>
            <input type='text' placeholder='Enter your passport number' name='pasNumber' required={showPassportField}             className="block rounded-md border-0 py-1.5 pl-2 mb text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-3"/>
           </div> 

         <div>
         <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload your self attested identity proof document here 
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600"> PDF up to 1MB</p>
                </div>
              </div>
            </div >
         </div> 
        </div>  

      )}
      {showPANField && (
        <div className="mt-4 mb-10">
          <label htmlFor="consentCheckbox" className="flex items-center">
            <input
              type="checkbox"
              id="consentCheckbox"
              onChange={handleConsentToggle}
            />
            <span className="ml-2 text-sm">
              I agree to the PAN verification process and 
              <button type="button" onClick={handleConsentToggle}>
                terms of use
              </button>
              .
            </span>
          </label>
        </div>
      )}

      {/* {showConsent && (
        <div className="modal fixed top-0 left-0 w-full h-full bg-gray-300 opacity-75 flex justify-center items-center">
          <div className="modal-content bg-white px-4 py-8 rounded-md shadow-md">
            <h3 className="text-base font-semibold mb-4">
              PAN Verification Disclaimer
            </h3>
            <p className="text-sm">
              By clicking "Verify PAN", you are authorizing us to share your PAN
              number with a secure third-party verification provider for the
              sole purpose of confirming your identity. Your PAN information
              will be encrypted and only used for this specific purpose. We
              take data security seriously and comply with all relevant
              privacy regulations. Please refer to our full privacy policy for
              more details.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="mr-4 text-sm font-medium text-gray-500 hover:underline"
                onClick={handleConsentToggle}
              >
                Cancel
              </button>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:underline">
                Verify PAN
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default NationalityVerification;
