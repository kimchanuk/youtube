import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import Replay from '../components/Replay';
import Display from '../components/Display';
import User from '../components/User';

export default function VideoDetail() {
  const [inputValue, setInputValue] = useState('');

  const [comment, setComment] = useState([
    {
      img: <User />,
      id: Math.floor(Math.random() * 100),
      text: '잘지내봐요',
      dete: new Date().toLocaleString(),
    },
    {
      img: <User />,
      id: Math.floor(Math.random() * 100),
      text: '고맙습니다',
      dete: new Date().toLocaleString(),
    },
  ]);

  const onnAdd = newData => {
    setComment([...comment, newData]);
  };

  const delHandle = removeData => {
    const good = comment.filter(id => id !== removeData.id);

    setComment(good);
  };

  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className='whitespace-pre-wrap'>{description}</pre>
        </div>
        <article>
          <span className='p-4 text-zinc-500'>
            Total Commnet : {comment.length}
          </span>
          <Replay
            delHandle={delHandle}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setComment={setComment}
            comment={comment}
            onnAdd={onnAdd}
          />
          <Display
            comment={comment}
            setComment={setComment}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </article>
      </article>

      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}

//버튼으로 할수있는 게임을 만들건데 a버튼을 클릭하면 a가 ui에 출력되게 해주고, b라는 버튼을 클릭하면 b가 ui에 나오게해줘 c버튼을 클릭하면 c라는 값이 화면에 나올수 있게 코드를 완성시켜줘
