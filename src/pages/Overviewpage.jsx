import { useUser } from '../context/userContext';
import MobileNav from '../components/MobileNav';
import Card from '../components/Card';

export default function Overviewpage() {
  const { userData, backgroundStyle } = useUser();

  return (
    <div className="p-10 md:p-20">
      <h1 className="font-semibold uppercase mb-4 text-center text-xl">
        HAFTALIK ÖZET
      </h1>
      {userData.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {userData.map((data) => {
            return (
              <Card
                key={data.date}
                backgroundStyle={backgroundStyle}
                data={data}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <p className="text-red-500">Kullanıcı verisi bulunamadı.</p>
        </div>
      )}
      <MobileNav />
    </div>
  );
}
