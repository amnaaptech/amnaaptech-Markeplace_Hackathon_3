// import React from "react";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   SignOutButton,
//   UserButton
// } from '@clerk/nextjs'



// const Login = () => {
//   return (
//     <div className="flex h-screen">
//    {/* Left Section */}
//       <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
//         <h1 className="text-4xl font-bold">Welcome to Avion</h1>
//         <p className="text-gray-600 mt-2">Discover exclusive deals and latest trends!</p>
//       </div>

//       {/* Right Section */}
//       <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg">
//      <SignedIn>
//       <div>
//       <UserButton/>
//         <h2 className="text-3xl font-bold">Welcome</h2>
//         <p className="text-gray-600 mt-2">
//           Use coupon <span className="text-red-500 font-semibold">DISCOUNT111</span> to get a $50 discount on your next order!
//         </p>
//       </div>
//      </SignedIn>
//         <h3 className="text-2xl font-bold mt-4">Login</h3>
        
//         {/* Login Form */}
//         <div className="mt-6 w-3/4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full p-3 border rounded-md mb-4"
//             name="email"
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             className="w-full p-3 border rounded-md mb-4"
//             name="pass"
//           />
//           <div className="flex justify-between items-center w-full mb-4">
//             <label className="flex items-center text-gray-600">
//               <input type="checkbox" className="mr-2" name="check" /> Remember Me
//             </label>
//             <a href="#" className="text-red-500">Forgot Password?</a>
//           </div>
//           {/* <button className="w-full bg-red-500 text-white p-3 rounded-md text-lg font-semibold">
//             Login
//           </button> */}
//        {/* SignOut Logic */}
//        <SignedOut>
//           <SignInButton />
//         </SignedOut>

//       <SignedIn>
//         <SignOutButton/>
//       </SignedIn>

//           <p className="mt-4 text-gray-600">
//             New here? <a href="#" className="text-red-500 font-semibold">Create an account</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   SignOutButton,
//   UserButton
// } from '@clerk/nextjs'

// import Image from "next/image";

// export default function Login() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-300 to-gray-100 p-4">
//       <div className="relative w-full max-w-md bg-white p-8 shadow-lg rounded-2xl">
//         <div className="absolute top-0 left-0 w-full h-1/3 bg-[#2A254B]  rounded-t-2xl"></div>
//         <SignedIn>
//         <div className="relative z-10 flex flex-col items-center">
//           <Image
//             src="/profile-avatar.png"
//             alt="User Avatar"
//             width={80}
//             height={80}
//             className="mb-4 rounded-full border-4 border-white"
//           />
//           <h2 className="mb-4 text-xl font-semibold text-gray-900">Welcome Back!</h2>
//         </div>
//         </SignedIn>

//         <form className="mt-6 space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="mt-1 w-full rounded-lg border-gray-300 p-3 shadow-sm focus:ring-gray-300 focus:border-gray-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="mt-1 w-full rounded-lg border-gray-300 p-3 shadow-sm focus:ring-purple-500 focus:border-purple-500"
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <label className="flex items-center text-sm text-gray-700">
//               <input type="checkbox" className="h-4 w-4 text-[#2A254B]" />
//               <span className="ml-2">Remember me</span>
//             </label>
//             <a href="#" className="text-sm text-[#2A254B] hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-lg bg-[#2A254B] py-3 text-white font-medium hover:bg-purple-700 transition"
//           >
//             {/* SignOut Logic */}
//        <SignedOut>
//          <SignInButton />
//         </SignedOut>
//        <SignedIn>
//        <SignOutButton/>
//        </SignedIn>
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don't have an account?{" "}
//           <a href="#" className="text-[#2A254B] font-semibold hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   SignOutButton,
//   UserButton,
// } from "@clerk/nextjs";

// import Image from "next/image";

// export default function Login() {
//   return (
//       <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 p-4">
// <div className="relative w-full max-w-md bg-white p-8 shadow-lg rounded-2xl">
// {/* Header */}
// <div className="absolute top-0 left-0 w-full h-20 bg-[#2A254B] rounded-t-2xl flex items-center justify-center">
//   <h1 className="text-white text-lg md:text-xl font-bold">Login</h1>
// </div>

// {/* Signed-in User Avatar */}
// <div className="mt-16 text-center">
//   <SignedIn>
//     <UserButton />
//     <h2 className="mt-4 text-lg font-semibold text-gray-900">
//       Welcome Back!
//     </h2>
//   </SignedIn>
// </div>

// {/* Login Form */}
// <form className="mt-6 space-y-4">
//   <div>
//     <label className="block text-sm font-medium text-gray-700">
//       Email
//     </label>
//     <input
//       type="email"
//       placeholder="Enter your email"
//       className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-gray-300 focus:border-gray-500"
//     />
//   </div>

//   <div>
//     <label className="block text-sm font-medium text-gray-700">
//       Password
//     </label>
//     <input
//       type="password"
//       placeholder="Enter your password"
//       className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-gray-300 focus:border-gray-500"
//     />
//   </div>

//   <div className="flex items-center justify-between">
//     <label className="flex items-center text-sm text-gray-700">
//       <input type="checkbox" className="h-4 w-4 text-[#2A254B]" />
//       <span className="ml-2">Remember me</span>
//     </label>
//     <a href="#" className="text-sm text-[#2A254B] hover:underline">
//       Forgot password?
//     </a>
//   </div>
// </form>

// {/* Sign-in and Sign-out Buttons */}
// <div className="mt-6 space-y-3">
//   <SignedOut>
//     <SignInButton>
//       <button className="w-full rounded-lg bg-[#2A254B] py-3 text-white font-medium hover:bg-purple-700 transition">
//         Sign In
//       </button>
//     </SignInButton>
//   </SignedOut>

//   <SignedIn>
//     <SignOutButton>
//       <button className="w-full rounded-lg bg-[#2A254B] py-3 text-white font-medium hover:bg-purple-700 transition">
//         Sign Out
//       </button>
//     </SignOutButton>
//   </SignedIn>
// </div>

// <p className="mt-4 text-center text-sm text-gray-600">
//   Don't have an account?{" "}
//   <a href="#" className="text-[#2A254B] font-semibold hover:underline">
//     Sign Up
//   </a>
// </p>
// </div>
// </div>

//   );
// }

