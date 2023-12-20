import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PhotoIcon} from '@heroicons/react/24/solid'

const CreateCompany = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
     <CreateCompany />
    navigate('/founders');
    };
  return (
    <div className='sm:mx-auto sm:w-full sm:max-w-sm mb-20 pt-10'>
     <div className="border-b border-gray-900/10 pb-12 mb-5">
      <h1 className='flex text-lg text-center font-bold '> Deciding the Company Name and Objects</h1>
      </div>
       {/* creating company form begins from here */}
       <form className="space-y-4" action="/" method="POST">
              <div>
                <label htmlFor="company_name" className="text-sm font-medium leading-4 text-gray-900 mb-10">
                 Company Name (i)
                </label>
                <h5> This is your company’s legal name registered with the government. Please propose any 2 names for the company.</h5>
                <div className="mt-2">
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="company_name"
                    name="company_name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="nic_code" className="block text-sm font-medium leading-6 text-gray-900">
                     National Industrial Classification (NIC) Code (i)
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="nic_code"
                    name="nic_code"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                     Description of the nic code
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                    {/* for i , content is pending */}
                     Brief description about the company (i)  
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 pl-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                   {/* trademark checkbox starts */}
                    
          <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="trademark" className="font-medium text-gray-900">
                    <p className="text-gray-500">Do you have a Trademark / Copyright registered with the above name ?</p>

                    </label>
                    {/* <p className="text-gray-500">Please select</p> */}
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
                   {/* trademark checkbox endpoint  */}
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload your file here
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
            </form>
       {/* creating company form end here */}
       <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        <button
         type="submit"
         className="rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white  hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         onClick={handleSignIn}
         >
                 Continue
        </button>
      </div>
    </div>
  )
}

export default CreateCompany
