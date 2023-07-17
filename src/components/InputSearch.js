import React from "react";
function InputSearch({ label, name, onChange, placeholder }) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-group-text"> 
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        onChange={(e) => onChange(e)}
        type="text"
        placeholder={placeholder}
        className="input-group-text"
      />
    </div>
  );
}

export default InputSearch;
