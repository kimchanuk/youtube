import React from 'react';
import { onUserStateChange } from '../api/firebase';

export default function CommentCard({ data }) {
  const { id, text } = data;

  return (
    <div className='flex justify-between items-center my-4'>
      <li className='ml-4'>{text}</li>

      <li className='mr-4'>
        <div>
          <button className='mr-2'>삭제</button>
          <button>수정</button>
        </div>

        <div>
          <span className='mr-4 text-gray-400 text-sm'>
            {new Date().toLocaleString()}
          </span>
        </div>
      </li>
    </div>
  );
}
