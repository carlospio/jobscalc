module.exports = {
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