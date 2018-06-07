import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about container'>
                <div className = 'about-cont'>
                    <h2>Wait... What is this?</h2>
                    <p>
                        For my capstone project I wanted to solve an issue I have run into a few times. Here’s a scenario you may find familiar; It’s the early evening and you want to go out, be social and most importantly... try new food! (you know, beyond the fact you don’t feel like cooking). But all your friends are busy and can’t do something so last minute. It sucks hitting up a restaurant up by yourself. Guess it’s street meat or fast food (or worst... Kraft Dinner). While that is a valid option, it isn’t a very fulfilling, or social one. So I hoped to make an app that will solve this! 
                        Basic break down? You would send out an invite saying where and when you want to meet up. Other users of the app in the general area get notified and can agree to meet or decline. Contact info is shared and you get ready for a nice evening. The chances of you knowing this person is low(ish), so 1. conversations shouldn’t be too hard, 2. it’s not a date! so no pressure from that department and 3. it’s expected that you each get a seperate bill so you can order whatever you want!
                    </p>
                </div>
            </div>
        );
    }
}

export default About;