import * as fs from 'fs';
import * as path from 'path';
import {HTTPResource, HTTPMethod} from './httpresources';
import {render} from './templates';
const raml1Parser = require('raml-1-parser');

const RAML_SRC = '../api.raml';
const OUT = '../client/src/generated/MeshAPI.ts';

let ramlSpec = raml1Parser.loadApiSync(path.resolve(__dirname, RAML_SRC)).toJSON();
ramlSpec.relativeUri = '';
let resources = new HTTPResource(ramlSpec, '');
fs.writeFileSync(path.resolve(__dirname, OUT), render(resources.resources));