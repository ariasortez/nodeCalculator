import fs from 'fs';

export interface Options {
  fileContent: string;
  fileName?: string;
  fileDestination?: string;
}

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileName = 'table',
    fileDestination = 'outputs',
  }: Options) {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
