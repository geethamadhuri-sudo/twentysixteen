import React, { Component } from 'react';
import {Consumer} from '../../context';
//import {v4 as uuid} from 'uuid';
import TextInputGroup from '../../components/layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        errors :{}
    }

   
    
    onSubmit =  async (dispatch,e) => {
       
        e.preventDefault();
        //console.log(this.state);
        const {name,email,phone}  =this.state;

        //Check for Errors

        if( name === ''){
            this.setState({errors : { name : 'Name is Required'}});
            return;
        }
        if(email === ''){
            this.setState({errors : { email : 'Email is Required'}});
            return;
        }

        if(phone === ''){
           this.setState({errors : { phone :'Phone is Required'}});
           return;
        }

      const newContact ={
            //id:uuid(),
            name,
            email,
            phone
        };
        const res = await axios
            .post('https://jsonplaceholder.typicode.com/users',newContact)
        dispatch({ type : 'ADD_CONTACT' , payload :res.data});
    
          //ClearState

        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
           
        
        });
        this.props.history.push('/');

        
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value});
   
    render() {
        const {errors,name,email,phone}  =this.state;
        return(
            //const {name,email,phone} =this.state;
            <Consumer>
                {value=>{
                    const {dispatch} = value;
                    return (
                    <div className = "card mb-3">
            <div className = "card-header">AddContact</div>
            <div className="card-body">
                <form onSubmit = {this.onSubmit.bind(this,dispatch)} >
                    {/* <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        className="form-control form-control-lg"
                         placeholder="Enter name..." 
                         name="name" 
                         value ={name}  onChange = {this.onChange}  /> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                         className="form-control form-control-lg" 
                         placeholder="Enter email..."
                          name="email" 
                           value={email} onChange={this.onChange}     /> 
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text"
                         className="form-control form-control-lg"
                          placeholder="Enter phone..." 
                          name="phone"
                           value={phone} onChange = {this.onChange} /> 
                    </div> */}

                <TextInputGroup 
                    label ="Name"
                    name ="name"
                    placeholder ="Enter name"
                    value={name}
                    onChange={this.onChange}
                    error ={errors.name} />
                    
                <TextInputGroup

                    label ="Email"
                    name ="email"
                    placeholder ="Enter Email"
                    type ="email"
                    value={email}
                    onChange={this.onChange} 
                    error = {errors.email}
                    />

                <TextInputGroup
                    label ="Phone"
                    name ="phone"
                    placeholder ="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error = {errors.phone}

                    />

                <input type="submit" value="Addcontact" className="btn btn-light btn-block" />
                </form>
               
            </div>
            </div>
            )
                }}
            </Consumer>
        )

    }
}
export default  AddContact;
