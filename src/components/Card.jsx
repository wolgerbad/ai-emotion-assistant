import { useState } from 'react';

export default function Card({ backgroundStyle, data }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`${
        backgroundStyle[data.emotion]
      } px-4 py-3 text-sm flex flex-col gap-3 mb-4 justify-between font-medium rounded-lg h-60 overflow-x-hidden overflow-y-scroll shadow-lg hover:shadow-xl transition-shadow [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-neutral-100/30
         [&::-webkit-scrollbar-thumb]:bg-neutral-300/50 [&::-webkit-scrollbar-thumb]:rounded-full w-full`}
    >
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
          tarih
        </p>
        <p className="text-white">{data.date}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
          mesaj
        </p>
        <p className="text-white" onClick={() => setShowMore((prev) => !prev)}>
          {!showMore && data.message.slice(0, 80)}
          {!showMore && data.message.length > 80 && '...'}
          {showMore && data.message}
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
          özet
        </p>
        <p className="text-white">{data.overview}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-wider opacity-70 font-semibold">
          tavsiye
        </p>
        <p className="text-white">{data.suggestion}</p>
      </div>
    </div>
  );
}
