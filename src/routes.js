const express = require('express')
const routes = express.Router()
const ProfileController = require('./controllers/ProfileController')
const JobController = require('./controllers/JobController')




const Job = {
   
    services: {
        remainingDays(job) {

            const remaingDays = (job['total-hours'] / job['daily-hours']).toFixed()

            const createdDate = new Date(job.created_at)

            const dueDay = createdDate.getDate() + Number(remaingDays)

            const dueDateInMs = createdDate.setDate(dueDay)

            const timeDiffInms = dueDateInMs - Date.now()

            // transform ms in days
            const dayInMs = 1000 * 60 * 60 * 24
            const dayDiff = Math.floor(timeDiffInms / dayInMs)

            return dayDiff


        },
        calculateBudget: (job, valueHour) => valueHour * job['total-hours']
    }
}




routes.get('/', JobController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)

module.exports = routes;