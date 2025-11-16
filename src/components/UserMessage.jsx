import { useUser } from '../context/userContext';

export default function UserMessage() {
  const { todaysData } = useUser();

  if (!todaysData) return;

  return (
    <div className="flex flex-col ">
      <h1 className="self-end px-2 font-semibold mb-1 text-gray-300">
        Kullanıcı
      </h1>
      <div className="bg-neutral-600 px-8 py-3 rounded-full max-w-120">
        {todaysData.message}
      </div>
    </div>
  );
}
