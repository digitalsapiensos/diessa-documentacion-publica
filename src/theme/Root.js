import React from 'react';
import SimpleAuth from '../components/SimpleAuth';

export default function Root({children}) {
  return (
    <SimpleAuth>
      {children}
    </SimpleAuth>
  );
}