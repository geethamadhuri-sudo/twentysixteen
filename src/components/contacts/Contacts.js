import React, { Component } from 'react';
import Contact from './Contact'
import {Consumer} from '../../context';
 class Contacts extends Component {
     
    deleteContact =(id) =>{
          console.log(id)
      }
    render() {
        return (
           <Consumer>
               {value =>{
                   const {contacts} = value;
                   return (
                    <React.Fragment>
                    <h1 className="display-4 mb-2">
                        <span className="text-danger">contact</span>list
                    </h1>
                {contacts.map(contact =>(
                    <Contact  key ={contact.id} 
                    contact ={contact} deleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
                ))}
            </React.Fragment>

                   )
               }}
           </Consumer>
        )
        // const {contacts} = this.state;
        // return (
        //     return (
        //         <React.Fragment>
        //     {contacts.map(contact =>(
        //         <Contact  key ={contact.id} 
        //         contact ={contact} deleteClickHandler={this.deleteContact.bind(this,contact.id)}/>
        //     ))}
        // </React.Fragment>
            
        // )
    }
}
export default Contacts;
