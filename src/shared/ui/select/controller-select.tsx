import React from 'react'
import { ControllerSelectProps } from './model/types';
import { Controller } from 'react-hook-form';
import Select from './select';

const ControllerSelect: React.FC<ControllerSelectProps> = ({options, name, control, label, defaultValue, validation, error}) => {
    return (
        <Controller 
            name={name}
            control={control}
            rules={validation}
            defaultValue=""
            render={({field: {onChange, value}}) => 
                <Select 
                    error={error}
                    label={label}
                    options={options} 
                    selectedOption={value} 
                    onSelectOption={onChange}
                    defaultValue={defaultValue}
                />
            }
        />
    )
}

export default ControllerSelect;