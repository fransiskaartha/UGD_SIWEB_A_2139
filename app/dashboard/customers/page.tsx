import Pagination from '@/app/ui/customers/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateCustomer } from '@/app/ui/customers/buttons';
import { kanit } from '@/app/ui/fonts';
// import { CreateCustomerSkeleton, CustomerTableSkeleton, SearchCustomerSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//     title: 'Customers',
// };

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchCustomersPages(query);
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${kanit.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search customers..." />
            <CreateCustomer />
            </div>

            {/* key={query + currentPage} */}
            
            <Table query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}