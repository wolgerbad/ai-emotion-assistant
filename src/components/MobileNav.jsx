import { PiCirclesThreePlus, PiUser } from 'react-icons/pi';
import { TbMoodUp } from 'react-icons/tb';
import { Link } from 'react-router';

export default function MobileNav() {
  return (
    <div className="absolute bottom-1 lg:bottom-4 min-w-78 left-1/2 -translate-x-1/2 rounded-full flex justify-between items-center px-6 h-16 z-50 bg-linear-to-br from-orange-500 to-sky-800 font-semibold">
      <Link to="/" className="flex flex-col items-center">
        <PiCirclesThreePlus className="text-xl" />
        Anasayfa
      </Link>
      <h1 className="uppercase">Mood.AI</h1>
      <Link to="/weekly-overview" className="flex flex-col items-center">
        <TbMoodUp className="text-xl" />
        Özet
      </Link>
    </div>
  );
}
