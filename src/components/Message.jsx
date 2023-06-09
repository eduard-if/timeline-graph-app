import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant} className='border-0 rounded opacity-50 shadow-sm'>
      {children}
    </Alert>
  );
};

export default Message;