import { verifyToken } from "$lib/utils/jwt"
import type { jwt } from "$lib/types"
import { redirect } from "@sveltejs/kit"
import { goto } from "$app/navigation"

export function load({cookies}) {
  if (cookies.get('accessToken'))  {
    const token: null|jwt = verifyToken(cookies.get('accessToken'))
    if (token != null && token.exp > Date.now()) {
      return {username: token.sub, connected: true}
    }
  }
}

export const actions = {
  deleteCookie: async ({cookies}) => {
    if (cookies.get('accessToken')) {
      cookies.delete("accessToken", {path: '/'})
      goto('/login')
    }
  }
}
