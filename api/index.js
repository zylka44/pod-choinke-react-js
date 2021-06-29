const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'marchewka4',
    database: 'pod_choinke',
  },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: 0,
      name: 'Dorota',
      email: 'dorota@gmail.com',
      password: 'roraty',
      joined: new Date(),
    },
    {
      id: 1,
      name: 'Tolek',
      email: 'tolek@gmail.com',
      password: 'piernik',
      joined: new Date(),
    },
    {
      id: 2,
      name: 'Kasia',
      email: 'kasia@gmail.com',
      password: 'sanki',
      joined: new Date(),
    },
  ],
};

app.get('/', (req, res) => {
  res.send(database.users);
});

app.post('/signin', (req, res) => {
  if (
    database.users.some((user) => {
      return req.body.email === user.email && req.body.password === user.password;
    })
  ) {
    res.json('success');
  } else {
    res.status(400).json('error login in');
  }
});

app.post('/register', (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date(),
    })
    .then((user) => res.json(user[0]))
    .catch((err) => res.status(400).json('unable to register'));
});

app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  if (database.users.every((user) => user.id !== +id)) {
    res.send(400).json('no such user');
  } else {
    const selectedUser = database.users.find((user) => user.id === +id);
    res.json(selectedUser);
  }
});

app.listen(3000, () => {
  console.log('api is running on port 3000');
});
