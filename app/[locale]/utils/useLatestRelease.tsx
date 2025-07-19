'use client';

import { useState, useEffect } from 'react';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  assets: GitHubAsset[];
}

interface ReleaseInfo {
  version: string;
  date: string;
  winFiles: { name: string; url: string; sizeMB: string }[];
  linuxFiles: { name: string; url: string; sizeMB: string }[];
  macFiles: { name: string; url: string; sizeMB: string }[];
}

export function useLatestRelease() {
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestRelease() {
      try {
        const res = await fetch('/api/releases');
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const data: GitHubRelease[] = await res.json();

        if (!data || data.length === 0) {
          throw new Error('No releases found');
        }

        const latest = data[0];

        const parseAssets = (extensions: string[]) =>
          latest.assets
            .filter(asset => extensions.some(ext => asset.name.endsWith(ext)))
            .map(asset => ({
              name: asset.name,
              url: asset.browser_download_url,
              sizeMB: (asset.size / (1024 * 1024)).toFixed(2),
            }));

        setReleaseInfo({
          version: latest.tag_name,
          date: latest.published_at,
          winFiles: parseAssets(['.exe']),
          linuxFiles: parseAssets(['.deb', '.AppImage']),
          macFiles: parseAssets(['.dmg']),
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unexpected error');
        }
      }
    }

    fetchLatestRelease();
  }, []);

  return { releaseInfo, error };
}
