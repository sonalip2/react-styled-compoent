import React from 'react';
import Modal, { ModalHeader, ModalBody, ModalContent, ModalFooter } from '../../elements/Modal';

const BasicModal = ({ title, children }) => (
    <Modal>
        <ModalContent>
            <ModalHeader><h4>{title}</h4></ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter></ModalFooter>
        </ModalContent>
    </Modal>
);

export default BasicModal;
