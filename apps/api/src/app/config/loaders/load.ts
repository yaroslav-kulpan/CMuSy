import * as yaml from 'js-yaml';
import deepmerge from 'deepmerge';
import * as dotenv from 'dotenv';

import nodejs from "../../shared/utils/nodejs";
import {validate} from '../validations/envitoment.validation';
import {EnvironmentVariables} from "../dto/environments.dto";

const BASE_PATH = nodejs.process.cwd();
const DIRECTORY_CONFIG_PATH = 'apps/api/config';
const YML_CONFIG_DEFAULT_FILENAME = 'default.yml';
const YML_CONFIG_FILENAME = 'development.yml';
const ENV_LOCAL = '.env.local';

const defaultConfigPathname = nodejs.path.join(
  BASE_PATH,
  DIRECTORY_CONFIG_PATH,
  YML_CONFIG_DEFAULT_FILENAME
);
const configPathname = nodejs.path.join(
  BASE_PATH,
  DIRECTORY_CONFIG_PATH,
  YML_CONFIG_FILENAME
);

const defaultConfig = yaml.load(nodejs.fs.readFileSync(defaultConfigPathname, 'utf8'));
const config = yaml.load(nodejs.fs.readFileSync(configPathname, 'utf8'));

const env = dotenv.config({
  path: nodejs.path.join(BASE_PATH, DIRECTORY_CONFIG_PATH, ENV_LOCAL),
});

export default () => {
  return {
    ...(deepmerge(defaultConfig, config)),
    NODE_ENV: process.env.NODE_ENV,
    ...(validate(env.parsed, EnvironmentVariables) || {}),
  } as Record<string, any>;
};
