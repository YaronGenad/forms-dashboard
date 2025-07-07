// src/components/FormSelector.js

import React from 'react';

const FormSelector = ({ forms, onSelect }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">בחר טופס למילוי</h2>
      {forms.map((form) => (
        <button
          key={form.id}
          className="block w-full bg-blue-500 text-white py-2 mb-2 rounded"
          onClick={() => onSelect(form)}
        >
          {form.name}
        </button>
      ))}
    </div>
  );
};

export default FormSelector;
