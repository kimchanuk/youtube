import React, { useContext, useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { BsPersonPlus } from 'react-icons/bs';
import { LoginContext } from '../context/LoginContext';
import { AiOutlineBell } from 'react-icons/ai';

import User from './User';
import { login, logout, onUserStateChange } from '../api/firebase';

export default function SearchHeader() {
  const { Logins, loginsHandle } = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  useEffect(() => {
    onUserStateChange(user => {
      setUser(user);
    });
  }, []);

  const logoutHanlde = () => {
    alert('Logout!');
    logout();
  };

  return (
    <header className='w-full flex p-6 text-2xl border-b border-zinc-600 mb-4 items-center'>
      <Link to='/' className='flex items-center'>
        <img
          src={process.env.PUBLIC_URL + 'boys.png'}
          className='w-20 h-20 rounded-full'
        />
        <h1 className='font-extrabold ml-4 text-5xl'>FATBOY!</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type='text'
          placeholder='Search..'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>

      <Link to='/contack'>
        <div className='flex flex-col items-center mr-1 cursor-pointer mr-4 text-2xl '>
          <AiOutlineBell />
        </div>
      </Link>

      {user && (
        <User className='text-2xl' user={user} logoutHanlde={logoutHanlde} />
      )}
      {!user && (
        <button
          onClick={() => {
            login();
          }}
        >
          <BsPersonPlus className='text-2xl hover:text-gray-500' />
        </button>
      )}
    </header>
  );
}
