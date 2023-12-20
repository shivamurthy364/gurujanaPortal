import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Nationality from './Nationality'
import { useState , useRef} from 'react'
import StayDurationForm from './StayDurationForm';
import NationalityVerification from './NationalityVerification';

export default function IndividualFormComp() {
    const [selectedOccupation, setSelectedOccupation] = useState('');
    const [open, setOpen] = useState(true)
    const [showOtherInput, setShowOtherInput] = useState(false);
    const cancelButtonRef = useRef(null)
    
  return (
    <form className='mb-20 pt-2'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Fill this form to proceed further</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                      />
                    </div>
              </div>

            <div className='sm:col-span-2'>
                  <label htmlFor='middle-name' className='block text-sm font-medium leading-6 text-gray-900'>
                    Middle Name
                  </label>
                    <div className='mt-2'>
                      <input type='text' name='middle-name' id='middle-name' autoComplete='middle-name' 
                      className='block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'></input>
                    </div>
            </div>

            <div className="sm:col-span-2">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
              </div>
            </div>
 
            {/* Father's name details */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Father's First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fathers-first-name"
                  id="fathers-first-name"
                  autoComplete="father-name"
                  className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='middle-name' className='block text-sm font-medium leading-6 text-gray-900'>
               Father's Middle Name
              </label>
              <div className='mt-2'>
                <input type='text' name='middle-name' id='middle-name' autoComplete='middle-name' 
                className='block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300'></input>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
               Father's Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Gender */}
              <div className='sm:col-span-6 sm:col-start-1'>
                <h2> Gender</h2>
                <input type='radio' name='gender' value="male"/> Male
                <input type='radio' name='gender' value="Female"/> Female
              </div>

              {/* Date of birth */}
              <div className='sm:col-span-6 sm:col-start-1'>
                <label htmlFor='dob'> Date of Birth</label>
                <input 
                type='date'
                placeholder='Enter BirthDate'
                name='birthdate' 
                className="block rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div> */}
            
            {/* Nationality */}
            {/* <div className='col-span-full'>
                 <Nationality />
            </div> */}
            
            {/* Place of birth */}
            <div className='col-span-full'>
                <label htmlFor='place-of-birth'> Place of birth</label>
                <input
                type='text' 
                placeholder='City / District'
                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                 />
            </div>
            {/* Occupation */}
            <div className='col-span-full'>
                <label> Select occupation type</label>
                 <select id='occupation' name='occupation'  className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                    <option value='' disabled >
                        
                        </option>
                        <option value="Business" > Business</option>
                        <option value='Professional'> Professional </option>
                        <option value='Government'> Government</option>
                        <option value='Employment'> Employment</option>
                        <option value='Private Employment'> Private Employment</option>
                        <option value='Housewife' > Housewife</option>
                        <option value='Student'> Student </option>
                        <option value='Other'> Other </option>
                 </select>
            </div>
            

 {/* Education Qualification */}
            <div className='col-span-full'>
                <label > Education Qualification</label>
                <select id='education' name='education' className='block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                    <option value='' disabled> </option>
                    <option value='PrimaryEducation'> Primary Education</option>
                     Bachelor's degree, Masters degree, doctorate or higher, professional, diploma, others
                    <option value=' Secondary Education'>  Secondary Education</option>
                    <option value='Vocational Qualification'> Vocational Qualification</option>
                    <option value='Bachelors degree'> Bachelor's degree</option>
                    <option value='Masters degree'> Masters degree</option>
                    <option value='doctorate or higher'> doctorate or higher</option>
                    <option value='professional'> professional</option>
                    <option value='diploma'> Diploma</option>
                    <option value='other'> Other</option>
                    
                    </select>
            </div>
            
            <h2 className="text-base font-semibold leading-7 text-gray-900 col-span-full">Permanent Address</h2>
            {/* <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="line1" className="block text-sm font-medium leading-6 text-gray-900">
                Line 1
              </label>
              <div className="mt-2">
                <input type="text" name="line1" id="line1" autoComplete="line-1"
                  className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="line2" className="block text-sm font-medium leading-6 text-gray-900">
                Line 2
              </label>
              <div className="mt-2">
                <input
                  type="text" name="line2" id="line2" autoComplete="line-2"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
               Country
              </label>
              <div className="mt-2">
                <input
                  type="text" name="country" id="country" autoComplete="country"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input type="text" name="city" id="city" autoComplete="city"
                  className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                District
              </label>
              <div className="mt-2">
                <input
                  type="text" name="district" id="district" autoComplete="district"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Pin Code / postal code
              </label>
              <div className="mt-2">
                <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                State
              </label>
              <div className="mt-2">
                <input type="text" name="state" id="state" autoComplete="state"
                  className="block w-full rounded-md border-0 py-1.5  pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone (With STD/ISD Code)
              </label>
              <div className="mt-2">
                <input type="text" name="phone" id="phone" autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
               Email ID
              </label>
              <div className="mt-2">
                <input
                  type="email" name="email" id="email" autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        {/* getting duration of stay of the user */}
        <div>
        <StayDurationForm />
        </div>
        <div> <NationalityVerification /></div>
        <a href="/modal" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
            <div class="flex items-center space-x-3">
              <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"> Addd</svg>
              <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold text-center items-center">Add Individual</h3>
            </div>
            <p class="text-slate-500 group-hover:text-white text-sm">Click here to add one more individual</p>
          </a>
        </div>
        

        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We'll always let you know about important changes, but you pick what else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
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
                    <label htmlFor="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Candidates
                    </label>
                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="offers"
                      name="offers"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div> */}
      </div>
      

      <div className="mt-6 flex items-center justify-end gap-x-6">
      <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
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

         >
        Continue
        </button>
      </div>
    </form>
  )
}
