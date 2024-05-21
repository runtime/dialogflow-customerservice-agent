// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  console.log('[Firebase Fullfillment] Agent Parameters' + agent.parameters);
  
  
  //service
  const service = new Object ({
    id: "string",
    typeofservice: "string",
    construct: "string",
    description:"string",
    numrooms: "string",
    numbaths: "string",
    sqft: "string",
    cleanfactor: "string"

  });

  // user
  const user = new Object({
    userid: "string",
    name: "string",
    surname: "string",
    email: "string",
    phone:"string",
    address: "string",
    service: "string",
    usermenuselection: "string",
    marketingtype: "string"
    
  });
  
  // estimate
  const estimate = new Object({
    costid: "string",
    svctotal: "string",
    extrasvctotal: "string",
    approved: "Boolean",
    userid: "string"
  });
  
  // appointment
  const appointment = new Object({
    date: "string",
    time: "string",
    location: "Boolean",
    userid: "boolean"
  });
  
  const menu = ["schedule a cleaning", "list services", "get an estimate" ];
  const services = ['Sparkle-izing is my standard service which includes me dusting, sweeping, mopping, scrubbing and polishing your place till its spotless', 'Extra Services would be stuff like Cleaning the Fridge or Oven', 'Professional Services such as shampooing rugs or cleaning your favorite couch' ];
  //const descriptions = ['4 Bedroom, 4 Bath', '3 Bedroom, 3 Bath', '2 Bedroom, 2 Bath'];
  let marketingtype, usermenuselection, typeofservice, construct, description, numrooms, numbaths, sqft, cleanfactor;

 	//Greeting (Main Menu)
 	//Service Information
  	//User Information
  	//Estimate Creator
  	//Appointment Scheduler
  	// Take Payment
  
 
  function welcome(agent) {
    console.log('[Default Welcome Intent] agent parameters: ' + agent.parameters);
    //console.log('[Default Welcome Intent] agent.paramters.marketingtype ' + agent.parameters.marketingtype);
    
    

    // if (agent.parameters.typeofservice) {
    //     typeofservice = agent.parameters.typeofservice;
    //     service.typeofservice = typeofservice;
    // } 

    // if (agent.parameters.construct) {
    //   construct = agent.parameters.construct;
    //   service.construct = construct;
    // }
    // // Marketing Analytics
    // // USER
    // if (agent.parameters.usermenuselection) {
    //     usermenuselection = agent.parameters.usermenuselection;
    //     user.usermenuselection = usermenuselection;
    // }
    
    // if (agent.parameters.marketingtype) {
    //     marketingtype = agent.parameters.marketingtype;
    //     user.marketingtype = marketingtype;
    // }
    
    //check what converted them for marketing analytics
   

    // if (usermenuselection && marketingtype) {
    //   //they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Default Welcome Intent]- ' + ' typeofservice: ' + typeofservice + ' usermenuselection: ' + usermenuselection);
    //   agent.add(`Thanks for checking out our ${marketingtype}!. Of course, I can help you with an ${usermenuselection}!`);
    // } else {
    //   agent.add(`Thanks for texting. Do you need an estimate or would you like to schedule a cleaning?`);

    // }

    /// back to getting a lot of stuff
    // if (typeofservice && usermenuselection && marketingtype && construct) {
    //   // custom message showing thanks for responding to the ad and providing them a lead in to their selected action
    //   console.log('[Default Welcome Intent]- ' + ' typeofservice: ' + typeofservice + 'construct: ' + construct + ' usermenuselection: ' + usermenuselection + ' marketingtype: ' + marketingtype);
    //   agent.add(`Thanks for checking out our ${marketingtype}!. Of course we can help you ${usermenuselection} for ${typeofservice} you ${construct}!`);

    // } else if (typeofservice && usermenuselection && marketingtype && !construct) {
    //   // they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Default Welcome Intent]- ' + ' typeofservice: ' + typeofservice + ' usermenuselection: ' + usermenuselection + ' marketingtype: ' + marketingtype);
    //   agent.add(`Glad you liked my ${marketingtype}. Sure, I can help give you an ${usermenuselection} to ${typeofservice} your place.
    //   Can you please tell me if you live in a house or an apartment?`);

    // } else if (typeofservice && usermenuselection && !marketingtype && !construct) {
    //   // they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Default Welcome Intent]- ' + ' typeofservice: ' + typeofservice + ' usermenuselection: ' + usermenuselection);
    //   agent.add(`Hey there!, I'd love to give you an ${usermenuselection} to ${typeofservice} your place.
    //   Do you live in a house or an apartment?`);

    //  } else if (typeofservice && !usermenuselection && !marketingtype && !construct) {
    //   // they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Default Welcome Intent]  typeofservice: ' + typeofservice);
    //   agent.add(`Claro, I'd love to ${typeofservice} your place.
    //   Do you live in a house or an apartment?`);

    //  } else  if (marketingtype && !typeofservice && !usermenuselection && !construct) {
    //   console.log('[Default Welcome Intent] ' + agent.parameters.marketingtype);
    //   marketingtype = agent.parameters.marketingtype;
    //   agent.add('Hi, thanks for checking out our ' + marketingtype + '! Would you like me to ' + menu[0] + ', ' +  menu[1] +  ' or ' + menu[2]);
    //  } else {
    //   agent.add(`Hi, thanks for texting! Would you like me to ${menu[0]}, ${menu[1]}, or ${menu[2]}?`);
    // }
      // we didn't get anything from them so we just give ask what service they want.
      // let the default handle for now
      // agent.add(`Glad you liked my ${marketingtype}. Sure, I can help give you an ${usermenuselection} to ${typeofservice} your place.`)
      // console.log('[Welcome] Service.marketingtype: ' + marketingtype);

  }
  
  function mainMenu() {
    console.log('[Main Menu' + agent.parameters)
    //agent.add(`Of Course! Would you like me to ${menu[0]}, ${menu[1]} or ${menu[2]}?`);
  }
  
  function showListOfServices(agent) {
    console.log('[showListOfServices] Agent Parmameters: ' + agent.parameters);
    
    //simple for now
	  agent.add(`Absolutely! ${services[0]}, and ${services[1]}. Additionally, we offer ${services[2]}. \n
    Would you like to ${menu[0]} or ${menu[2]}?`);

    //if asking for a specific service add logic and uncomment this
    //agent.add(`Absolutely! ${services[0]}. Would you like me to ${menu[1]} or ${menu[2]} for you?`);
     
  }
  
  
  // Highest Importance
  function serviceInfoServiceType(agent) {
    console.log('[serviceInfo] Agent Parmameters: ' + agent.parameters);
    // context in ---> marketingytpe, typeofservice, construct, usermenuselection
    // context out --> typeofservice
    
    
    // check if contexts were stored in objects before assigning
    // then assign if needed
    //   if (agent.parameters.typeofservice) {
    //   	  typeofservice = agent.parameters.typeofservice;
    //   	  service.typeofservice = typeofservice;
    //   } 
  

    // if (!service.construct) {
    //   if (agent.parameters.construct) {
    //       construct = agent.parameters.construct;
    //   	  service.construct = construct;
    //   } 
    // }

    // if (!user.usermenuselection) {
    //   if (agent.parameters.usermenuselection) {
    //       usermenuselection = agent.parameters.usermenuselection;
    //   	  user.usermenuselection = usermenuselection;
    //   } 
    // }

 

   
    // // in case we need to pass service.obj
    // if (service.typeofservice && service.construct && user.usermenuselection && user.marketingtype) {
    //   // custom message showing thanks for responding to the ad and providing them a lead in to their selected action
    //   console.log('[Service Info - Service Type] ' + ' typeofservice: ' + typeofservice + ' usermenuselection: ' + usermenuselection + ' marketingtype: ' + marketingtype);
    //   agent.add(`Of course I can ${service.typeofservice} your ${service.construct}! Can you tell me how many bedrooms you have?`);

    // }
    

    // if (typeofservice && construct && usermenuselection && marketingtype) {
    //   // custom message showing thanks for responding to the ad and providing them a lead in to their selected action
    //   console.log('[Service Info - Service Type] ' + ' typeofservice: ' + typeofservice + ' usermenuselection: ' + usermenuselection + ' marketingtype: ' + marketingtype);
    //   agent.add(`Of course I can ${typeofservice.orginal} your ${construct}! Can you tell me how many bedrooms you have?`);

    // }else if (typeofservice && construct && usermenuselection && !marketingtype) {
    //   // they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Service Info - Service Type] ' + ' typeofservice: ' + typeofservice + ' construct: ' + construct + ' usermenuselection: ' + usermenuselection);
    //   agent.add(`Sure, I can help you ${usermenuselection} for ${typeofservice}.
    //   Can you please tell me if you live in a house or an apartment? I also do dorms.`);

    // } else if (typeofservice && construct && !usermenuselection && !marketingtype) {
    //   // they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Service Info - Service Type] ' + ' typeofservice: ' + typeofservice + ' construct: ' + construct);
    //   agent.add(`Of course I can ${typeofservice}! \n
    //   Can you tell me if you live in a house, apartment or single room like a dorm?`);

    // } else if (typeofservice && !construct && !usermenuselection && !marketingtype) {
    //   // they didn't mention what they responded to, and we provide them a lead in to their selected action and type of service
    //   console.log('[Service Info - Service Type] ' + ' typeofservice: ' + typeofservice);
    //   agent.add(`Of course I help ${typeofservice} your place! \n
    //   Can you tell me if you live in a house, apartment or single room like a dorm?`);

    // } else {
    //   // we didn't get anything from them so we just give ask what service they want.
    //   // let the default handle for now
    //   agent.add('Can you tell me if you live in a house or an apartment?');

    // }
      
    // SETTERS
    // sesh.service = service;
    // user.usermenuselection = usermenuselection;
    // user.marketingtype = marketingtype;
    //console.log('[Service Info] service obj: ' + typeofservice);

    // AGENT Says
    // Apt, house or condo?

  }
  
  // follow up -intent
  
  function serviceInfoConstruct(agent) {
     console.log('[Service Info - Construct] Agent Parameters: ' + agent.parameters);
     
    //  if (!service.construct) {
    //   if (agent.parameters.construct) {
    //       construct = agent.parameters.construct;
    //   	  service.construct = construct;
    //   } 
    // }
    //  console.log('[Service Info - Construct] service.construct: ' + service.construct + 'service.typeofservice: ' + service.typeofservice);

     agent.add(`how many bedrooms are we cleaning?`);
  }
  
  function serviceInfoNR(agent) {
    console.log('[Service Info - NR] Agent Parameters: ' + agent.parameters);
    agent.add(`[Service Info - NR] How many bathrooms?`);
    // if (agent.parameters.numrooms) {
    //   let numrooms = agent.parameters.numrooms;
    //   service.numrooms = numrooms;
    //   agent.add(`Ok, ${numrooms} bedrooms. how many bathrooms?`);
    // } else {
    //   agent.add(`How many bathrooms?`);
    // }
    //agent.add(`How many bathrooms?`);
  }
  
  function serviceInfoNB(agent) {
     console.log('[Service Info - NB] Agent Parameters: ' + agent.parameters);
     agent.add(`[Service Info - NB] How many Square Feet approximately?`);
  
    //  if (agent.parameters.numbaths) {
    //   numbaths = agent.parameters.numbaths;
    //   service.numbaths = numbaths;
    //   agent.add(`Ok, thanks. that's ${numbaths} bathrooms. We give discounts for smaller spaces.
    //   \n Can you please tell me the approximate square feet?`);
    // } else if (agent.parameters.numrooms && agent.parameters.numbaths) {
    //   numbaths = agent.parameters.numbaths;
    //   service.numbaths = numbaths;
    //   let tempnumrms = service.numrooms;
    //   agent.add(`Awesome! I have ${tempnumrms} bedrooms and ${numbaths} bathrooms. We give discounts for smaller spaces. \n 
    //   Can you please tell me the approximate square feet?`);
    // }
    // agent.add(`How many square feet?`);
  }
  
   function serviceInfoSF(agent) {
    console.log('[Service Info - SQFT] Agent Parameters: ' + agent.paramteters);
	  // if (agent.paramteters) {
    // 	const sqft = agent.parameters.sqft;
    // 	agent.add(`Ok ${sqft} square feet sounds good. I offer discounts for people who are generally clean and clutter free because I do the job faster. Can you rank yourself and family from 1-3? 1 being Oscar Madison from the Odd Couple and 3 being Monica Geller from Friends..🤣`);
    // }
    // 	const sqft = agent.parameters.sqft;
     	agent.add(`[Service Info - SQFT]  We give discounts if you have no laundry on the floor or dishes in the sink. On a scale of 1-3, with 3 being the least clutter how would you rank your space?. `);
  }
  
  function serviceInfoCF(agent) {
    console.log('[Service Info - CleanFactor] Agent Parameters: ' + agent.paramteters);
    // TODO get cleanfactor
    agent.add(`[Service Info - CleanFactor] Got it! Can you please give me your first and last name along with your email address for the estimate.`);
  }

  
  function getUserFirstName(agent) {
    //let name = agent.parameters.userfirstname.name;
    //user.name = name;
    //console.log('[getUserFirstName] set user.name : ', user.name);
    //agent.add("Hello " + name + ", Do you need an estimate? If you have any questions please let me know" );
    //agent.setContext({ name: 'userfirstname', lifespan: 5, parameters: { userfirstname: name}});
  }
 
  function fallback(agent) {
    agent.add(`[fallback] I didn't understand`);
    agent.add(`[fallback] I'm sorry, can you try again?`);
  }

  // // Uncomment and edit to make your own intent handler
  // // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function yourFunctionHandler(agent) {
  //   agent.add(`This message is from Dialogflow's Cloud Functions for Firebase editor!`);
  //   agent.add(new Card({
  //       title: `Title: this is a card title`,
  //       imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
  //       text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
  //       buttonText: 'This is a button',
  //       buttonUrl: 'https://assistant.google.com/'
  //     })
  //   );
  //   agent.add(new Suggestion(`Quick Reply`));
  //   agent.add(new Suggestion(`Suggestion`));
  //   agent.setContext({ name: 'weather', lifespan: 2, parameters: { city: 'Rome' }});
  // }

  // // Uncomment and edit to make your own Google Assistant intent handler
  // // uncomment `intentMap.set('your intent name here', googleAssistantHandler);`
  // // below to get this function to be run when a Dialogflow intent is matched
  // function googleAssistantHandler(agent) {
  //   let conv = agent.conv(); // Get Actions on Google library conv instance
  //   conv.ask('Hello from the Actions on Google client library!') // Use Actions on Google library
  //   agent.add(conv); // Add Actions on Google library responses to your agent's response
  // }
  // // See https://github.com/dialogflow/fulfillment-actions-library-nodejs
  // // for a complete Dialogflow fulfillment library Actions on Google client library v2 integration sample

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome); // typeofmarketing
  intentMap.set('Default Fallback Intent', fallback);
  
  // Main Menu
  intentMap.set('Main Menu', mainMenu); // menu[0] ... 'estimate', 'schedule', 'list'
  // Services List
  intentMap.set('List Services', showListOfServices); // cleaning, extra, pro
  
  // Estimate
  //intentMap.set('Create Estimate', createEstimate);
  
  // Schedule
  //intentMap.set('Schedule Appointment', scheduleAppointment);
  
  // Service Info - typeofservice
  intentMap.set('Service Info - Service Type', serviceInfoServiceType); // cleaning, extra, pro
  // construct
  intentMap.set('Service Info - Construct', serviceInfoConstruct); // house, apartment
  // numbeds
  intentMap.set('Service Info - Construct - NumRooms', serviceInfoNR); // int
  //numbaths
  intentMap.set('Service Info - Construct - NumRooms - NumBaths', serviceInfoNB); //int
  //sqft
  intentMap.set('Service Info - Construct - NumRooms - NumBaths - SQFT', serviceInfoSF);  // int
  //clean factor //
  intentMap.set('Service Info - Construct - NumRooms - NumBaths - SQFT - CleanFactor', serviceInfoCF); //oint
  
  
  // Appointment Scheduler TBD
 
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
