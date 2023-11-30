import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        
        <Link 

        href="/"
      

        >
    <Image
        src="/images/bird-logo.png"
        alt="Bird Logo"
        width={100}
        height={100}
        className="mr-6 mt-2"
    />
</Link>
    

         );
}
 
export default Logo;