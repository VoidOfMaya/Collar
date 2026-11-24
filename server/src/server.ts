import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript Node server!");
});

app.get("/api/users", (req: Request, res: Response) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
  ];

  res.json(users);
});

app.post("/api/users", (req: Request, res: Response) => {
  const { name } = req.body;

  res.json({
    message: "User created",
    user: { id: 3, name }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});