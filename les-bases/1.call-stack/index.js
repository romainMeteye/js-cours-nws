export const callStackDemoTrace = () => {
  function last() {
    console.trace('Display trace');
    err();
  }
  function start() {
    console.log('Starting trace()');
    last();
  }

  function err() {
    throw new Error('ouch');
  }

  start();
};
