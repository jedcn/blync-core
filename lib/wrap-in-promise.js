function wrapInPromise(context, fn) {
  return new Promise(function(resolve, reject) {
    try {
      const result = fn.call(context);
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = wrapInPromise;
