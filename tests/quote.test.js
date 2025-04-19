const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');

// Simulated app and route for test purposes
const app = express();
app.use(express.json());

const fakeToken = jwt.sign({ id: 1, email: 'test@example.com' }, 'test_secret');

app.post('/quotes', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, 'test_secret');
    return res.status(201).json({ message: 'Quote created' });
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden' });
  }
});

describe('Quotes API', () => {
  it('should reject unauthenticated requests', async () => {
    const res = await request(app).post('/quotes').send({
      productId: 'abc123',
      quantity: 10,
      notes: 'Test quote'
    });
    expect(res.statusCode).toBe(401);
  });

  it('should allow authenticated quote creation', async () => {
    const res = await request(app)
      .post('/quotes')
      .set('Authorization', `Bearer ${fakeToken}`)
      .send({
        productId: 'abc123',
        quantity: 10,
        notes: 'Test quote'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Quote created');
  });
});
