import Link from 'next/link';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <ExclamationCircleIcon className="w-10 text-red-500" />
      <h2 className="text-xl font-semibold">404 Page Not Found</h2>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link
        href="/dashboard/reservations"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}