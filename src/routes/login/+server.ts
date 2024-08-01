// login API

import { generateToken, verifyToken } from "$lib/utils/jwt";
import { mysqlconFn } from "$lib/utils/mysql";
import { json } from "@sveltejs/kit";

export async function POST ({request, cookies}) {
  const {userId, password} = await request.json();
  console.log("Username : " + userId)
  console.log("Password : " + password)
  if (cookies.get('accessToken'))  {
      const token: null|object = verifyToken(cookies.get('accessToken'))

      if (token) return cookies.get('accessToken')
  }

  console.log(cookies.get('accessToken'))

  const mysqlconn = await mysqlconFn();

  try {
    const result = await mysqlconn.query("SELECT password, username FROM authentication WHERE username='" + userId + "';").then(function ([rows]) {
        console.log(rows)
        return rows;
    })
    // now that we have email and password check if they match database data
    


    const count = Object.keys(result).length;
    if (count == 0) throw new Error(404, "User not found")
    if (count > 1) throw new Error(500, "Internal server error")
    if (result[0].password != password) return json('Password does not match', {status: 401})

    
    const token = generateToken(result[0].username, result[0].role)
    return json(token, {status: 201});
  }catch(err) {
        console.error("Error fetching datas")
        console.log(err)
  }


}
