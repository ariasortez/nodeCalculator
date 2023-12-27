import { yarg } from './config/plugins/yargs.plugin';

(async () => {
  await main();
  console.log('Main Executed');
})();

async function main() {
  console.log(yarg);
}
