import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';

 class Contact extends Component {
   state={
       showContactInfo : false

   };
   onDeleteClick = async (id,dispatch) => {
       try{
       const res =  await axios
       .delete('https://jsonplaceholder.typicode.com/users/${id}')
           
    //    this.props.deleteClickHandler();

    dispatch({type: 'DELETE_CONTACT',payload: id});
    }
    catch(e){
        dispatch({type: 'DELETE_CONTACT',payload: id});
    }

   };

    // constructor(){
    //     super();
    //     this.state={};
    //     this.onShowClick=this.onShowClick.bind(this);
    // }
    

    // onShowClick = () =>{
    //    this.setState({showContactInfo : !this.state.showContactInfo});
    //     // this.state=({showContactInfo : false})
    //    };

    
    // onShowClick = () => {
    //     console.log(this.state);
    // }

    // onShowClick = (name,e) => {
    //     console.log(name);
    // }

    // onShowClick = e => {
    //     console.log(e.target);
    // }
    // static protoTypes = {
      
    //         name : PropTypes.string.isRequired,
    //         email : PropTypes.string.isRequired,
    //         phone : PropTypes.string.isRequired
       
    // };
    render() {
        
        const {id,name,email,phone}=this.props.contact;
        const {showContactInfo}=this.state;
        
        return (
            // <div>
            //     <h4>{this.props.name}</h4>
            //     <ul>
            //         <li>{this.props.email}</li>
            //         <li>{this.props.phone}</li>
            //     </ul>
            // </div>

            <Consumer>
                
                {value =>{
                    const { dispatch } =  value;
                    return(
                        <div className="card card-body mb-3">
                {/* <h4>{ename} <i onClick={this.onShowClick.bind(this,ename)} className="fas fa-caret-down"/></h4> */}
                <h4>{name} <i 
                onClick={() => 
                this.state = this.setState({showContactInfo : !this.state.showContactInfo})}
                 className="fas fa-caret-down"   style = {{cursor: 'pointer'}}/>
                 <i className="fas fa-times" 
                 style={
                     { cursor : 'pointer',float : 'right',color : 'red'}} onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>
                     
                       <Link to = {`contact/edit/${id}`}>
                       <i className="fas fa-pencil-alt" 
                 style={
                     { cursor : 'pointer',float : 'right',color : 'black' , marginRight : '1rem'}} > </i>
                       </Link>
                     </h4>
                   
                 
                 {showContactInfo ? (<ul className="list-group">
                  <li className="list-group-item">   Email :{email}</li>
                   <li className ="list-group-item"> phone :{phone}</li>
                </ul>) : null}
                
            </div>

                    )
                }

                }
            </Consumer>

                    

            
        );
    }
}


Contact.protoType={
    // ename : PropTypes.string.isRequired,
    // email : PropTypes.string.isRequired,
    // phone : PropTypes.string.isRequired
    contact : PropTypes.object.isRequired,
    //deleteClickHandler : PropTypes.func.isRequired
};
export default Contact;
