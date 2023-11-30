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
        width={90}
        height={90}
        className="mr-6"
    />
</Link>
    

         );
}
 
export default Logo;