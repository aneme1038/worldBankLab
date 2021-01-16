const express = require('express');
const wbinfo  = express.Router();

const Wbinfo = require('../models/wbinfo.js');

// get count of all documents in collection
wbinfo.get('/count', async ( req, res ) => {
	try {
    const count = await Wbinfo.count();
    res.send(count.toString());
  } catch ( err ) {
    console.log (err.message);
  }
});

// get all region names excluding duplicates
wbinfo.get('/uniqueRegions', async ( req, res ) => {
  try {
    const info = await Wbinfo.distinct('region');
    res.status( 200 ).json(info);
  } catch ( err ){
    console.log ( err );
    res.status(400).json({ err: err.message });
  }
});

// only get regions that match the region name sent through in the uri
wbinfo.get('/byName/:name', async ( req, res ) => {
  try {
    const info = await Wbinfo.find({ region: req.params.name })
    res.status( 200 ).json( info );
  } catch ( err ){
    console.log ( err );
    res.status(400).json({ err: err.message });
  }
});

// index of all records for testing after seeding (redirected from seed route)
// or to get ids for cURL operations
wbinfo.get('/', async (req, res)=> {
  try {
    const info = await Wbinfo.find();
    res.status( 200 ).json( info );
  } catch( err ){
    console.log ( err );
    res.status(400).json({ err: err.message });
  }
});

// create record
wbinfo.post('/', async ( req, res ) => {
  try {
    const info = await Wbinfo.create(req.body);
    res.status( 200 ).json( info );
  } catch ( err ) {
    console.log ( err );
    res.status(400).json({ err: err.message });
  }
});


module.exports = wbinfo;
