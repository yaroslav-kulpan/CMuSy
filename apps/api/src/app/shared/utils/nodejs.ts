import fs from 'node:fs';
import fsp from 'node:fs/promises';
import zlib from "node:zlib"
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import http from 'node:http';
import util from 'node:util';
import crypto from 'node:crypto';
import timers from 'node:timers';

const nodejs = { fs, fsp, path, zlib, vm, os, http, util, crypto, timers, process };
Object.freeze(nodejs);
export default nodejs;
