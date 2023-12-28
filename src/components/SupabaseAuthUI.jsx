import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import supabaseClient from '../supabaseClient'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function SupabaseAuth() {
  return (
    <Auth   supabaseClient={supabaseClient} providers={['google']} appearance={{ theme: ThemeSupa,className:{button:"text-[#34b27b] hover:text-white"} }}  redirectTo='https://pickpalette.netlify.app/feedback?q=feedback'/>
  )
}