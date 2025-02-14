// "use client"

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default  function ProtectedRoute({children}: {children:React.ReactNode}){
// const router = useRouter();

// useEffect(()=>{
//     const isLoggedIn = localStorage.getItem("isLoggedIn");
//     if(!isLoggedIn){
//         router.push("/admin");
//     }
// },[router])
// return <>
// {children}
// </>
// }
"use client";

import ProtectedRoute from "../ProtectedRoute";// Upar wali file ko import karna hai

const ProtectedPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Protected Page</h1>
        <p>Only accessible if logged in.</p>
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
