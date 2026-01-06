export async function sql(query, params = []) {
  const res = await fetch('http://localhost:3001/sql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, params })
  });
  return res.json();
}