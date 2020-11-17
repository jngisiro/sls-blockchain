import Block from '../src/block';

describe('Block', () => {
  const timestamp = new Date('01/01/01');
  const lastHash = 'foo-lastHasg';
  const hash = 'foo-hash';
  const data = ['blockchain', 'data'];

  const block = new Block(timestamp, lastHash, hash, data);

  it('should have a timestamp, lasthash, hash and data property', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
