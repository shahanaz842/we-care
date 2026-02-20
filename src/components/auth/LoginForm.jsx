import React from 'react';
import Link from 'next/link';
import Logo from '../layouts/Logo';


const LoginForm = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Logo />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral">
          Welcome back
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-8 shadow-2xl shadow-neutral/5 rounded-[2.5rem] border border-base-300">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-neutral/70 mb-2">Email address</label>
              <input type="email" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="name@example.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral/70 mb-2">Password</label>
              <input type="password" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-secondary transition-all">
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-base-300"></span></div>
              <div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-neutral/40">Or continue with</span></div>
            </div>

            <div className="mt-6">
              <button className="w-full flex justify-center items-center gap-3 py-4 border-2 border-base-200 rounded-2xl hover:bg-base-100 transition-all font-semibold text-neutral">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-neutral/60">
            New to We Care?{' '}
            <Link href="/register" className="font-bold text-primary hover:text-secondary">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;