import { readFileSync } from 'fs';

export interface Config {
  license: string;
}

function readConfig(): Config {
  const config: Config = JSON.parse(
    readFileSync('./settings/config.json', 'utf8')
  );
  return config;
}
