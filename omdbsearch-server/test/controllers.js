/** created by ozgur 2019-08-20**/
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require('../app');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Api Test', function () {
    describe('#GET "/api/search?keyword=love" -> searchController', function () {
        it("Should return movies", done => {
            chai.request(app)
                .get("/api/search?keyword=love")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        it("Should return 20 movies", done => {
            chai.request(app)
                .get("/api/search?keyword=love")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('Search');
                    res.body.should.have.property('Search')
                        .to.be.a("array")
                        .with.lengthOf(20);
                    done();
                });
        })
    })
});
