import React from 'react';

const FormInput = ({ name, placeholder, label, type, ...rest }) => {
  return (
    <div className='flex flex-col-reverse'>
      <input
        id={name}
        name={name}
        type={type}
        className='bg-transparent rounded border-2 dark:border-dark-subtle border-light-subtle  w-full text-lg outline-none dark:focus:border-white focus:border-primary dark:text-white p-2 peer transition'
        placeholder={placeholder}
        {...rest}
      />
      <label
        className='font-semibold dark:text-dark-subtle dark:peer-focus:text-white text-light-subtle transition self-start peer-focus:text-primary'
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
