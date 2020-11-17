class Block {
  constructor(
    public timestamp: Date,
    public lastHash: string,
    public hash: string,
    public data: any
  ) {}
}

const block1 = new Block(
  new Date('01,01,01'),
  'foo-lastHash',
  'foo-hash',
  'foo-data'
);

console.log('block1', block1);
