import React from 'react';

const SozalCard = ({title1,title2,date,decription}) => {
    return (
        <div>
            <div className='p-6 md:p-8 lg:p-12 rounded-lg shadow-custom-light-dark-with-white bg-gradient-to-tr from-[#E3E8EC] to-[#FFFFFF] space-y-4  w-full'>
                <div className='flex items-center justify-between text-[#414141]'>
                   <div>
                   <h3 className='text-xl font-semibold  text-[#1E2125]'>{title1}</h3>
                   <p>{title2}</p>
                   </div>
                   <p className='text-lg'>{date}</p>
                </div>
                <p className='text-[#414141] text-xl'>{decription}</p>
            </div>
        </div>
    );
};

export default SozalCard;