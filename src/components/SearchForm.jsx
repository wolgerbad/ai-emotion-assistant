import { useState } from 'react';
import { sentimentAnalysis } from '../lib/helpers';
import { useUser } from '../context/userContext';
import { format } from 'date-fns';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm() {
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  const { setUserData, isLoading, setIsLoading } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      if (userInput.length < 20)
        throw new Error(
          'Doğru analiz yapabilmemiz için daha uzun bir mesaj girmelisin.'
        );

      const result = await sentimentAnalysis({ inputs: userInput });

      const star = +result[0][0].label.slice(0, 1);

      if (star < 3)
        setUserData((userData) => [
          {
            date: format(Date.now(), 'dd/MM/yyyy'),
            message: userInput,
            emotion: 'negative',
            overview: 'Bugün genel olarak olumsuz bir gün geçirmişsin.',
            suggestion:
              'Belki kısa bir yürüyüş yapabilir, dinlenebilir ya da rahatlatıcı bir şeyler yaparak kendini toparlayabilirsin.',
          },
          ...userData,
        ]);
      if (star > 3)
        setUserData((userData) => [
          {
            date: format(Date.now(), 'dd/MM/yyyy'),
            message: userInput,
            emotion: 'positive',
            overview: 'Bugün genel olarak olumlu bir gün geçirmişsin.',
            suggestion:
              'Enerjini koru. Akşam hoşuna giden bir şeyler yapabilirsin.',
          },
          ...userData,
        ]);
      if (star === 3)
        setUserData((userData) => [
          {
            date: format(Date.now(), 'dd/MM/yyyy'),
            message: userInput,
            emotion: 'neutral',
            overview: 'Bugün ne iyi ne kötü bir gün geçirmişsin.',
            suggestion:
              'Modunu yükseltecek küçük bir şey yapmayı düşünebilirsin.',
          },
          ...userData,
        ]);
      setUserInput('');
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form className="relative -mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          disabled={isLoading}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className={`px-4 py-2 border-2 ${
            isLoading ? 'cursor-not-allowed' : ''
          } ${
            error ? 'border-red-600' : 'border-neutral-500'
          }  font-semibold rounded-full outline-0 w-full bg-neutral-600`}
        />
        <button
          type="submit"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          disabled={isLoading}
        >
          <FaSearch className="text-2xl" />
        </button>
      </form>
      {error && (
        <p className="text-red-600 text-center mt-1 font-thin text-sm ">
          {error}
        </p>
      )}
    </>
  );
}
