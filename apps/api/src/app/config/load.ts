import {readFileSync} from 'fs';
import * as yaml from 'js-yaml';
import deepmerge from 'deepmerge';
import {join} from 'path';
import * as dotenv from "dotenv";
import {validateEnv} from "./validations/envitoment.validation";

const BASE_PATH = process.cwd();
const DIRECTORY_CONFIG_PATH = "apps/api/config";
const YML_CONFIG_DEFAULT_FILENAME = 'default.yml';
const YML_CONFIG_FILENAME = 'development.yml';
const ENV_LOCAL = ".env.local";

const defaultConfigPathname = join(BASE_PATH, DIRECTORY_CONFIG_PATH, YML_CONFIG_DEFAULT_FILENAME);
const configPathname = join(BASE_PATH, DIRECTORY_CONFIG_PATH, YML_CONFIG_FILENAME);

const defaultConfig = yaml.load(readFileSync(defaultConfigPathname, 'utf8'));
const config = yaml.load(readFileSync(configPathname, 'utf8'));

const env = dotenv.config({
  path: join(BASE_PATH, DIRECTORY_CONFIG_PATH, ENV_LOCAL),
});

export default () => {
  return {
    ...deepmerge(defaultConfig, config),
    env: {...(validateEnv(env.parsed) || {}), NODE_ENV: process.env.NODE_ENV}
  } as Record<string, any>;
}
