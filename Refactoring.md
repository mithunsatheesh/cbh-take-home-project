# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I have done the following refactoring changes to improve its readability and maintainability. The code has been simplified by moving all constants outside the main function, adding two new constants HASH_ALGORITHM and HASH_OUTPUT_ENCODING to store hash algorithm and output encoding used by crypto.createHash(), and extracting createHash() calls into a new function called hashData(). The candidate variable has been renamed to partitionKey for better readability. The code has been further simplified by setting partitionKey to DEFAULT_PARTITION_KEY by default. The check for typeof partitionKey !== "string" has been moved after the two possible assignments to partitionKey, and TRIVIAL_PARTITION_KEY has been renamed to DEFAULT_PARTITION_KEY for more precise description of its use. JSDoc comments have been added to document the function and the hashData() helper function.
