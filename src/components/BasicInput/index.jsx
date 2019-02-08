import React from 'react';
import Div from '../../elements/Div';
import Input from '../../elements/Input';
import Label from '../../elements/Label';

const BasicInput = ({
    label,
    className,
    ...props,
}) => (
        <Div input>
            <Label>{label}</Label>
            <Input {...props} />
        </Div>
    );

export default BasicInput;
