import React from 'react';

const PrednostiCard = ({cardbg,index,title,decription}) => {
    return (
        <div>
            <div className='border-4 border-white rounded-md shadow-lg 
            p-8  h-[700px]   space-y-6 bg-cover'style={{ backgroundImage: `url(${cardbg})` }}>
                    <h3 className='pt-8'  style={{
              marginTop: "2px",
              fontWeight: "200",
              textShadow: "1px 1px 2px #fff",
              color: "#EDF1F3",
              textShadow: "2px 2px 2px #006598",
              fontSize: "128px",
   
              lineHeight: "75px",
              fontVariationSettings: "'opsz' 64",
            }}>{index}</h3>

            <h3 className='font-bold  text-[#1E2125] pt-8'>{title}</h3>
            <p className=' text-[#414141]'>{decription}</p>
            </div>
        </div>
    );
};

export default PrednostiCard;