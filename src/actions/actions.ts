'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { LinkEntity } from '@/types/types'

export async function login(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export const addLink = async (link: LinkEntity) => {
  try {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: { user }, error: userError } = await supabase.auth.getUser()

    const { error } = await supabase.from('links').insert({
      name: link.name,
      url: link.url,
      user_id: user?.id,
    })

    if (error) {
      return {
        error: 'There was an error adding the link',
      }
    }

    // TODO!: Use Realtime Sockets Functions from Supabase if not work revalidateTags()
    revalidatePath('/profile', 'layout')
  } catch (error) {
    console.error(error)
    redirect('/error')
  } finally {
    revalidatePath('/profile', 'layout')
  }
}
