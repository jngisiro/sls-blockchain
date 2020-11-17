class Block {
  constructor(
    public timestamp: Date,
    public lastHash: string,
    public hash: string,
    public data: any
  ) {}
}

export default Block;
