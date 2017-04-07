'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.5048f7e9-9971-4ff1-8506-efa22c636f59";
var SKILL_NAME = 'Space Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "A year on Venus is just 244 days long.",
    "The Earth's atmosphere is 21 percent oxygen.",
    "The Earth is the only planet that has liquid water on its surface.",
    "The Earth is the only planet on the solar system to undisputadely have life.",
    "A very large portion of Earths inhabitants are completely ignorant to the obvious, detrimental effects of climate change.",
    "70 Percent of the planet is covered in ocean, but humans have only discovered 5 percent of it.",
    "Each liter of seawater contains about 13 billionths of a gram.",
    "The Pacific basin contains half of all free water on earth and could hold all of the World's continents.",
    "Venus is the second brightest natural object in the sky.",
    "Venus is named after the Roman Goddess of love and beauty.",
    "Venus has an average surface temperature of 462 degrees celsius.",
    "A year in Venus takes 255 earth days.",
    "It took Russia 3 tries to land on the surface of Venus.",
    "Baby blue whales weigh up to 3 tons at birth!",
    "Yellow jackets can sting and bite multiple times without losing their stinger, or dying.",
    "The first modern leap year was in 1752!",
    "Zero Calorie - Diet Coke has 4 calories!",
    "Giraffes sleep no more than 30 minutes a day!",
    "Otters often keep the same hunting rock their entire lives.",
    "Banging your head against a wall can burn as much as 150 calories per hour.",
    "Climate change is real",
    "In the UK, it is illegal to eat mince pies on Christmas Day!",
    "Billy goats urinate on their own heads to smell more attractive to females.",
    "The average woman uses her height in lipstick every 5 years."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AboutApplication': function () {
      this.emit(':tell', "This is Charles Kenney's Hello World application for alexa. A first of many applications to come.");
    },
    'HelloWorld': function() {
      this.emit(':tell', "Hello, world!");
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
