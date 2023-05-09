import React from 'react';
import { useParams } from 'react-router-dom';

import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from 'react-query';

export default function Videos() {
  const { keyword } = useParams();
  //파람으로 키워드 겟
  const { youtube } = useYoutubeApi();
  //api를 이용하여 인스턴스를 받아옴
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  //url에 키워드가 있다면 키워드를 이용해서 유튜브 인스턴스에있는 search를이용
  //키워드가 있다면 검색한결과 비디오 키워드 없으면 Hot이 videos에 들어감

  //data를 videos로 변경, 타입은 배열 => map을 이용하여 ui생성:)
  //home에서 로딩,에러,데이터를 모두 ui로 보여주고, 카드 컴프 생성

  return (
    <>
      <div className='text-2xl mt-2 mb-2 p-2'>
        {keyword ? ` 🔍 Search Results : ${keyword} ` : ' 🔥 Hot Trend TOP 50!'}
      </div>
      {isLoading && <p>네트워크 로딩중입니다 .😀</p>}
      {error && <p>네트워크 에러가 발생하였습니다. 😖</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:gird-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4 ml-1'>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
