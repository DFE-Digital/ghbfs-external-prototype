const { data } = require('jquery')
const _ = require('lodash')

module.exports = router => {

  router.post('/triage/choose-signin', (req, res) => {
    if(req.session.data['signin'] == 'dsi') {
      res.redirect('/triage/dfe-sign-in')
    } else {
      res.redirect('/triage/what-type-school')
    }
  })


  router.post('/triage/what-type-school', (req, res) => {
    if(req.session.data['type-organisation'] == 'single') {
      res.redirect('/triage/search-for-your-school')
    } else {
      res.redirect('/triage/search-for-an-academy-trust-or-federation')
    }
  })

  router.post('/triage/search-for-your-school', (req, res) => {
    res.redirect('/triage/check-school')
  })

  router.post('/triage/search-for-an-academy-trust-or-federation', (req, res) => {
    res.redirect('/triage/check-academy')
  })

  router.post('/triage/check-school', (req, res) => {
    if(req.session.data['correct-school'] == 'yes') {
      res.redirect('/triage/contact-details')
    } else {
      res.redirect('/triage/search-for-your-school')
    }
  })

  router.post('/triage/check-academy', (req, res) => {
    if(req.session.data['correct-academy'] == 'yes') {
      res.redirect('/triage/select-schools-in-your-academy-trust-or-federation')
    } else {
      res.redirect('/triage/search-for-an-academy-trust-or-federation')
    }
  })

 
  router.post('/triage/select-schools-in-your-academy-trust-or-federation', (req, res) => {
    res.redirect('/triage/are-these-the-schools-youre-buying-for')
  })

  router.post('/triage/are-these-the-schools-youre-buying-for', (req, res) => {
    if(req.session.data['correct-academy'] == 'yes') {
      res.redirect('/triage/contact-details')
    } else {
      res.redirect('/triage/select-schools-in-your-academy-trust-or-federation')
    }
  })

  router.post('/triage/access-needs', (req, res) => {
    if(req.session.data['access-details'] == 'yes') {
      res.redirect('/triage/check-your-answers')
    } else {
      res.redirect('/triage/check-your-answers-single-school')
    }
  })

  router.post('/triage/is-there-anything-else-we-should-know', (req, res) => {
    res.redirect('/triage/access-needs')
  })

  router.post('/triage/documents-uploaded', (req, res) => {
    res.redirect('/triage/is-there-anything-else-we-should-know')
  })
  
}

