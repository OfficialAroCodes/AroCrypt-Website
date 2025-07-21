"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface GitHubAsset {
    id: number;
    name: string;
    browser_download_url: string;
    size: number;
}

export interface GitHubRelease {
    id: number;
    tag_name: string;
    published_at: string;
    assets: GitHubAsset[];
    body: string;
}

interface GithubContextType {
    releases: GitHubRelease[];
    loading: boolean;
    tempDownloadLink: string | null;
    setTempDownloadLink: React.Dispatch<React.SetStateAction<string | null>>;
    error: string | null;
}

const GithubContext = createContext<GithubContextType | undefined>(undefined);

export const GithubProvider = ({ children }: { children: ReactNode }) => {
    const [releases, setReleases] = useState<GitHubRelease[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [tempDownloadLink, setTempDownloadLink] = useState<string | null>(null);

    useEffect(() => {
        const fetchReleases = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch('/api/releases');
                if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
                const data: GitHubRelease[] = await res.json();
                setReleases(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unexpected error');
            } finally {
                setLoading(false);
            }
        };
        fetchReleases();
    }, []);

    return (
        <GithubContext.Provider value={{ releases, loading, error, tempDownloadLink, setTempDownloadLink }}>
            {children}
        </GithubContext.Provider>
    );
};

export function useGithub() {
    const context = useContext(GithubContext);
    if (context === undefined) {
        throw new Error('useGithub must be used within a GithubProvider');
    }
    return context;
}