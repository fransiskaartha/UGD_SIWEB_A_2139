import Pagination from '@/app/ui/reservations/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/reservations/table';
import { CreateReservations } from '@/app/ui/reservations/buttons';
import { kanit } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  ReservationsTableSkeleton,
  // LatestReservationsSkeleton,
  SearchReservationsSkeleton,
  CreateReservationsSkeleton
} from '@/app/ui/skeletons';
import { fetchReservationsPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // console.log('Fetching revenue data...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchReservationsPages(query);

  return (
    <div className="w-full">
      <div>
        <h1 className={`${kanit.className} text-2xl`}>Reservations</h1>
        <p className={kanit.className}>221712139</p>
        <p className={kanit.className}>Fransiska Artha Apriani Samura</p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<SearchReservationsSkeleton />}>
          <Search placeholder="Search reservations..." />
          {/* <SearchReservationsSkeleton /> */}
        </Suspense>
        {/* <Search placeholder="Search reservations..." /> */}
        <Suspense fallback={<CreateReservationsSkeleton />}>
          <CreateReservations />
        </Suspense>
      </div>
      <Suspense key={query + currentPage} fallback={<ReservationsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        </div>
        <Pagination totalPages={totalPages} />
      </div>
      );
}