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

import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin");
    }
  }, [router]);

  if (!isMounted) return null; // Jab tak mount nahi hota, kuch return na karo

  return <>{children}</>;
};

export default ProtectedRoute;
