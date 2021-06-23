const numCentipedes = () => Math.floor(Math.random() * 100);
const jedPosition = (numCentipedes: number) => Math.floor(Math.random() * numCentipedes);

const play = () => {
  let result = '';
  const j = numCentipedes();
  const p = jedPosition(j);
  for (let i = 0; i < j; i++) {
    if (i === p) {
      result += '🕺';
    } else {
      result += '🐛'
    }
  }
  return result;
}

const output = play();

console.log(output);

addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(output, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/plain",
      },
    }),
  );
});