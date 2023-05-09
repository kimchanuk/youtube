import { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYotubeClient';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

//배포할떄는 유튜브클라이언트 사용, 페이크클라이언트 가려야함
//참조값 : context => api
//데이터를 제공해주는 함수(유튜브 인스턴스 : youtube class로 만든)

//목데이터를 사용하고 싶다면 FakeYoutubeClient()
//실제api를 사용하고 싶다면 youtube클라이언트를 api클라이언트로 전달

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
