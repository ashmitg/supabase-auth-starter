"use client"
import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/client';


const SignOutButton = () => {

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    console.log('Signed out');
  };

  return <form action={signOut}>
    <Button type="submit">Sign Out</Button>
  </form>
};

export default SignOutButton;