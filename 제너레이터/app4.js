const fetch = require('node-fetch');

const async = (generatorFunc) => {
  const generator = generatorFunc();

  const onResolved = (arg) => {
    const result = generator.next(arg);

    return result.done
      ? result.value
      : result.value.then((res) => onResolved(res));
  };
  return onResolved;
};
