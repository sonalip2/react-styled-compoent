import React from 'react';
import { Thumb, ThumbInner } from '../../elements/FileUpload';

const BasicFileUpload = ({ key, children }) => (
    <Thumb key={key}>
        <ThumbInner>
            {children}
        </ThumbInner>
    </Thumb>
);

export default BasicFileUpload;
