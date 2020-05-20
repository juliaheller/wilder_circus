const app = require('./App');
const path = require('path');
const express = require('express');
app.use(express.static(path.join(__dirname, './client/build')));

app.use(function (req, res, next) {
    console.log(req.method);
    console.log(req.originalUrl);
    res.status(404);
    res.send('404: File Not Found');
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', './client/build/index.html'));
});
app.listen(process.env.PORT, () => {
    console.log('App running on port ' + process.env.PORT);
});
