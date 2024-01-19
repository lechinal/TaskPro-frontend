import React from 'react';


export default function ModalHelp({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className=" mt-[81px] sm:mt-0 fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
      <div className="  min-w-[672px]   min-h-[572px] bg-[#151515] ">
        <div className="   h-[40px]  bg-[#151515] flex  justify-end">
          <button onClick={onClose} className="pr-[15px]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className='p-[24px]'>
        <h4 className='text-white font-medium text-lg'>Need help</h4>
        <form className='flex flex-col gap-4'>
         <input  type='email' name='email' placeholder='Email address' className='font-normal text-sm py-[14px] pl-[18px] pr-[239px] rounded-[8px] w-[352px] bg-transparent   border border-white' ></input>
         <input  type='text' placeholder='Comment' className='font-normal text-sm pt-[14px] pb-[80px] pl-[18px] pr-[239px] rounded-[8px] w-[352px] bg-transparent border border-white'></input>
         <button className=' rounded-[8px] px-[159px] py-[14px] bg-[#BEDBB0] font-medium'>Send</button>

         <button className=' rounded-[6px] px-[159px] py-[14px] bg-[#fff] font-medium'>Send</button>
        </form> 
        </div>
      </div>
    </div>
  );
}
