import { yarg } from './config/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';

(async () => {
  await main();
  console.log('Main Executed');
})();

async function main() {
  const { b: base, l: limit, s: showTable } = yarg;
  ServerApp.run({ base, limit, showTable });
}
