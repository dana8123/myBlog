import app from "./app.js";
import "./models/index.js";
import "./models/post.js";

const PORT = 3000;

const handleListening = () =>
  console.log(`✅Listning on" http://localhost:${PORT}`);

app.listen(PORT, handleListening);