import React from 'react';
import './Form-input.style.scss';

const FormInput = ({ handelChange, label, value, ...otherInputProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={ handelChange }
                { ...otherInputProps }
            />
            {
                label ?
                    <label className={ `form-input-label ${value.length ? 'shrink' : ''}` }>
                        { label }
                    </label>
                    : null
            }
        </div>
    );
};

export default FormInput;