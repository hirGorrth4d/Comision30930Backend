import minimist from 'minimist';
import Logger from './logger';

const args = minimist(process.argv.slice(2));

if (args.h)
  Logger.verbose(
    'Argumentos validos: port=NUMBER - cluster=true/false'
  );

export const allArguments = args;
export const portArgument = args.port;
export const ClusterArgument = args.cluster;
