'use client';
import MarketingSlide from '../marketing-slide/marketing-slide';
import { LoginForm } from '../login-form';

export function LoginPage() {
  return (
    <section className="grid grid-cols-12 min-h-screen md:min-h-full">
      <div className="col-span-12 w-full lg:col-span-5 md:col-span-6">
        <LoginForm />
      </div>
      <div className="hidden md:block lg:col-span-7 mx-auto bg-primary md:col-span-6 md:col-start-7 w-full">
        <MarketingSlide />
      </div>
    </section>
  );
}
