import { marked } from 'marked';

const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
  const titleAttr = title ? ` title="${title}"` : '';
  return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
};

export const parseMarkdown = (body: string): string => marked(body, { renderer });
