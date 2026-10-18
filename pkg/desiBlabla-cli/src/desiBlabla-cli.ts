#!/usr/bin/env node
// desiBlabla-cli.ts

import { geom_cli } from 'geomcli';
import packag from '../package.json' with { type: 'json' };
import { designList } from './designList.ts';

//console.log('desiBlabla-cli says hello');
await geom_cli(process.argv, designList, packag, 'output');
//console.log('desiBlabla-cli says bye');
