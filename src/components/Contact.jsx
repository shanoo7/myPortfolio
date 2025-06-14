import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const steps = [
  {
    id: 'step1',
    title: "What's your name?",
    type: 'text',
    placeholder: 'Enter your name',
    validation: { required: 'Name is required' },
  },
  {
    id: 'step2',
    title: "What's your email?",
    type: 'email',
    placeholder: 'Enter your email',
    validation: {
      required: 'Email is required',
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Enter a valid email',
      },
    },
  },
  {
    id: 'step3',
    title: 'Enter your phone number',
    type: 'text',
    placeholder: 'Enter Phone Number',
    maxLength: 11,
    validation: {
      required: 'Phone is required',
      pattern: {
        value: /^[0-9]{10,11}$/,
        message: 'Enter a valid phone number',
      },
    },
  },
  {
    id: 'step4',
    title: 'Your message',
    type: 'textarea',
    placeholder: 'Type your message here...',
    validation: {
      required: 'Message is required',
      maxLength: {
        value: 1000,
        message: 'Max 1000 characters',
      },
    },
  },
];

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const messageText = watch('step4') || '';

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/ayvvzpkb", data)
      // console.log('Submitted data:', data);
      toast.success('Submitted data')
      reset();
    } catch (error) {
      // console.log(error.message)
      toast.error("This is an error!");
    }
  };

  const handleNext = async () => {
    const currentField = steps[currentStep].id;
    const isValid = await trigger(currentField);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div name="Contact" className="min-h-screen  p-4 flex flex-col items-center pb-8">
      <div className="w-full max-w-6xl mt-8">
        <h2 data-aos="zoom-out" className="text-4xl text-center font-bold mb-2">Let's Connect</h2>
        <p data-aos="zoom-out" className="text-gray-400 mb-10 text-center">Choose your preferred way to reach out</p>


        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left Contact Info */}
          <div className="bg-gray-800 p-8 rounded-md shadow-xl w-full md:w-1/2">
            <h2 data-aos="zoom-out" className="text-2xl font-bold mb-8">Contact Information</h2>
            <div data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" className="space-y-8 text-sm">
              {[
                {
                  iconBg: 'bg-blue-900',
                  iconColor: 'text-blue-400',
                  label: 'Email',
                  value: 'shanoo.kumar11@gmail.com',
                  svgPath:
                    'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                },
                {
                  iconBg: 'bg-green-900',
                  iconColor: 'text-green-400',
                  label: 'Phone',
                  value: '+919853914057',
                  svgPath:
                    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                },
                {
                  iconBg: 'bg-red-900',
                  iconColor: 'text-red-400',
                  label: 'Location',
                  value: 'Delhi',
                  svgPath:
                    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                },

              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className={`${item.iconBg} p-4 rounded-xl transform transition-transform duration-300 group-hover:translate-y-2`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.svgPath} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 p-8 rounded-md shadow-xl w-full md:w-1/2"
          >
            <h2 data-aos="zoom-out" className="text-2xl font-bold mb-6">{steps[currentStep].title}</h2>

            {steps.map((step, index) => (
              <div key={step.id} className={currentStep === index ? 'block' : 'hidden'}>
                {step.type === 'textarea' ? (
                  <>
                    <textarea
                      {...register(step.id, step.validation)}
                      placeholder={step.placeholder}
                      rows="4"
                      className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#03a4ed] text-white"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Characters: {messageText.length}/1000
                    </p>
                  </>
                ) : (
                  <input
                    type={step.type}
                    {...register(step.id, step.validation)}
                    placeholder={step.placeholder}
                    maxLength={step.maxLength}
                    className="w-full p-4 bg-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#03a4ed] text-white"
                  />
                )}
                {errors[step.id] && (
                  <p className="text-red-500 text-sm mt-2">{errors[step.id].message}</p>
                )}
              </div>
            ))}

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 bg-[#ff695f] hover:bg-[#ff6a5fd3] rounded-xl transition duration-300"
                >
                  Back
                </button>
              )}
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-6 py-3 bg-[#03a4ed] hover:bg-[#03a3edbc] rounded-xl transition duration-300"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl transition duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Submit
                </button>
              )}
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${currentStep === index ? 'w-8 bg-blue-500' : 'w-2 bg-gray-600'
                    }`}
                ></div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm

