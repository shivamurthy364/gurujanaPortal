import React from 'react';

const TextInput = ({ label, name, value, onChange }) => {
  return (
    <div className="flex items-center mb-8">
      <label htmlFor={name} className="mr-2 text-base font-medium">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
    </div>
  );
};

export default TextInput;
