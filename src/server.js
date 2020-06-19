import 'dotenv/config';

import app from './app';

app.listen(process.env.PORT);
console.log('Server running at http://localhost:3333');
