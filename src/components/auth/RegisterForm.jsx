import React from 'react';
import Link from 'next/link';
import Logo from '../layouts/Logo';


const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Logo />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral">
          Join our community
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-10 px-8 shadow-2xl shadow-neutral/5 rounded-[2.5rem] border border-base-300">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-neutral/70 mb-2">Full Name</label>
              <input type="text" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral/70 mb-2">Email</label>
              <input type="email" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral/70 mb-2">Contact Number</label>
              <input type="tel" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="+880..." />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral/70 mb-2">NID Number</label>
              <input type="text" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="1234567890" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral/70 mb-2">Password</label>
              <input type="password" required className="w-full p-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="••••••••" />
            </div>

            <div className="md:col-span-2 mt-2">
              <button type="submit" className="w-full py-4 bg-accent text-white font-bold rounded-2xl shadow-lg shadow-accent/20 hover:opacity-90 transition-all">
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-6">
             {/* Google Option (Same as Login) */}
             <button className="w-full flex justify-center items-center gap-3 py-4 border-2 border-base-200 rounded-2xl hover:bg-base-100 transition-all font-semibold text-neutral">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </button>
          </div>

          <p className="mt-8 text-center text-sm text-neutral/60">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-primary hover:text-secondary">Log in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;