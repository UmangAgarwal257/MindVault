
import express , {Request , Response} from "express"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api/v1/signup", (req : Request , res : Response) => {
  res.send("Hello World");
})

app.post("/api/v1/signin" , (req : Request , res : Response) => {
  res.send("Hello World");
});

app.post("/api/v1/content" , (req : Request , res : Response) => {
  res.send("Hello World");
});

app.get("/api/v1/content" , (req : Request , res : Response) => {
  res.send("Hello World");
});

app.delete("/api/v1/content" , (req : Request , res : Response) => {
  res.send("Hello World");
});

app.post("/api/v1/brain/share" , (req : Request , res : Response) => {
  res.send("Hello World");
});

app.get("/api/v1/brain/:shareLink" , (req : Request , res : Response) => {
  res.send("Hello World");
});

app.listen(PORT , () => {
  console.log(`Server listening on port ${PORT}`)
});