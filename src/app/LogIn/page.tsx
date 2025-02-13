
"use client";
import { useUser, SignedOut, SignInButton, SignOutButton,SignedIn,UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HomePage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.primaryEmailAddress?.emailAddress === "amnaadnan011@gmail.com") {
        router.push("/admin/dashboard"); // ✅ Admin Redirect
      } else {
        router.push("/"); 
      }
    }
  }, [user, router]);

  return (
    <div className="container mx-auto">    
     <div className="flex items-center justify-center h-auto m-20  dark:bg-gray-900">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
     <SignedIn>
         <UserButton />
         <h2 className="mt-4 text-lg font-semibold text-gray-900">
     Welcome Back!
    </h2>
    </SignedIn>

       <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">Login</h2>
        
       <form className="space-y-4">
         <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
             
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"

              required
            />
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Forgot password?</a>
          </div>
<SignedOut>
  <SignInButton>
      <button className="w-full rounded-lg bg-[#2A254B] py-3 text-white font-medium hover:bg-gray-500 transition">
         Sign In
       </button>
     </SignInButton>
   </SignedOut>

<SignedIn>
    <SignOutButton>
      <button className="w-full rounded-lg bg-[#2A254B] py-3 text-white font-medium hover:bg-gray-500 transition">
       Sign Out
     </button>
   </SignOutButton>
 </SignedIn>
        </form>
        
        <div className="my-4 text-center text-gray-600 dark:text-gray-400">OR</div>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">

          Don&apos;t have an account? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Sign up</a>

        Don&apos;t have an account? <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
