const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Carlos Pio",
    avatar: "https://avatars.githubusercontent.com/u/91620684?v=4",
    monthlyBudget: 3000,
    daysPerWeek: 5,
    hoursPerDay: 5,
    vacationPerYear: 4,

}

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", {profile}))

module.exports = routes;