import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const passwordRegex = /^.{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      toast.error('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    if (!isValidPassword(password)) {
      setError('비밀번호는 6자리 이상으로 구성되어야 합니다.');
      toast.error('비밀번호는 6자리 이상으로 구성되어야 합니다.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User created:', userCredential.user);
      toast.success('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  return (
    <>
      <header className="text-center text-3xl font-light py-5">
        JOIN MEMBER
      </header>
      <form className="flex flex-col px-6 text-sm" onSubmit={handleSignup}>
        <div className="flex flex-col w-full gap-3">
          <div className="flex gap-1 items-center h-[29px]">
            <label htmlFor="email" className="w-32">
              E-MAIL
            </label>
            <input
              className="w-full bg-gray-100 px-2 py-1 focus:bg-white focus:border-black focus:border focus:outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@를 포함한 이메일을 작성해주세요."
              required
            />
          </div>
          <div className="flex gap-1 items-center h-[29px]">
            <label htmlFor="password" className="w-32">
              PASSWORD
            </label>
            <input
              className="w-full bg-gray-100 px-2 py-1 focus:bg-white focus:border-black focus:border focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="6자리 이상으로 구성해주세요."
              required
            />
          </div>
          <div className="flex gap-1 items-center h-[29px]">
            <label htmlFor="confirm-password" className="w-32">
              CONFIRM P/W
            </label>
            <input
              className="w-full bg-gray-100 px-2 py-1 focus:bg-white focus:border-black focus:border focus:outline-none"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex mt-5 gap-2 justify-center">
          <button
            className="border border-black w-24 py-1"
            onClick={() => navigate(-1)}
          >
            CANCEL
          </button>
          <button className="bg-black text-white w-24 py-1" type="submit">
            SIGN UP
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupPage;
