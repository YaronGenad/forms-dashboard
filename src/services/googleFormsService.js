// src/services/googleFormsService.js

export const submitToGoogleForm = async (formUrl, formData) => {
  const urlEncoded = new URLSearchParams(formData).toString();
  try {
    await fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncoded,
    });
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};
