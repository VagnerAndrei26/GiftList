const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');

const port = 1225;

const app = express();
app.use(express.json());


// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = '15c562b98f0d4320af5ddeab35da971af21fd8c825268bd7678a29ac5cd5d640';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const {body,name, proof} = req.body;

  const root = verifyProof(proof, name, MERKLE_ROOT);

  // TODO: prove that a name is in the list 
  const isInTheList = false;
  if(isInTheList !== root) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

