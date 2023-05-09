import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

export default function Contack() {
  const [modal, setModal] = useState(false);

  const ModalOpen = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      <div className='text-3xl text-center mt-36 flex justify-center items-center'>
        <img
          src={process.env.PUBLIC_URL + 'boys.png'}
          className='rounded-full'
        />
        <div className='flex flex-col items-center'>
          <span className='font-extrabold'>김찬욱이고요</span>
          <span>효도는 내년에 </span>
          <span className='text-7xl cursor-pointer'>
            <button className='hover:scale-110 mt-4' onClick={ModalOpen}>
              <AiOutlineMail />
            </button>
          </span>
        </div>
      </div>
      {modal ? null : <Modal />}
    </>
  );
}

function Modal() {
  return (
    <div className='text-3xl font-extrabold text-center mt-10'>
      hellow09b@gmail.com
    </div>
  );
}
