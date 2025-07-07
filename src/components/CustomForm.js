// src/components/CustomForm.js

import React, { useState } from 'react';
import { submitToGoogleForm } from '../services/googleFormsService';

const CustomForm = ({ form, onSuccess }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitToGoogleForm(form.formUrl, formData);
    if (success) onSuccess();
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl mb-4">{form.name}</h2>
      {form.fields.map((field, idx) => (
        <div key={idx} className="mb-4">
          <label className="block mb-2">{field.label}</label>
          <input
            type={field.type}
            className="w-full border p-2 rounded"
            onChange={(e) => handleChange(e, field.name)}
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
        שלח
      </button>
    </form>
  );
};

export default CustomForm;
