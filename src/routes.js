const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Carlos Pio",
    avatar: "https://github.com/carlospio.png",
    monthlyBudget: 3000,
    daysPerWeek: 5,
    hoursPerDay: 5,
    vacationPerYear: 4,

}


const jobs = [
    {
        id: 1,
        name: "Pizzaria Guloso",
        'daily-hours': 2, 
        'total-hours': 60,
        created_at: Date.now()

    },
    {
        id: 1,
        name: "OneTwo Project",
        'daily-hours': 3, 
        'total-hours': 47,
        created_at: Date.now(),

    }
]

routes.get('/', (req, res) => res.render(views + "index", { jobs }))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {

    const lastId = jobs[jobs.length- 1]?.id || 1;
    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'], 
        'total-hours': req.body['total-hours'],
        created_at: Date.now()


    })

  return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))

module.exports = routes;