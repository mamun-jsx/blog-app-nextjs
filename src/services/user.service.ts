import { cookies } from "next/headers";

const AUTH_URL = process.env.AUTH_URL;

export const userService = {
  getSelection: async function () {
    try {
      const cookieStore = await cookies();
      console.log(cookieStore);
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      return { data: session, error: null };
    } catch (error) {
      console.log(error);
      return { date: null, error: { message: "something went wrong" } };
    }
  },
};
