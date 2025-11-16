import { useUser } from '../context/userContext';

import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';
import SearchForm from '../components/SearchForm';
import MobileNav from '../components/MobileNav';

function Homepage() {
  const { todaysData } = useUser();

  return (
    <div className="h-screen overflow-hidden grid grid-cols-4 gap-8">
      <Sidebar />
      <div className="flex flex-col items-center h-screen col-start-1 lg:col-start-2 col-span-full px-5 lg:px-40 py-30">
        {!todaysData && (
          <h1 className="text-4xl font-bold text-center">
            AI-Asistan'a Hoş Geldin!
          </h1>
        )}
        <div className="flex-1 w-full">
          <ChatBox />
        </div>
        <div className="text-center flex flex-col gap-4 w-full">
          {!todaysData ? (
            <>
              <h2 className="text-2xl font-semibold">Günün nasıl geçti?</h2>
              <SearchForm />
            </>
          ) : (
            <p className="text-neutral-500 mt-8">
              Bugün yazdığın için teşekkürler. Yarın yine buradayım.
            </p>
          )}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default Homepage;
