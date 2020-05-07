import app from './app'

const PORT = 4000;
const listening = () => {console.log(`listening now from ${PORT}`)};
app.listen(4000, listening())

