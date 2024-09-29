import { useAuth } from '../utils/authContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('Logged in user:', userCredential.user);
      toast.success('로그인에 성공하였습니다.');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/', { state: { showToast: true } });
    }
  }, [currentUser, navigate]);

  return (
    !currentUser && (
      <>
        <header className="text-center text-3xl font-light py-5">LOGIN</header>
        {error && <p>{error}</p>}
        <form className="flex px-6 text-sm gap-3" onSubmit={handleLogin}>
          <div className="flex flex-col w-full gap-3">
            <div className="flex gap-1 items-center h-[29px]">
              <label className="w-24">E-MAIL</label>
              <input
                className="w-full bg-gray-100 px-2 py-1 focus:bg-white focus:border-black focus:border focus:outline-none"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-1 items-center h-[29px]">
              <label className="w-24">PASSWORD</label>
              <input
                className="w-full bg-gray-100 px-2 py-1 focus:bg-white focus:border-black focus:border focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="bg-black text-white px-2" type="submit">
            Login
          </button>
        </form>
        <div className="flex justify-center mt-5 text-sm gap-1">
          <span className="text-gray-400">회원이 아니십니까?</span>
          <button
            className="text-gray-500 border-b-[1px] border-gray-500"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </button>
        </div>
      </>
    )
  );
};

export default LoginPage;
