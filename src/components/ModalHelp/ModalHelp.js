import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail, setMessage } from '../../redux/help/messageSlice';
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
    <div className=" sm:mt-0 fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center">
      <div className="relative  ">
        <div className=" rounded-[8px]  max-w-[335px] border border-[#BEDBB0]   bg-[#151515]   ">
          <button
            onClick={onClose}
            className="pr-[14px] pt-[14px]  absolute right-0  "
          >
             

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="p-[24px]">
            <h4 className="text-white font-medium text-lg pb-[24px]">
              Need help
            </h4>
            <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                name="email"
                placeholder="Email address"
                className="font-normal text-sm text-white  rounded-[8px]  bg-transparent   border border-[#BEDBB0] p-[14px]  "
              ></input>
              <input
                value={comment}
                onChange={handleCommentChange}
                type="text"
                placeholder="Comment"
                className=" font-normal  text-white text-sm rounded-[8px] bg-transparent border border-[#BEDBB0] p-[14px] pb-[85px]"
              ></input>
              <button className="    rounded-[8px] text-[14px]   transition-all duration-800  bg-[#BEDBB0] font-medium  ">
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
