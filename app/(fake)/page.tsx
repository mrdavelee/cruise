import Image from 'next/image';
import barca from '../assets/barcelona.jpg'
import email from '../assets/email-white.svg'
import marker from '../assets/marker.svg'
import ship from '../assets/ship.svg'
import clock from '../assets/clock.svg'




export default function Home() {
  return (
   <>
   
    <div className='relative w-full'>
      <Image alt="" src={barca} className='w-full h-[500px] object-cover' />
      <span className='block absolute inset-0 bg-black opacity-50'></span>

      <div className='inset-0 absolute w-full h-full flex justify-center items-center flex-col'>
        <h2 className='text-white text-2xl font-semibold mb-8'>
        Thank you, we look forward to seeing you on the
        </h2>
        <h3 className='text-white text-6xl font-semibold mb-8'>
          14 Nights Med, Spain & Portugal Total Solar Eclipse
        </h3>

        <h3 className='text-white text-xl relative'>
        <Image  className="mx-2 absolute -left-10 top-1" alt="" src={email}/>
        Confirmation email sent to <span className='font-semibold'>mrdavelee2012@gmail.com</span>
        </h3>
      </div>
    </div>

    <div className='bg-white shadow-lg px-10 py-8 w-[800px] relative -translate-y-1/4'>
      <div className='mb-20'>

        <div className='flex flex-row gap-4'>

          <h2 className='text-3xl font-medium mb-10 bg-white pr-2 shrink-0 '>
            Your Journey
          </h2>
          <span className='w-full block h-0.5 bg-slate-200 mt-5'></span>
        </div>
        <div className='grid grid-cols-2 gap-y-10'>
          <div className='ml-4'>
            <div className='text-xl font-medium relative'>
              <Image  className="mx-2 absolute -left-9 top-1" alt="" src={marker}/>

              Departs
            </div>
            <div className='font-light text-xl'>

              <p>Southampton, England</p>
              <p>August 1, 2026 at 4:00 PM</p>
            </div>
          </div>

          <div className='ml-4'>
            <div className='text-xl font-medium relative'>
              <Image  className="mx-2 absolute -left-9 top-1" alt="" src={marker}/>

              Ends
            </div>
            <div className='font-light text-xl'>
            
              <p>Southampton, England</p>
              <p>August 15, 2026 at 6:30 AM</p>
            </div>
          </div>

          <div className='ml-4'>
            <div className='text-xl font-medium relative'>
            <Image  className="mx-2 absolute -left-9 top-1" alt="" src={ship}/>

              Onboard
            </div>
            <div className='font-light text-xl'>

              <p>Celebrity Apex</p>
            </div>
          </div>

          <div className='ml-4'>
            <div className='text-xl font-medium relative'>
            <Image  className="mx-2 absolute -left-9 top-1" alt="" src={clock}/>

              Duration
            </div>
            <div className='font-light text-xl'>

              <p>14 Nights</p>
            </div>
          </div>
        </div>
      </div>

      <div>

        <div className='flex flex-row gap-4'>

          <h2 className='text-3xl font-medium mb-10 bg-white pr-2 shrink-0 '>
            Your Room
          </h2>
          <span className='w-full block h-0.5 bg-slate-200 mt-5'></span>
        </div>
        
      </div>
    </div>
   </>
      
  );
}
