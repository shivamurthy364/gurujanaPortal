import React from 'react'
import IndividualForm from '../Pages/IndividualForm'

const NonIndividualForm = () => {
  return (
    <div>
            <div className='col-span-full'>
                <label> Select Category</label>
                 <select id='Category' name='Category'  className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                    <option value='' disabled >
                        
                        </option>
                        <option value="company" > Company</option>
                        <option value='foreign-company'> Foreign Company</option>
                        <option value='outside-india'> Incorporated Outside India</option>
                        <option value='body-corporate'> Body Corporate</option>
                        <option value='others'> Others </option>
                 </select>
            </div>
            <div className='col-span-full'>
                <label> Registration Number</label>
                <div className='mt-2'>
                    <input type='text' name='reg-num' id='reg-num'  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className='col-span-full'>
                <label> Name of the body corporate</label>
                <div className='mt-2'>
                    <input type='text' name='body-corp' id='body-corp'  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div className='col-span-full'>
                <label>email ID of the company</label>
                <div className='mt-2'>
                    <input type='email' name='company-email' id='company-email'  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            {/* Signatory - If user selects this individual form should appear */}
            <div className='col-span-full mt-4'>
                <label>Details of authorised signatory</label>
                <IndividualForm />
                {/* <div className='mt-2'>
                    <input type='text' name='signatory' id='signatory'  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div> */}
                
            </div>
    
    <div>
     
    </div>
    </div>
  );
}

export default NonIndividualForm;
