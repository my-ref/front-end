export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*': 'prettier --write --ignore-unknown',
};
