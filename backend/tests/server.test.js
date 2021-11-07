import app from '../app'
import supertest from 'supertest'
const requestWithSupertest = supertest(app);


describe('Messages Endpoints', () => {

  it('GET /messages should show all messages', async () => {
    const res = await requestWithSupertest.get('/messages');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining('json'));
  });

  it('POST /messages should show added message', async () => {
    const res = await requestWithSupertest.post('/messages')
      .send({ "message": "just another message" })
      .expect(201)
      .expect("Content-Type", /json/)
      .expect((res) => {
        res.body.length = 1;
        res.body[0] = "message";
      })
  });

});
