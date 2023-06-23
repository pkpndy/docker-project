const app = require('express')();

app.get('/', (req,res) => {
    res.json({message: 'Docker is easy 🦈'})
});

const port = 8080;

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
});