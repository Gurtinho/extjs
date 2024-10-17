import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true })); // req.body
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public'))); // Para servir arquivos estáticos

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/products', (req: Request, res: Response) => {
  console.log('chamou');
  res.json({
    teste: 'ok'
  });
});


interface DataProps {
  name: string
  email: string
}

app.post('/products/create', (req: Request, res: Response) => {
  const { name, email }: DataProps = req.body;
  console.log(name);
  console.log(email);
  res.json({
    message: 'ok'
  });
});

app.listen(3333, () => {
  console.log("rodando a aplicação");
});