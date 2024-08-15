import Link from "next/link";
import Comp from "@/public/images/comp.png";
import Visa from "@/public/images/visa.png";
import Master from "@/public/images/master.png";
import Jcb from "@/public/images/jcb.png";
import Express from "@/public/images/express.png"
import Lata from "@/public/images/lata.png"
import Seller from "@/public/images/seller.png"
import Brand from "@/public/images/brand.png"
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">

      <div className="p-3 md:px-8 px-2 mb-4 flex flex-col md:flex-row lg:grid-cols-4 gap-5 md:gap-24 justify-center text-center">
              <div>
              <h1 className="text-lg">Patnership</h1>
              <div className="flex items-center justify-center">
                <Image src={Comp} alt="Partnership Logo" width={200} height={100} />
              </div>
              </div>

              <div>
              <h1 className="text-lg">Secure your transaction</h1>
              <div className="flex items-center justify-center md:gap-3 gap-1">
                <Image src={Visa} alt="Partnership Logo" width={70} height={40} />
                <Image src={Master} alt="Partnership Logo" width={70} height={40} />
                <Image src={Jcb} alt="Partnership Logo" width={70} height={40} />
                <Image src={Express} alt="Partnership Logo" width={70} height={40} />
              </div>
              </div>


              <div className="">
              <h1 className="text-lg">Awards</h1>
              <div className="flex items-center justify-center md:gap-3 gap-1">
                <Image src={Lata} alt="Partnership Logo" width={70} height={40} />
                <Image src={Seller} alt="Partnership Logo" width={70} height={40} />
                <Image src={Brand} alt="Partnership Logo" width={70} height={40} />
              </div>
              </div>
      </div>


      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold">My Website</h2>
          <p className="md:text-sm text-xs">© 2024 My Website. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/about" className="md:text-sm text-xs hover:text-gray-400">
            About Us
          </Link>
          <Link href="/contact" className="md:text-sm text-xs hover:text-gray-400">
            Contact
          </Link>
          <Link href="/privacy" className="md:text-sm text-xs hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/terms" className="md:text-sm text-xs hover:text-gray-400">
            Terms of Service
          </Link>
          
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="md:text-sm text-xs hover:text-gray-400">
            Facebook
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="md:text-sm text-xs hover:text-gray-400">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="md:text-sm text-xs hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
