const _ = require('lodash')
const frameworks = require(`../data/frameworks.js`);

module.exports = router => {

  router.post('/faf/start', (req, res) => {
    res.redirect('/faf/selection')
  })

  router.post('/faf/selection', (req, res) => {
    res.redirect('/faf/service-output')
  })

  router.post('/faf/service-output', (req, res) => {
    //req.session.data['radio-selected'] = "start"
    //req.session.data['prevPage'] = "/faf/questions?radio-selected=service-output"
    req.session.data['radio-options'] = [
      { text: "Goods" },
      { text: "Services" }
    ]

    res.redirect('/faf/questions')
  })

  router.post('/faf/questions', (req, res) => {

    // how does the back link work
    // does it need a prev
    /*
    if (req.session.data['radio-selected'] == "start") {
      req.session.data['prevPage'] = "/faf/questions?radio-selected=service-output"
      req.session.data['radio-options'] = [
        { text: "Goods" },
        { text: "Services" }
      ]
    }
    */

    if (req.session.data['radio-selected'] == "Goods") {
      //req.session.data['prevPage'] = "/faf/questions?radio-selected=start"
      req.session.data['radio-options'] = [
        { text: "Air cleaning units" },
        { text: "Books, stationery and education supplies"},
        { text: "Furniture"},
        { text: "ICT"},
        { text: "Personal protective equipment (PPE) and cleaning"}
      ]
    }

    if (req.session.data['radio-selected'] == "Air cleaning units") {
      let framework = frameworks.find(framework => framework.shortName == "CSC");
      console.log("FRAMEWORK")
      console.log(framework.longName)
      
      

      
      req.session.data['framework'] = [
        { name: "framework" },
        { shortname: "FMW"}
      ]
      
      res.redirect('/faf/framework')
      return;
    }








    if (req.session.data['radio-selected'] == "Services") {
      //req.session.data['prevPage'] = "/faf/questions?radio-selected=start"
      req.session.data['radio-options'] = [
        { text: "Consultancy services" },
        { text: "Energy and utilities" },
        { text: "Facilities management and estates" },
        { text: "Financial" },
        { text: "ICT" },
        { text: "Legal" },
        { text: "Recruitment, HR and training" },
        { text: "Transport" }
      ]
    }



    res.redirect('/faf/questions')
  })

  

}
