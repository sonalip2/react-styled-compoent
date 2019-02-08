import React from 'react';
import Button from '../../elements/Button'

const BasicButton = ({ children, className, ...props }) => (
    <Button {...props} >{children}</Button>
);

export default BasicButton;