import app from "./app.js";

const PORT = 3000;

const handleListening = () =>
  console.log(`✅Listning on" http://localhost:${PORT}`);

app.listen(PORT, handleListening);