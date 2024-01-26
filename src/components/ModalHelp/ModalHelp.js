import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import {
  setEmail,
  setMessage,
 
} from '../../redux/help/messageSlice';
import { sendMessageHelp } from '../../redux/help/messageOperation';

export default function ModalHelp({ visible, onClose }) {
  const dispatch = useDispatch();
  const [email, setEmailLocal] = useState('');
  const [comment, setComment] = useState('');

  const handleEmailChange = e => {
    setEmailLocal(e.target.value);
  };

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(setEmail(email));
    dispatch(setMessage(comment));
    dispatch(sendMessageHelp({ email: email, comment: comment }));

    onClose();
  };

  if (!visible) return null;

  return (
    <div className="   sm:mt-0 fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
      <div className="relative  ">
        <div className=" rounded-[8px]  max-w-[335px]     bg-[#151515] ">
          <button
            onClick={onClose}
            className="pr-[14px] pt-[14px]  absolute right-0   "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6  hover:bg-red-500 rounded-full"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="p-[24px]">
            <h4 className="text-white font-medium text-lg pb-[24px]">
              Need help
            </h4>
            <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
              <input 
                value ={email}
                onChange = {handleEmailChange}

                type="email"
                name="email"
                placeholder="Email address"
                className="font-normal text-sm text-white  rounded-[8px]  bg-transparent   border border-white p-[14px]  "
              ></input>
              <input
                value={comment}
                onChange={handleCommentChange}
                type="text"
                placeholder="Comment"
                className=" font-normal  text-white text-sm rounded-[8px] bg-transparent border border-white p-[14px] pb-[85px]"
              ></input>
              <button className=" rounded-[8px]  hover:bg-green-300 transition-all duration-800  bg-[#BEDBB0] font-medium  ">
                <span className="flex justify-center px-[125px] py-[14px]">
                  {' '}
                  Send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
