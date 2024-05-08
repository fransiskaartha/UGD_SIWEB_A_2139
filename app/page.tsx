import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { UserIcon, ArrowRightCircleIcon } from
'@heroicons/react/24/outline';
import Image from 'next/image';
import { kanit } from '@/app/ui/fonts';
import { anton } from '@/app/ui/fontanton';

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52">
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="relative z-10 flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">

          <p className={`${kanit.className} text-sm text-neutral-100 md:leading-normal`}>
            221712139 - Fransiska Artha Apriani Samura
            <br />
            <p
              className={`${anton.className} font-semibold text-sm text-neutral-100 md:leading-relaxed tracking-wide`}>
              <strong className="font-semibold tracking-wide text-8xl md:text-4xl" > Our Barbershop <br></br> Admin Dashboard </strong>
            </p>
            <Link
              href="/dashboard"
            >
              <h1
                className={`${kanit.className} antialiased flex text-white text-[20px] hover:text-teal-500`}
              >
                Go to Dashboard
                <ArrowRightCircleIcon className='w-6 mx-2' />
              </h1>
            </Link>
          </p>
          <nav
            className="fixed inset-x-0 top-0 z-10 w-full px-4 py-1 bg-transparent shadow-md border-slate-500 dark:bg-[#0c1015] transition duration-700 ease-out shadow-none"
          >
            <div className="flex justify-between p-2">
              <div className="text-[2rem] leading-[3rem] text-white">
                <li className="flex items-center">
                  <Image
                    src="/logo_hero.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <p
                    className={`${kanit.className} ml-3`}> Atma Barbershop </p>
                </li>

              </div>
              <div className="flex items-center space-x-4 text-lg font-bold tracking-tight">
              <Link
              href="/dashboard"
            >
                <button
                  className="hidden md:block px-6 py-2 text-white text-smtransition duration-500 ease-out text-xs bg-transparent rounded-lg border border-white hover:bg-white-800 hover:ease-in hover:underline shadow-none"
                >Login</button
                >
                <button className="md:hidden ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/logo_hero.png"
            width={20}
            height={10}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/bg_hero.png"
            layout="fill"
            objectFit="background"
            objectPosition="center"
            alt="Screenshots of the dashboard project showing mobile version"
            className="opacity"
          />
        </div>
      </div>
    </main >
  );
}
