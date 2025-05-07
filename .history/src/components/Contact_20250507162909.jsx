import React, { useState } from 'react';

const steps = [
  {
    id: 'step1',
    title: "What's your name?",
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    id: 'step2',
    title: "What's your email?",
    type: 'email',
    placeholder: 'Enter your email (example@gmail.com)',
  },
  {
    id: 'step3',
    title: 'Enter your phone number',
    type: 'text',
    placeholder: 'Enter Phone Number',
    maxLength: 11,
  },
  {
    id: 'step4',
    title: 'Your message',
    type: 'textarea',
    placeholder: 'Type your message here...',
  },
];

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'step4') setCharCount(value.length);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
    console.log('Form data:', formData);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full">
      <h2 className="text-2xl font-bold mb-6">{steps[currentStep].title}</h2>

      {steps.map((step, index) => (
        <div key={step.id} className={currentStep === index ? 'block' : 'hidden'}>
          {step.type === 'textarea' ? (
            <>
              <textarea
                name={step.id}
                placeholder={step.placeholder}
                rows="4"
                className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                value={formData[step.id] || ''}
                onChange={handleChange}
              ></textarea>
              <p className="mt-2 text-sm text-gray-500">
                Characters: <span>{charCount}</span>/1000
              </p>
            </>
          ) : (
            <input
              type={step.type}
              name={step.id}
              placeholder={step.placeholder}
              maxLength={step.maxLength}
              className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              value={formData[step.id] || ''}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <div className="flex justify-between mt-8">
        {currentStep > 0 && (
          <button onClick={handleBack} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl transition duration-300">
            Back
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={handleNext} className="ml-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition duration-300">
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="ml-auto px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl transition duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Submit
          </button>
        )}
      </div>

      {/* Step indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentStep === index ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
