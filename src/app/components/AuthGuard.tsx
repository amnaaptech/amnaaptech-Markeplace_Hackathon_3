import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"


const AuthGuard = ({children} :{children:React.ReactNode})=>{
    const[isLoadig, setIsLoading ] = useState(true)
const {isSignedIn} = useUser()
const router = useRouter()

useEffect(()=>{
    if(isSignedIn ===false){
   router.replace('LogIn');
    }else{
        setIsLoading(false)
    }
},[isSignedIn,router])

if(isLoadig) return <p>Loading....</p>

return <>{children}</>

}
export default AuthGuard;