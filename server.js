/**
 * @author Massimiliano Izzo
 */

const express = require('express'), port = process.env.PORT || 3000,
    compression = require('compression'),
    app = express(), path = require('path'),
    fs = require('fs');
    // Promise = require('bluebird'),
    // readFile = Promise.promisify(require('fs').readFile),
    // cheerio = require('cheerio'),
    // generateSitemap = require('./scripts/generateSitemap'),
    // sitemap = generateSitemap(),
    // ISATAB_INDEX_FILE = 'isatab-index.json',
    // INVESTIGATIONS_ID_REGEX = /^sdata/;

const indexHtmlFile = path.resolve(__dirname, 'index.html');


app.use(compression());

app.use('/dist', express.static(`${__dirname}/dist`));
// app.use('/assets', express.static(`${__dirname}/assets`));
// app.use('/data', express.static(`${__dirname}/data`));
// app.use('/isatab-index.json', express.static(`${__dirname}/isatab-index.json`));


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (req, res){
    console.log('Redirecting to index.html...');
    res.sendFile(indexHtmlFile);
});

app.listen(port, () => {
    console.log(`BioSHaring Widget Test listening on port ${port}`);
});
