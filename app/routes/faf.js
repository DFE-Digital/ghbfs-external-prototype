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
    res.redirect('/faf/what-are-you-buying')
  })

  router.post('/faf/service-output', (req, res) => {
    res.redirect('/faf/what-are-you-buying')
  })

  router.post('/faf/what-are-you-buying', (req, res) => {
    if (req.session.data['goods-or-services'] == "goods") {
      res.redirect('/faf/goods')
    } else {
      res.redirect('/faf/services')
    }
  })

  router.post('/faf/goods', (req, res) => {
    if (req.session.data['goods'] == "furniture" || req.session.data['goods'] == "air-cleaning") {
      let framework = frameworks.find(framework => framework.category == req.session.data['goods']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/framework')
      return;
    }

    if (req.session.data['goods'] == "ppe") { 
      let framework = frameworks.filter(framework => framework.category == req.session.data['goods']);
      req.session.data['framework'] = framework;
      //console.log(framework)
      res.redirect('/faf/matching-frameworks')
      return;
    }

    res.redirect(`/faf/goods/${req.session.data['goods']}`)
  })

  router.post('/faf/services', (req, res) => {
    if (req.session.data['services'] == "consultancy-services" || req.session.data['services'] == "legal" || req.session.data['services'] == "transport") {
      let framework = frameworks.find(framework => framework.category == req.session.data['services']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/framework')
      return;
    }

    if (req.session.data['services'] == "energy") {
      res.redirect('/faf/services/energy-update')
      return;
    }

    res.redirect(`/faf/services/${req.session.data['services']}`)
  })

  router.post('/faf/services/energy-update', (req, res) => {
    res.redirect('/faf/services/energy')
  })

  router.post('/faf/services/energy', (req, res) => {
    if (req.session.data['energy'] == "electricity") {
      res.redirect(`/faf/services/energy/${req.session.data['energy']}`)
      return
    }
    
    let framework = frameworks.filter(framework => framework.category == req.session.data['energy']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/matching-frameworks')
    return
  })

  router.post('/faf/services/energy/electricity', (req, res) => {
    if (req.session.data['electricity'] == "meter-half-hourly") {
      let framework = frameworks.filter(framework => framework.category == req.session.data['electricity']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/matching-frameworks')
      return
    }

    res.redirect(`/faf/services/energy/${req.session.data['electricity']}`)
  })

  router.post('/faf/services/energy/non-half-hourly', (req, res) => {
    //if (req.session.data['electricity'] == "meter-half-hourly") {
    let framework = frameworks.filter(framework => framework.category == "non-half-hourly");
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/matching-frameworks')
    //  return
    //}

    //res.redirect(`/faf/services/energy/${req.session.data['electricity']}`)
  })

  router.post('/faf/services/energy-efficiency', (req, res) => {

    console.log(req.session.data['energy-efficiency']);
    if (req.session.data['energy-efficiency'] != "lighting" ) {
      let framework = frameworks.find(framework => framework.category == req.session.data['energy-efficiency']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/framework')
      return;
    }

    let framework = frameworks.filter(framework => framework.category == req.session.data['energy-efficiency']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/matching-frameworks')  
  })


  router.post('/faf/services/facilities', (req, res) => {
    console.log(req.session.data['facilities']);

    if (req.session.data['facilities'] == "building-maintenance" || req.session.data['facilities'] == "buildings-safety") {
      res.redirect(`/faf/services/facilities/${req.session.data['facilities']}`)
      return;
    } 

    if (req.session.data['facilities'] == "construction" || req.session.data['facilities'] == "specialist" | req.session.data['facilities'] == "sports-facilities" ) {
      let framework = frameworks.find(framework => framework.category == req.session.data['facilities']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/framework')
      return;
    }

    let framework = frameworks.filter(framework => framework.category == req.session.data['facilities']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/matching-frameworks')  

  })

  router.post('/faf/services/facilities/building-maintenance', (req, res) => {
    console.log(req.session.data['building-maintenance']);

    if (req.session.data['building-maintenance'] == "total-buildings-maintenance") {
      let framework = frameworks.filter(framework => framework.category == req.session.data['building-maintenance']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/matching-frameworks')  
      return
    } 

    let framework = frameworks.find(framework => framework.category == req.session.data['building-maintenance']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/framework')

  })

  router.post('/faf/services/facilities/buildings-safety', (req, res) => {
    let framework = frameworks.find(framework => framework.category == req.session.data['buildings-safety']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/framework')
  })

  router.post('/faf/services/financial', (req, res) => {

    if (req.session.data['financial'] != "audit") {
      let framework = frameworks.filter(framework => framework.category == req.session.data['financial']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/matching-frameworks')  
      return
    } 

    let framework = frameworks.find(framework => framework.category == req.session.data['financial']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/framework')

  })

  router.post('/faf/services/ict', (req, res) => {

    if (req.session.data['ict'] != "cyber-security") {
      let framework = frameworks.filter(framework => framework.category == req.session.data['ict']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/matching-frameworks')  
      return
    } 

    let framework = frameworks.find(framework => framework.category == req.session.data['ict']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/framework')

  })

  router.post('/faf/services/recruitment', (req, res) => {

    let framework = frameworks.find(framework => framework.category == req.session.data['recruitment']);
    console.log(framework)
    req.session.data['framework'] = framework;
    res.redirect('/faf/framework')

  })


  router.post('/faf/goods/books-media', (req, res) => {
    // matching frameworks
    let framework = frameworks.filter(framework => framework.category == req.session.data['books-media']);
    req.session.data['framework'] = framework;
    //console.log(framework)
    res.redirect('/faf/matching-frameworks')
  })

  router.post('/faf/goods/ict', (req, res) => {
    // both matching frameworks
    //if (req.session.data['ict'] == "audio-visual" || req.session.data['ict'] == "hardware" || req.session.data['ict'] == "mfd" || req.session.data['ict'] == "hardware") {
      let framework = frameworks.filter(framework => framework.category == req.session.data['ict']);
      console.log(framework)
      req.session.data['framework'] = framework;
      res.redirect('/faf/matching-frameworks')
      //return;
    //}
    //res.redirect(`/faf/ict/${req.session.data['ict']}`)
  })



  // get all frameworks that match a category
  // if 1 then show that framwework
  // if 2 of more then show matching frameworks
  // how do we select one as the chosen framework

  router.all('/faf/framework/:id', (req, res) => {
    let framework = frameworks.find(framework => framework.id == req.params.id);
    req.session.data['framework'] = framework;
    res.redirect('/faf/framework')
  })

  router.post('/faf/framework', (req, res) => {
    if (req.session.data['support'] == "yes") {
      res.redirect('/faf/services')
    } else {
      res.redirect(`${req.session.data['support']}`)
    }
  })

  

}
