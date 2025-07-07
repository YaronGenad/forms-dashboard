// src/App.js

import React, { useState } from 'react';
import FormSelector from './components/FormSelector';
import CustomForm from './components/CustomForm';
import SuccessMessage from './components/SuccessMessage';
import formsList from './forms/formsList';

function App() {
  const [selectedForm, setSelectedForm] = useState(null);
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setSelectedForm(null);
    setSuccess(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      {!selectedForm && <FormSelector forms={formsList} onSelect={setSelectedForm} />}
      {selectedForm && !success && <CustomForm form={selectedForm} onSuccess={() => setSuccess(true)} />}
      {success && <SuccessMessage onReset={reset} />}
    </div>
  );
}

export default App;

