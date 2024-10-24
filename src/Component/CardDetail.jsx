import React from 'react';
import { useParams } from 'react-router-dom';
import { MUSIC_CIRCLE_LIST } from './common/Helper';

const CardDetail = () => {
  const { id } = useParams(); // Get the dynamic id from the URL

  // Find the card in the list that matches the dynamic id
  const card = MUSIC_CIRCLE_LIST.find(item => item.url === id);

  if (!card) {
    return <p>Card not found.</p>;
  }

  return (
    <div className="p-10 bg-zinc-100 flex flex-col">
      <h1 className="text-4xl font-bold">{card.title}</h1>
      <img  src={card.Image} alt={card.description} className="w-[700px] my-5" />
      <p className="text-xl">{card.description}</p>
      <div className="flex items-center  mt-4">
        <img src={card.profile} alt={card.title} className="w-12 h-12 rounded-full mr-4" />
        <div className='flex'>
          <h2 className="font-medium">{card.title}</h2>
          <p className=''>{card.dob}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
