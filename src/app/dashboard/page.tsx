"use client"
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import SignOutButton from './ButtonClient'; // Adjust the import path as necessary
import { useEffect, useState } from 'react';

export default function PrivatePage() {
  const supabase = createClient();
  const [userData, setData] = useState(null);
  const [userError, setError] = useState(null);

  useEffect(()=> {
    const getCurrentUser = async () => {
      const {data, error} = await supabase.auth.getUser()
      console.log("response", data, error)
      setData(data) 
      if(data){
        //redirect('/signin')
      }
    }
    getCurrentUser()
  }, [])


  console.log("data", userData);

  return (
    <div>

      <p>Hello {JSON.stringify(userData)}</p>
    </div>
  );
}