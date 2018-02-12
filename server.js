const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const bodyParser = require('body-parser');
const stripe = require("stripe")("sk_live_bhBmieHSHgkd8eiFMUCAOizN");
const env = process.env.NODE_ENV || 'development';

const app = express();
const compiler = webpack(webpackConfig);

var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

if (env === 'production') {
    app.use(forceSsl);
}

app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/dist/'));

app.post('/api/charge', (req, res) => {

    var token = req.body.token;
    var cardholderName = req.body.cardholderName;
    var email = req.body.email;
    var address = req.body.address;
    var phone = req.body.phone;
    var occupation = req.body.occupation;
    var chargeAmount = req.body.chargeAmount;

    var charge = stripe
    .charges
    .create({
        amount: chargeAmount * 100,
        currency: "usd",
        source: token,
        description: "SikhsUSA Donation",
        receipt_email: email,
        metadata: {
            'cardholderName': cardholderName,
            'email': email,
            'address': address,
            'phone': phone,
            'occupation': occupation
        }
    }, function (err, charge) {
        if (err) {
            res.status(400);
            res.send(err);
        } else {
            res.status(200);
            res.send('success');
        }
    });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
