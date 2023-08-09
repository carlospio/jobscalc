const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const Profile = {
    data: {
        name: "Carlos Pio",
        avatar: "https://github.com/carlospio.png",
        monthlyBudget: 3000,
        daysPerWeek: 5,
        hoursPerDay: 5,
        vacationPerYear: 4,
        valueHour: 75,
    
    },
    controllers: {
        index(req, res){
            return res.render(views + "profile", { profile: Profile.data })
        },

        update(req, res){
            
        },
    }
}

const Job = {
    data: [
        {
            id: 1,
            name: "Pizzaria Guloso",
            'daily-hours': 2,
            'total-hours': 10,
            created_at: Date.now()

        },
        {
            id: 2,
            name: "OneTwo Project",
            'daily-hours': 3,
            'total-hours': 47,
            created_at: Date.now(),

        },
        {
            id: 3,
            name: "Projeto 3",
            'daily-hours': 4,
            'total-hours': 50,
            created_at: Date.now(),

        }
    ],
    controllers: {
        index(req, res) {
            const updateJobs = Job.data.map((job) => {
                const remaining = Job.services.remainingDays(job)
                const status = remaining <= 0 ? 'done' : 'progress'

                return {
                    ...job,
                    remaining,
                    status,
                    budget: Profile.data.valueHour * job['total-hours']
                }
            })
            return res.render(views + "index", { jobs: updateJobs })

        },

        create(req,res){
           return  res.render(views + "job")
        },

        save(req, res) {
            const lastId = Job.data[Job.data.length - 1]?.id || 1;
            Job.data.push({
                id: lastId + 1,
                name: req.body.name,
                'daily-hours': req.body['daily-hours'],
                'total-hours': req.body['total-hours'],
                created_at: Date.now()


            })

            return res.redirect('/')

        }
    },
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


        }
    }
}




routes.get('/', Job.controllers.index)
routes.get('/job', Job.controllers.create)
routes.post('/job', Job.controllers.save)
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', Profile.controllers.index)
routes.post('/profile', Profile.controllers.update)

module.exports = routes;