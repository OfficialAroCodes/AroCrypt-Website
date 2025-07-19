import { NextResponse } from 'next/server';

let cache: unknown[] | null = null;
let lastFetch = 0;

export async function GET() {
  const now = Date.now();
  const isExpired = now - lastFetch > 60_000;

  if (!cache || isExpired) {
    try {
      const response = await fetch('https://api.github.com/repos/OfficialAroCodes/arocrypt/releases', {
        headers: {
          'User-Agent': 'AroCrypt-App',
          'Accept': 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('GitHub fetch failed:', response.status, errText);
        return NextResponse.json({ error: 'GitHub fetch failed' }, { status: response.status });
      }

      cache = await response.json();
      lastFetch = now;
    } catch (err) {
      console.error('GitHub fetch error:', err);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }

  return NextResponse.json(cache);
}