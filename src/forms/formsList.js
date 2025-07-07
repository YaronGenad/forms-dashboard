// src/forms/formsList.js

const formsList = [
  {
    id: 'form-1',
    name: 'ביטול עסקה סניפי רשת',
    formUrl: 'https://docs.google.com/forms/d/e/FORM_ID/formResponse',
    fields: [
      { label: 'מספר סניף', name: 'entry.123456789', type: 'text' },
      { label: 'מספר עסקה', name: 'entry.987654321', type: 'text' },
      { label: 'סיבת הביטול', name: 'entry.555555555', type: 'text' },
    ],
  },
  {
    id: 'form-2',
    name: 'החלפת מזודה',
    formUrl: 'https://docs.google.com/forms/d/e/FORM_ID/formResponse',
    fields: [
      { label: 'שם ספק', name: 'entry.444444444', type: 'text' },
      { label: 'מספר מזודה', name: 'entry.333333333', type: 'text' },
      { label: 'סיבת ההחלפה', name: 'entry.222222222', type: 'text' },
    ],
  },
];

export default formsList;
