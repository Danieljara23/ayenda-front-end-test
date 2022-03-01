export async function apiFetch() {
  const res = await fetch(process.env.FIREBASE_DATABASE_URL).then ((response) => response.json() )
  return res;
}
