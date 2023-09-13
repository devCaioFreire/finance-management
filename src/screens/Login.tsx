import { FcGoogle } from 'react-icons/fc';
import { SiGooglesheets } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="flex flex-col justify-between h-1/2 p-4 rounded-lg bg-[#1E1E1E] sm:w-[80%] md:w-1/2">
        <header className='text-center'>Entrar na plataforma</header>

        <div className='flex self-center'>
          <SiGooglesheets className="w-full h-32 text-stone-600" />
        </div>

        <Link to={'/home'} className="rounded p-2 bg-stone-800">
          <h1 className='flex w-full items-center justify-center gap-4 rounded'>
            <FcGoogle className="w-5 h-5" />
            Google
          </h1>
        </Link>
      </div>
    </div>
  )
}