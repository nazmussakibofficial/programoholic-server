const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

const categories = require('./data/categories.json')
const course = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('Courses API Running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(course)
    }
    else {
        const category_course = course.filter(n => n.category_id === id);
        res.send(category_course)
    }

})

app.get('/course', (req, res) => {
    res.send(course)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedcourse = course.find(n => n._id === id);
    res.send(selectedcourse);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})