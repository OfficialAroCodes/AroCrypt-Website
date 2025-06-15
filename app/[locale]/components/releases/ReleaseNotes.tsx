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
                .replace(/\[!NOTE\]/g, '## Note:')
                .replace(/\[!TIP\]/g, '### Tip:')
                .replace(/\[!IMPORTANT\]/g, '### Important:')
                .replace(/\[!WARNING\]/g, '### Warning:')
                .replace(/\[!CAUTION\]/g, '### Caution:')
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
