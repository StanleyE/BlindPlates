# BlindPl@te
(formerly Code Name: Schwoopt)
By: Erica Stanley

## Intro:
For my capstone project I wanted to solve an issue I have run into a few times. Here’s a scenario you may find familiar; It’s the early evening and you want to go out, be social and most importantly... try new food! (you know, beyond the fact you don’t feel like cooking). But all your friends are busy and can’t do something so last minute. It sucks hitting up a restaurant up by yourself. Guess it’s street meat or fast food (or worst... Kraft Dinner). While that is a valid option, it isn’t a very fulfilling, or social one. So I hoped to make an app that will solve this! 
Basic break down? You would send out an invite saying where and when you want to meet up. Other users of the app in the general area get notified and can agree to meet or decline. Contact info is shared and you get ready for a nice evening. The chances of you knowing this person is low(ish), so 1. conversations shouldn’t be too hard, 2. it’s not a date! so no pressure from that department and 3. it’s expected that you each get a seperate bill so you can order whatever you want!

## Walk through:
user walk through of app
- Log on (dummy at first, interactive as a stretch goal)
- Search/select restaurant
- Input time frame
- Send request with small message
- Request starts search for all other users within X km (X is still to be decided)      radius of restaurant location
- Geographically qualified recipients receive a notification with time and place        information as well as basic info of requester
- Recipient chooses whether to accept or decline
- For the recipients that accept, their basic info is sent over with a simple           message
- The requester receives a list of people who are interested
- Requester reviews and selects 1 or more people to meet up with 
    **{and contacts them via the phone number provided}

### Stretch Material:
**Since sending out a phone number so easily isn’t overly safe or a good business principal, if I am able to get the time I will include the steps below.
The person(s) that were selected get another notification saying they were selected and inquirer if they
	a. still want to go at that time
	b. allow their phone# to be shared to the other person to allow for communication
If {a + b === true} both phone# are released to either party
Another Stretch goal would be making the log in interactive.

## Diving Deeper:
### Bonus Features:
- Person can select whether they are/feel like a talker or a listener that night        and be matched (or sort the list) accordingly
- When both phone numbers are released, a pre-made message is sent to other user        (simple at first['hey it's ${frist_name}'], but extreme would be a unique           message set by the user)
- Can select parks and routes for sports events and parades/marches
### Insane bonus feature: 
- In app chat before phone# is released
- Active location tracking
- Rate the person after the meet up (able to block future notification)
### Years from now Bonus Features:
- Make Mobile
- Once both parties confirm, a reservation is sent to the restaurant (AI/ google        assistant? or internal booking system with restaurant) and both users are           informed once completed or if the time needs to be adjusted
- Connect with Restaurants, to connect and promote them and any special deals they      wish to offer through the app (1/2 off apps ect.)

## Data:
User [
{
first_name: {
	type: String, 
	required: true
	},
last_name: {
	type: String,
	required: true
	},
nickname: String,
dob: {
	type: Date,
	required: true
	},
gender: {
	type: String,
	required: true
	},
location: {
	lat: Number
	long: number
	},
date_created: {
	type: Number, 
	default: yes,
	required: true,
},
]

## Technologies:
- Html
- Css
- Bootstrap
- FontAwesome
- Google Font
- JS
- React
- MongoDB
- GeoSpatial or GeoLocation
- Twilio

## Timeline:
Eat, Sleep, Code, Repeat.
Tuesday & Wednesday: Get database filled and hooked up
Thursday & Friday: Sort out Geographical locationing system
Saturday & Sunday: Get rough front end started and google search form
Monday & Tuesday: Get Twilio working
Wednesday: Contact exterminator for debugging
Thursday AM: Have panic attack
	    PM: Launch?
Friday: Fortify inner Zen and hope for the best


