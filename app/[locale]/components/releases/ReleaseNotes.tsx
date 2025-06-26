'use client';

import { parseMarkdown } from '@/[locale]/utils/parseMarkdown';
import { useState, useEffect } from 'react';

interface ReleaseNotesProps {
    markdownContent: string;
}

const ReleaseNotes: React.FC<ReleaseNotesProps> = ({ markdownContent }) => {
    const [htmlContent, setHtmlContent] = useState<string>('');

    useEffect(() => {
        const preprocessMarkdown = (markdown: string): string => {
            return markdown
                .replace(/\[!NOTE\]/g, '')
                .replace(/\[!TIP\]/g, '')
                .replace(/\[!IMPORTANT\]/g, '')
                .replace(/\[!WARNING\]/g, '')
                .replace(/\[!CAUTION\]/g, '')
        };

        const html = parseMarkdown(preprocessMarkdown(markdownContent));

        setHtmlContent(html);
    }, [markdownContent]);

    return (
        <div
            className="release_notes"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
};

export default ReleaseNotes;
