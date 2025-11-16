import { TbLayoutSidebarLeftExpandFilled } from 'react-icons/tb';
import { useUser } from '../context/userContext';
import { Link } from 'react-router';
import Card from './Card';

export default function Sidebar() {
  const { userData, backgroundStyle } = useUser();
  return (
    <div
      className="hidden col-span-1 bg-neutral-800 lg:block items-center p-4 relative overflow-y-scroll [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-neutral-100/30
         [&::-webkit-scrollbar-thumb]:bg-neutral-300/50 [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      <h1 className="font-semibold uppercase mb-8">Haftalık Özet</h1>
      {userData.map((data) => {
        return (
          <Card key={data.date} backgroundStyle={backgroundStyle} data={data} />
        );
      })}
      <Link
        to="/weekly-overview"
        className="absolute top-4 right-4 text-2xl cursor-pointer"
      >
        <TbLayoutSidebarLeftExpandFilled />
      </Link>
    </div>
  );
}
