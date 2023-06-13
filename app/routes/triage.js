const { data } = require('jquery')
const _ = require('lodash')

module.exports = router => {

  router.post('/triage/DfE-Sign-in-account', (req, res) => {
    if(req.session.data['DfE-Sign-in-account'] == 'dsi') {
      res.redirect('/triage/dfe-sign-in')
    } else {
      res.redirect('/triage/what-type-of-organisation-are-you-buying-for')
    }
  })
  router.post('/triage/what-type-of-organisation-are-you-buying-for', (req, res) => {
    if(req.session.data['what-type-of-organisation-are-you-buying-for'] == 'single') {
      res.redirect('/triage/is-this-the-school-youre-buying-for')
    } else {
      res.redirect('/triage/select-schools-in-your-academy-trust-or-federation')
    }
  })
}