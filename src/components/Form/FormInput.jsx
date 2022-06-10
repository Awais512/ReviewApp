import React from 'react';

const FormInput = ({ name, placeholder, label, type, ...rest }) => {
  return (
    <div className='flex flex-col-reverse'>
      <input
        id={name}
        name={name}
        type={type}
        className='bg-transparent rounded border-2 border-dark-subtle focus:bg-primary w-full text-lg outline-none focus:border-white text-white p-2 peer transition'
        placeholder={placeholder}
        {...rest}
      />
      <label
        className='font-semibold text-dark-subtle peer-focus:text-white transition self-start'
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
