import React from 'react'


const Input = ({ type, placeholder, name }) => (
  <div className="w-full lg:max-w-lg">
    <div className="bg-slate-800 rounded shadow px-4 mb-7">
      <input
        type={type}
        className="w-full h-16 border-none input bg-transparent text-gray-300 focus:outline-none"
        placeholder={placeholder}
        name={name}
      />
    </div>
  </div>
);
export default Input