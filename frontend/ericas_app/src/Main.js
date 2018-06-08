import React, { Component } from 'react';
import List from './List';

const google = window.google ? window.google : {};
let lng = 0;
let lat = 0;
class Main extends Component {
    constructor(){
        super();
        this.state = {
            newRec: [

            ]
        }
        this.submitData = this.submitData.bind(this);
    }
    // Google Autocomplete Places API
    componentDidMount(){
        var geoloc = {};
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            geoloc ={
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
                    };
                    // console.log(geoloc, 'geoloc??')
            var circle = new google.maps.Circle({
                center: geoloc,
                radius: 10000
            })
        const restInput = document.getElementById('searchBar');
        const autocomplete = new google.maps.places.Autocomplete((restInput),{
                types: ['establishment'],
                componentRestrictions: {country: 'can'},
                radius: 10000,
                center: geoloc,
        });
        autocomplete.setBounds(circle.getBounds())
    
        google.maps.event.addListener(autocomplete, 'place_changed', ()=>{
            const place = autocomplete.getPlace();
            lng = place.geometry.location.lng();
            lat = place.geometry.location.lat();
        }) 
    })  
    }}    

    //Dissected Form (I feel like there is an easier way to do this...)
    submitData(event){
        event.preventDefault();
        console.log(lng, lat, 'SubmitData');
        let rest =  this.refs.rest.value;
        let time = this.refs.time.value;
        let msg = this.refs.msg.value;
        let conv = this.refs.conv.value;
        let opt = this.refs.opt.value;
        let name = this.refs.name.value;
        let number = this.refs.number.value;
        let form = {
            name: name,
            number: number,
            rest:rest,
            time:time,
            msg:msg,
            conv:conv,
            opt:opt
        }
        //console.log(form);
        this.props.findPeople(lng, lat, form);
        
        this.setState({
            newRec:form
           })     
    }
    
    render() {
        //console.log(navigator)
        return (
            <div className="motherdiv">
            <div className = 'search container'>
            {/* Search Form */}
                    {/* Form set to change display to hidden on submit */}
                <form method= 'post' onSubmit={this.submitData} className={this.props.reqSent[0].sent ? "hidden" : 'w-100'}> 
                <div className="w-100 row">
                    {/* Users Name */}
                    <div className="form-group col-6">
                        <label htmlFor="userName">Name</label>
                        <input type="text" className="form-control shadow-light" id="userName" placeholder="Name" ref = 'name' required />
                    </div>
                    {/* Users Number */}
                    <div className="form-group col-6">
                        <label htmlFor="phoneNumber">Contact Number</label>
                        <input type="text" className="form-control shadow-light" id="phoneNumber" placeholder="Phone number" ref = 'number' required/>
                    </div>
                    {/* Choosen Restaurant */}
                    <div className="form-group col-6">
                        <label htmlFor="searchBar">Where would you like to eat?</label>
                        <input type="text" className="form-control shadow-light" id="searchBar" placeholder="Search" ref = 'rest' required />
                    </div>
                    {/* Prefered Time */}
                    <div className="form-group col-6">
                        <label htmlFor="time">What time?</label>
                        <input type="text" className="form-control shadow-light" id="time" placeholder="7-8PM?" ref = "time" required/>
                    </div>
                    {/* Message to send out */}
                    <div className="form-group col-12">
                        <label htmlFor="searchMessage">Message you want to share?</label>
                        <textarea className="form-control shadow-light" id="searchMessage" rows="3" placeholder="Share a brief message about who you are, why this restaurant or (if it's not below) a topic of conversation you'd like to converse in." maxLength='120' ref = "msg" ></textarea>
                    </div>
                    {/* Topic of Conversation */}
                    <div className="form-group col-6">
                        <label htmlFor="conversation">Got a topic of conversation in mind?</label>
                        <select className="form-control shadow-light" id="conversation" ref = "conv">
                        <option value = "Anything" >...</option> 
                        <option value = "Coding" >Coding</option>                                               
                        <option value = "Art" >Art</option>
                        <option value = "Music" >Music</option>
                        <option value = "Science" >Science</option>
                        <option value = "Politics" >Politics</option>
                        <option value = "City gems" >Cities secret gem's</option>
                        <option value = "See msg" >Other (see message)</option>
                        </select>
                    </div>
                    {/* What are you */}
                    <div className="form-group col-6">
                        <label htmlFor="option">I am a: </label>
                        <select className="form-control shadow-light" id="option" ref="opt">
                        <option value = "Talker and Listener" >Both a Talker and a Listener</option>
                        <option value = "Talker" >Talker</option>
                        <option value = "Listener" >Listener</option>           
                        </select>
                    </div>
                    {/* epic gamer voice: SUBMIT! */}
                    <div className="col-12">
                        <button type="submit" className="btn btn-danger btn-submit">Submit</button> 
                    </div> 
                    </div>    
                </form>
                {/* Once form has been submitted it will dissapear and this run down of the request will show */}
                <div className={this.props.reqSent[0].sent ? null : "hidden"}>
                   <h4> The Request you sent out:</h4>
                    <div>
                        {this.state.newRec.rest}
                        <p>Time: {this.state.newRec.time}</p>
                        <p>Message: {this.state.newRec.msg}</p>
                        <p>The topic of conversation: {this.state.newRec.conv}</p><p>and you set yourself as a: {this.state.newRec.opt}</p>
                    </div>
                </div>
            </div>
            {/* once db is filtered, results go through another screening */}
            <div className = 'results container' >
            <List results = {this.props.results}/>
        </div>
        </div>
        );
    }
}

export default Main;