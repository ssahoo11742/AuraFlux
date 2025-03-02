const express = require('express');
const app = express();

app.use(express.static(__dirname)); // Serve files in the directory

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});
