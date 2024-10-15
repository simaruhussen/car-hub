"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';  // Ensure this import is correct
import CustomButton from './CustomButton';

const NavBar = () => {
  const router = useRouter();  // Ensure this is initialized properly

  const handleSignInClick = () => {
    router.push('/dashboard');  // Ensure this is the correct route
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/logo.svg" alt="car hub logo" width={118} height={18} className="object-contain" />
        </Link>

        {/* Home, Contact Us, and Sign In Button */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-primary-blue rounded-full bg-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/contact-us" className="text-primary-blue bg-white hover:text-gray-300">
            Contact Us
          </Link>

          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] hover:text-gray-300"
            handleClick={handleSignInClick}  // Ensure handleClick is passed here
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
