import { useEffect } from 'react';
import User from './User';
import { onUserStateChange } from '../api/firebase';

export default function Replay({
  inputValue,
  setInputValue,
  setComment,
  comment,
  onnAdd,
}) {
  const onSubmitHandle = e => {
    e.preventDefault();
    const newData = {
      img: User.photoURL,
      id: Math.floor(Math.random() * 1000000),
      text: inputValue,
      dete: new Date().toLocaleString(),
    };
    onnAdd(newData);
    setInputValue('');
  };

  const inputValueHandle = e => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <form className='flex flex-col' onSubmit={onSubmitHandle}>
      <input
        placeholder='comment..'
        type='text'
        value={inputValue}
        onChange={inputValueHandle}
        className='outline-none border bg-zinc-900
        border-y-0 border-x-0
        border-b border-b-zinc-100 m-4'
      />
      <div className='flex justify-end mt-1'>
        <button className='mr-4 outline-none'>cencle</button>
        <button className='mr-4'>enter</button>
      </div>
    </form>
  );
}
