import fs from 'fs/promises';
import path from 'path';
import { parseMarkdown } from './parseMarkdown';

export interface CMSHobbies {
  html: string;
}

const basePath = process.cwd();
const hobbiesPath = path.join(basePath, 'edit-me', 'cms', 'hobbies.md');

export const getHobbies = async (): Promise<CMSHobbies> => {
  const file = await fs.readFile(hobbiesPath);

  const html = parseMarkdown(file.toString());

  return {
    html,
  };
};
