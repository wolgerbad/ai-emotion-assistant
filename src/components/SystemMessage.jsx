import { useUser } from '../context/userContext';

export default function SystemMessage() {
  const { todaysData, backgroundStyle } = useUser();

  if (!todaysData) return;

  return (
    <div>
      <h1 className="px-8 mb-1 text-gray-300 font-semibold">Sistem</h1>
      <div
        className={`${
          backgroundStyle[todaysData.emotion]
        } px-8 py-4 rounded-full max-w-120`}
      >
        {todaysData.overview}. {todaysData.suggestion}
      </div>
    </div>
  );
}
