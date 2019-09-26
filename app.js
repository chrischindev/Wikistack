const morgan = require('morgan');
const express = require('express');
const app = express();
const {layout, main} = require('./views')
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/stylesheets'));
app.use('/wiki', wikiRouter);
//app.use('/user', userRouter);

app.get('/', (req, res, next) => {
    res.send(main(''))
});

models.db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

const init = async () => {
    await models.db.sync()
    app.listen(PORT, () => {
        console.log(`Server listening in port ${PORT}`)
    })
}

init();

// app.listen(PORT, () => {
//     console.log(`App listening in port ${PORT}`)
// });