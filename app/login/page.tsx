import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';
import { kanit } from '@/app/ui/fonts';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-30 w-full items-end rounded-lg bg-gradient-to-r from-black to-amber-950 p-4 md:h-36 justify-between">
          <div className="text-neutral-200">
            <p className={`${kanit.className} hidden md:block text-xl md:text-4xl ml-3`}> Atma Barbershop</p>
            </div>
            <div className="flex-grow"/>
            <div className="w-110 text-white w-110 md:ml-auto">
            <Image
              src="/logo_hero.png"
              alt="logo"
              width={60}
              height={60}
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}