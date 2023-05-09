import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { Logins, setLogins, loginsHandle } = useContext(LoginContext);
  const navigate = useNavigate();

  const onsubmitHandle = e => {
    e.preventDefault();
    loginsHandle();
    console.log(Logins);
    navigate('/videos');
  };

  return (
    <section>
      <h1>Youtube</h1>
      <form className='flex flex-col items-center' onSubmit={onsubmitHandle}>
        <input type='text' />
        <button></button>
        <input type='password' />
        <button>로그인</button>
      </form>
      <div>
        <span>비밀번호 찾기</span>
        <span>아이디 찾기</span>
        <span>회원 가입</span>
      </div>
    </section>
  );
}
