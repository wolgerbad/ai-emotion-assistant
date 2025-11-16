import { ClipLoader, SyncLoader } from 'react-spinners';
import { useUser } from '../context/userContext';
import SystemMessage from './SystemMessage';
import UserMessage from './UserMessage';

export default function ChatBox() {
  const { isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex justify-center mt-20">
        <SyncLoader
          loading={isLoading}
          color="#737373"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="self-end">
        <UserMessage />
      </div>
      <div className="self-start">
        <SystemMessage />
      </div>
    </div>
  );
}
