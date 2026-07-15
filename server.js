const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const delay = ms => new Promise(res => setTimeout(res, ms));

app.set('trust proxy', 1);

app.listen(PORT, () => console.log(`Сервер на порту ${PORT}`));
