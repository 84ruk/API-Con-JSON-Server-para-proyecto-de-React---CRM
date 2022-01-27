import React from 'react';

export const Alerta = ({children}) => {
  return <div>
      <div className='text-center bg-red-600 font-bold p-3 my-4 text-white uppercase'>
                            {children}
                        </div>
  </div>;
};
