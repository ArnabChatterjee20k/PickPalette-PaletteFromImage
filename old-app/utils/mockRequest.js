export default function mockRequest(timeout) {
  return new Promise(
    (resolve) =>
      setTimeout(() => {
        console.log("mock request over after " + timeout);
        resolve();
      },timeout),
  );
}
