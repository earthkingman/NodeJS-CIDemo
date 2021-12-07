const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('../../index.js')

describe('GET /users', () => {
    describe('성공', () => {
        it('성공', done => {
            request(app)
                .get('/users')
                .end((err, res) => {
                    res.body.should.be.instanceof(Array)
                    res.body.forEach(user => {
                        user.should.have.property('name')
                    })
                })
            done()
        })
        it('최대 limit 갯수만큼 응답한다.', done => {
            request(app)
                .get('/users?limit=2')
                .end((err, res) => {
                    res.body.should.have.lengthOf(2)
                })
            done()
        })
    })
    describe('실패', () => {
        it('limit이 정수가 아니면 400을 응답한다', done => {
            request(app)
                .get('/users?limit==two')
                .expect(400)
                .end(done)
        })
    })
})




