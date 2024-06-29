
import Link from 'next/link';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { SubmitButton } from '@/components/actionButton/AuthOnSubmit';
import { Label } from '@/components/ui/label';

export default async function ForgotPassword({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();



  const confirmReset = async (formData: FormData) => {
    'use server';
    try {
      const origin = headers().get('origin');
      const email = formData.get('email') as string;
      console.log(formData)
      const supabase = createClient();

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/reset-password`,
      });
    } catch (error) {
      console.log('Error thrown', error);
    }

  };

  return (

    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-black px-4 py-12 ">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">Reset Password</h2>
          <p className="mt-2 text-gray-500 ">
            Enter the email address associated with your account and we will send you a link to reset your password.
          </p>
        </div>
        <form action={confirmReset} className="space-y-6">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 w-full"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <SubmitButton rendertext={"Please check email for link..."} buttontext={"Reset Password"} toastmessage={"If an email exists, you will receive an email"} />
          <p className="flex justify-center text-gray-800">
            Remember your Password?
            <Link href='/signin' className="underline bold ml-2">Sign In</Link>
          </p>
        </form>
      </div>
    </div>


  );
}
