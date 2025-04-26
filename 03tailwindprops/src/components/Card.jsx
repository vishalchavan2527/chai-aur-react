import React from 'react'

const Card = ({username , btnText}) => {

  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.unsplash.com/photo-1663250422296-ed759f42d5e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-40 mt-4 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-4 space-y-5">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
     </>
  )
}

export default Card