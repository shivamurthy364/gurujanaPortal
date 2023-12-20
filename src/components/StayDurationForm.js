import React, { useState, useEffect } from "react";

const StayDurationForm = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [showPreviousAddress, setShowPreviousAddress] = useState(false);

  const getTotalDurationMonths = () => years * 12 + months;

  useEffect(() => {
    setShowPreviousAddress(getTotalDurationMonths() < 12);
  }, [years, months]);

  const handleYearsChange = (e) => setYears(parseInt(e.target.value));
  const handleMonthsChange = (e) => setMonths(parseInt(e.target.value));

  return (
    <div className="mb-4">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Duration of Stay at present address
      </h2>
      <div className="flex flex-row gap-2 mt-4">
        <input
          type="number"
          min={0}
          value={years}
          onChange={handleYearsChange}
          placeholder="Years"
          className="rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
        <input
          type="number"
          min={0}
          max={11}
          value={months}
          onChange={handleMonthsChange}
          placeholder="Months"
          className="rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
        />
      </div>
      {showPreviousAddress && (
        <div className="mt-4">
          <label htmlFor="previousAddress" className="block text-sm font-medium text-gray-700">
            Previous Address:
          </label>
          <textarea
            id="previousAddress"
            name="previousAddress"
            className="rounded-md border border-gray-300 block w-full px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
      )}
    </div>
  );
};

export default StayDurationForm;
