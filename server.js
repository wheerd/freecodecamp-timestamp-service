const express = require('express')
const moment = require('moment')
const app = express()

app.get('/:date', function (req, res) {
    var parsed = null;
    if (req.params.date.match(/^\d+$/)) {
        parsed = moment(parseInt(req.params.date) * 1000);
    } else {
        parsed = moment(req.params.date);
    }
    if (!parsed.isValid()) {
        res.json({ unix: null, natural: null });
    } else {
        res.json({
            unix: parseInt(parsed.format('X')),
            natural: parsed.format('MMMM D, YYYY')
        });
    }
})

app.listen(8080, function () {
  console.log('Timestamp service listening on port 8080!')
})
