import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { InputForm } from './_components/ResetForm';
export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session, 'session')
  if (session) {
    return redirect('/dashboard');
  }

  const resetPassword = async (formData: FormData) => {
    'use server';
    
    const password = formData.get('password') as string;
    const supabase = createClient();

    if (searchParams.code) {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );

      if (error) {
        return redirect(
          `/forgot-password`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/forgot-password`
      );
    }

    redirect(
      `/dashboard`
    );
  };

  return (
    <div className="bg-background flex justify-center items-center h-screen w-full">
        <InputForm serverSubmit={resetPassword} />
    </div>
  );
}
