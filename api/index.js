import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';


let mdb;
MongoClient.connect(config.mongodbUri, function (err, client) {
  assert.equal(null, err);
  var db = client.db('test');
  mdb = db;
});

const router = express.Router();

router.get('/contests', (req, res) => {
    let contests = {};
    mdb.collection('contests').find()
    .project({
        id: 1,
        categoryName: 1,
        contestName: 1
    })
    .forEach(function (contest, error) {
        contests[contest.id] = contest;
    }, function () {
        res.send({contests});
    });
  });

router.get('/contests/:contestId',(req,res) => {
    mdb.collection('contests')
    .findOne({id : Number(req.params.contestId)})
    .then(contest => res.send(contest))
    .catch(console.error)
})

export default router