import React from 'react';

const Contact = () => {
    return (
        <section>
          <div className='flex w-full items-center justify-evenly gap-10 mt-10 bg-base-100 shadow-2xl '>
             <div className='w-32'>
             <h1>  contact with ue </h1>
             </div>
            <div className='w-96'>
            <form className='flex flex-col gap-5 p-10'>
            <input type="text" placeholder="Enter your Name" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Enter your E-mail" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Type message here..." className="input input-bordered input-primary w-full max-w-xs" />
            </form>
            </div>
          </div>
        </section>
    );
};

export default Contact;