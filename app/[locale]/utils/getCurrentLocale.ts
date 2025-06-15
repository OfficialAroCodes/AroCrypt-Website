import { cookies } from "next/headers";

export const getCurrentLocale = async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
  if (cookieLocale) return cookieLocale;

  return "en";
};
