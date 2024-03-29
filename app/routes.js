// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
require('./routes/faf')(router)
require('./routes/specify')(router)
require('./routes/support')(router)
require('./routes/triage')(router)
