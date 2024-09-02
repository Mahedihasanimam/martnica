import Image from 'next/image';
import React from 'react';
import image1 from '/public/mom.png'
const DragiCard = () => {
    return (
        <div className='lg:flex md:flex gap-8 flex-row w-fit mx-auto bg-[#FFF1DB] p-12 '>
            <div>
                <Image className='' src={image1}/>
            </div>
            <div className='max-w-lg space-y-2'>
                <div className='flex items-center justify-between pb-4'>
                <h3 className='text-4xl font-bold'>Dragi moj Mario</h3>
                    <div>
                        <h3 className='text-xl'>Marjia Smrekar</h3>
                        <p>15.01.2024</p>
                    </div>
                </div>
                <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <p>Coredolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore Ansectetur elit.</p>
                <p className='flex items-center justify-end'>Odpri naprej</p>
            </div>
        </div>
    );
};

export default DragiCard;