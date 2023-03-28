const crypto = require("crypto");

const {
  DEFAULT_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
  HASH_ALGORITHM,
  HASH_OUTPUT_ENCODING,
} = require("./constants");

/**
 * Hashes data using the specified algorithm and output encoding.
 * @param {string} data - The data to hash.
 * @returns {string} The hashed data.
 */
function hashData(data) {
  return crypto
    .createHash(HASH_ALGORITHM)
    .update(data)
    .digest(HASH_OUTPUT_ENCODING);
}

/**
 * Generates a deterministic partition key for the given event object.
 * @param {Object} event - The event object to generate a partition key for.
 * @param {string} [event.partitionKey] - The partition key to use if specified.
 * @returns {string} The generated partition key.
 */
exports.deterministicPartitionKey = (event) => {
  let partitionKey = DEFAULT_PARTITION_KEY;

  if (event && event.partitionKey) {
    partitionKey = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    partitionKey = hashData(data);
  }

  if (typeof partitionKey !== "string") {
    partitionKey = JSON.stringify(partitionKey);
  }

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = hashData(partitionKey);
  }

  return partitionKey;
};
