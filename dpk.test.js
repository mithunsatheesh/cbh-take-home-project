const { deterministicPartitionKey } = require("./dpk");
const {
  DEFAULT_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
} = require("./constants");

describe("deterministicPartitionKey", () => {
  it(`Returns the value as "${DEFAULT_PARTITION_KEY}" when given no input`, () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe(DEFAULT_PARTITION_KEY);
  });

  it(`Returns the value as "${DEFAULT_PARTITION_KEY}" when given null as input`, () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe(DEFAULT_PARTITION_KEY);
  });

  it("Returns the random hash when given an empty object as input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toEqual(expect.any(String));
  });

  it(`Returns the same partitionKey as output if length is under ${MAX_PARTITION_KEY_LENGTH}`, () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "0".repeat(MAX_PARTITION_KEY_LENGTH),
    });
    expect(trivialKey).toEqual("0".repeat(MAX_PARTITION_KEY_LENGTH));
  });

  it(`Returns a different partitionKey as output if length is above ${MAX_PARTITION_KEY_LENGTH}`, () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "0".repeat(MAX_PARTITION_KEY_LENGTH + 1),
    });
    expect(trivialKey).not.toBe("0".repeat(MAX_PARTITION_KEY_LENGTH + 1));
    expect(trivialKey).toEqual(expect.any(String));
  });
});
