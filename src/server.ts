import express from 'express';

const app = express();
app.use(express.json());

app.get(`/`, (req, res) => {
  return res.status(200).json({ message: 'massa' });
});

app.listen(3333);