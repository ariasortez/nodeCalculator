export interface CreateTableOptions {
  base: number;
  limit?: number;
  show?: boolean;
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /* DI - Dependenci Injection */
  }

  execute({ base, limit = 10, show = false }: CreateTableOptions) {
    let outputMessage = '';
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${limit} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
