import React from 'react'
import { ControllerSelectProps } from './model/types';
import { Controller } from 'react-hook-form';
import Select from './select';

const ControllerSelect: React.FC<ControllerSelectProps> = ({options, name, control, label}) => {
    return (
        <Controller 
            name={name}
            control={control}
            defaultValue=""
            render={({field: {onChange, value}}) => 
                <Select 
                    label={label}
                    options={options} 
                    selectedOption={value} 
                    onSelectOption={onChange}
                />
            }
        />
    )
}

export default ControllerSelect;