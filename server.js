const express        = require( 'express' ),
      mongoose       = require( 'mongoose' ),
      port           = 3000 || process.env.PORT,
      app            = express(),
      db             = mongoose.connection;

mongoose.Promise   = global.Promise;
const mongoURI  = 'mongodb://localhost/world_bank_loan_app';

// Connect to Mongo
mongoose.connect ( mongoURI , { useMongoClient: true});

// Error / success
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'mongo connected: ', mongoURI ));
db.on( 'disconnected', () => console.log( 'mongo disconnected' ));

// open the connection to mongo
db.on( 'open' , ()=>{
  console.log('Connection made!');
});
//middleware
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON

var wbinfoController = require( './controllers/wbinfoController' );
var seedController = require( './controllers/seedController' );

//routes
app.use( '/wbinfo', wbinfoController );
app.use( '/seed', seedController );

//middleware public / static
app.use( express.static( 'public' ));

//event listener port
app.listen( port, () => {
    console.log('=======================');
    console.log('Running on port ' + port);
    console.log('=======================');
});
