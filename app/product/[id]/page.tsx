// Import necessary components from Next.js
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Gift, Percent } from 'lucide-react';


// Example product data
const products = [
  { id: '1', name: 'While She Sleeps - First Ever Indonesia Show', image: '/images/sleeps.webp', date: '07 Oct 2024', location: 'Jakarta', price: 'IDR 385,000', 
  description: 'Experience the energy of While She Sleeps in their first-ever show in Indonesia!',
  early:'Early Bird: IDR 385,000', presale:'Presale: IDR 550,000' },



  { id: '2', name: '2024 SUPER JUNIOR SUPER SHOW SPIN-OFF : Halftime in JAKARTA', image: '/images/super.jpg', date: '14 Sep 2024', location: 'Jakarta', price: 'IDR 1,785,000',
   description: 'Join SUPER JUNIOR for an unforgettable halftime show in Jakarta!',
   early:'VIP A: IDR 4,205,000', presale:'VIP B: IDR 4,205,000'  },




  { id: '3', name: '2024 aespa Live Tour - SYNK: PARALLEL LINE in JAKARTA', image: '/images/espa.webp', date: '24 Aug 2024', location: 'Jakarta', price: 'IDR 1,455,000', 
  description: 'Get ready to immerse yourself in the aespa Live Tour in Jakarta!',
  early:'VIP C: IDR 3,325,000', presale:'CAT 2: IDR 2,830,000' },


  { id: '4', name: '2024 Red Velvet FANCON TOUR HAPPINESS : My Dear, ReVe1uv in Jakarta', image: '/images/revolute.webp', date: '07 Sep 2024', location: 'Jakarta', price: 'IDR 1,785,000', description: 'Celebrate with Red Velvet and ReVe1uv in this special fancon tour in Jakarta!' },
  { id: '5', name: '2024 DOYOUNG CONCERT [ Dear Youth, ] in JAKARTA', image: '/images/Dearest.webp', date: '21 Sep 2024', location: 'Jakarta', price: 'IDR 1,495,000', description: 'Experience the soulful performance of DOYOUNG in his Dear Youth concert in Jakarta.' },
  { id: '6', name: "2024 RIIZE FAN-CON 'RIIZING DAY' in JAKARTA", image: '/images/riize.webp', date: '31 Aug 2024', location: 'Jakarta', price: 'IDR 1,955,000', description: 'Join the RIIZING DAY celebration with RIIZE in Jakarta!' },
  { id: '7', name: 'ENHYPEN WORLD TOUR “FATE PLUS” IN JAKARTA - SHOW DAY 1 (AUGUST 17)', image: '/images/enhypen.webp', date: '17 Aug 2024', location: 'Jakarta', price: 'IDR 1,450,000', description: 'Don\'t miss ENHYPEN\'s Fate Plus World Tour in Jakarta!' },
];

// Server-side component to fetch and render product details based on id
export default function ProductPage({ params }: { params: { id: string } }) {
  // Find the product based on the id from the params
  const product = products.find((product) => product.id === params.id);

  // If the product is not found, show a 404 page
  if (!product) {
    return notFound();
  }

  // Render the product details
  return (
    <div className="p-3 m-3 md:mt-16 mt-7 flex md:flex-row flex-col justify-center text-left gap-5">
        <div>
            <h1 className="text-xl mt-16 w-1/2 font-bold mb-5 truncate">{product.name}</h1>
            <Image src={product.image} alt={product.name} width={530} height={400} />
            <p className="md:text-xl text-sm mt-5 text-gray-600"><strong>Date:</strong> {product.date}</p>
            <p className="md:text-xl text-sm text-gray-600"><strong>Location:</strong> {product.location}</p>
            <p className="md:text-xl text-sm text-red-500"><strong>Price:</strong> {product.price}</p>
            <p className="md:text-lg text-sm mt-5">{product.description}</p>
      </div>
      <div className=' md:w-1/2 w-full flex md:mt-14 justify-left flex-col gap-5'>
        <h1 className='text-2xl text-blue-700 font-bold'>Packages</h1>


      <div className='bg-gray-200 rounded-md p-5 shadow-2xl flex flex-col gap-5'>
        <div className='bg-white rounded-md shadow-xl p-5'>
               
               <div className='flex md:flex-row flex-col gap-8'>
                    <div className="h-6 md:w-56 w-44 rounded-md bg-gradient-to-r from-orange-600 to-blue-600 flex flex-row">
                        <Gift className='flex w-4 h-4 m-2 my-1 text-green-500' />
                        <p className="text-center text-white text-xs py-1">Mix with Ancol Entrance Ticket</p>
                    </div>
                    <div className='md:border-l -mt-6 md:mt-0 border-black flex flex-row'>
                        <Percent className='text-blue-900 w-4 h-4 ml-3' />
                        <h1 className='ml-3 text-xs text-black font-semibold'>Tax and Services 20%</h1>
                    </div>
                </div>


                <div className='flex md:flex-row flex-col justify-between mt-2'>
                 <p className="md:text-xl text-sm font-bold m-3"><strong></strong> {product.early}</p>
                 <button className='rounded-sm px-2 text-sm w-full md:w-40 mt-2 mr-24 font-bold text-white h-8 bg-blue-500'>Book The Ticket</button>
                </div>
        </div>

        <div className='bg-white rounded-md shadow-xl p-5'>


        <div className='flex md:flex-row flex-col gap-8'>
                    <div className="h-6 md:w-56 w-44 rounded-md bg-gradient-to-r from-orange-600 to-blue-600 flex flex-row">
                        <Gift className='flex w-4 h-4 m-2 my-1 text-green-500' />
                        <p className="text-center text-white text-xs py-1">Mix with Ancol Entrance Ticket</p>
                    </div>
                    <div className='md:border-l -mt-6 md:mt-0 border-black flex flex-row'>
                        <Percent className='text-blue-900 w-4 h-4 ml-3' />
                        <h1 className='ml-3 text-xs text-black font-semibold'>Tax and Services 20%</h1>
                    </div>
                </div>


                <div className='flex md:flex-row flex-col justify-between mt-2'>
                 <p className="md:text-xl text-sm font-bold m-3"><strong></strong> {product.presale}</p>
                 <button className='rounded-sm px-2 text-sm w-full md:w-40 mt-2 mr-24 font-bold text-white h-8 bg-blue-500'>Book The Ticket</button>
        </div>


        </div>

    </div>

      </div>
    </div>
  );
}
