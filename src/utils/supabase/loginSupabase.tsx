'use server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import { createClient } from "./server";

async function loginSupabase (email:string, password:string) {
    const supabase = await createClient();

    console.log(email, password);
    
    const data = {
        email: email as string,
        password: password as string,
      }
      const { error } = await supabase.auth.signInWithPassword(data)
      if (error) {
        redirect('/error')
      }
    
      revalidatePath('/', 'layout')
      redirect('/')
    }
    
      
    //   if (error) {
    //     redirect('/error')
    //   }
    //   revalidatePath('/', 'layout')
    //   redirect('/')

export default loginSupabase