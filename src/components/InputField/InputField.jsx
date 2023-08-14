import React, { useState } from 'react';

const InputField = React.forwardRef((props, ref) => {
    const {
        name,
        value,
        onChange,
        label,
        onFocus: handleFocus,
        onBlur: handleBlur
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
        if (handleFocus) handleFocus();
    };

    const handleInputBlur = () => {
        setIsFocused(false);
        if (handleBlur) handleBlur();
    };

    return (
        <div className='formContainer'>
            <input
                ref={ref}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={(value || isFocused) ? 'filled' : ''}
            />
            <label
                className={(value || isFocused) ? 'filled' : ''}
                htmlFor={name}
            >
                {label}
            </label>
        </div>
    );
});

export default InputField;
