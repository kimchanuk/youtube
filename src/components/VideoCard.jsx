import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';
  return (
    <li
      className={isList ? 'flex gap-2 m-3 ' : ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={
          isList
            ? 'w-60 mr-2 transition-all ease-in duration-300 hover:scale-105 cursor-pointer'
            : 'w-full transition-all ease-in duration-300 hover:scale-105 cursor-pointer'
        }
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className='cursor-pointer'>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
