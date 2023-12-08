import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineEmail } from 'react-icons/md';

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const Subscribe: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Data will contain the form values
  };

  return (
    <div className="bg-slate-200 py-8">
      <h2 className="text-3xl font-bold text-center py-8">Subscribe to Our Newsletter</h2>
      <p className="text-center my-2">
        Don't want to miss news, updates, notes, and offers on our products? Subscribe to our
        mailing list.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center sm:flex-row bg-orange-500 py-4 my-4 rounded">
        <div className="relative">
          <input
            placeholder="Your Name"
            {...register('name', { required: true, minLength: 4 })}
            className="rounded m-2 p-2 bg-white"
          />
          {errors.name && (
            <span className="absolute bottom-0 left-0 transform -translate-y-full bg-red-500 text-white px-2 py-1 rounded">
              {errors.name.type === 'required' && 'This field is required'}
              {errors.name.type === 'minLength' && 'Your name must be at least 4 characters'}
            </span>
          )}
        </div>

        <div className="relative">
          <input
            placeholder="Your Mobile Phone"
            {...register('phone', {
              required: true,
              minLength: 10,
              maxLength: 10,
              pattern: /^\d+$/, // Only digits
            })}
            className="rounded m-2 p-2 bg-white"
          />
          {errors.phone && (
            <span className="absolute bottom-0 left-0 transform -translate-y-full bg-red-500 text-white px-2 py-1 rounded">
              {errors.phone.type === 'required' && 'This field is required'}
              {errors.phone.type === 'minLength' && 'Your phone must be at least 10 characters'}
              {errors.phone.type === 'maxLength' && 'Your phone must be at most 10 characters'}
              {errors.phone.type === 'pattern' && 'Phone number can only contain digits'}
            </span>
          )}
        </div>

        <div className="relative">
          <input
            placeholder="Your Email Address"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Email pattern
            })}
            className="rounded m-2 p-2 bg-white"
          />
          {errors.email && (
            <span className="absolute bottom-0 left-0 transform -translate-y-full bg-red-500 text-white px-2 py-1 rounded">
              {errors.email.type === 'required' && 'This field is required'}
              {errors.email.type === 'pattern' && 'Invalid email address'}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="rounded-sm bg-gray-900 text-white m-2 p-2 flex items-center"
        >
          <MdOutlineEmail className="mr-2"/> Subscribe to email list
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
