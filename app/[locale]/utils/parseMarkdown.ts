import { marked } from "marked";

export const parseMarkdown = (markdown: string): string => {
  const result = marked.parse(markdown);

  if (typeof result !== "string") {
    throw new Error(
      "Markdown parsing returned a Promise instead of a string. Consider handling async parsing."
    );
  }

  return result;
};
