const _ = require('lodash')

module.exports = router => {

  router.post('/specify/start/', (req, res) => {
    res.redirect('/specify/sign-in')
  })

  router.post('/specify/sign-in/', (req, res) => {
    res.redirect('/specify/dashboard')
  })

  router.post('/specify/what-are-you-buying/', (req, res) => {
    res.redirect('/specify/name-your-specification')
  })

  router.post('/specify/name-your-specification/', (req, res) => {
    res.redirect('/specify/create-specification')
  })

  router.post('/specify/create-specification/', (req, res) => {
    res.redirect('/specify/view-specification-summary')
  })

  router.post('/specify/question/01-school-mission-statement/', (req, res) => {
    res.redirect('/specify/question/check-answers')
  })

  router.post('/specify/question/check-answers/', (req, res) => {
    res.redirect('/specify/create-specification')
  })
/*
  router.post('/report/your-organisation/address', (req, res) => {
    res.redirect('/report/your-organisation/check-answers')
  })

  router.post('/report/your-organisation/check-answers', (req, res) => {
    res.redirect('/report')
  })
*/
}
