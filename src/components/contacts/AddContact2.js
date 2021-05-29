// import React, { Component } from 'react'

// class AddContact extends Component {

//     constructor(props){
//         super(props);
//             this.nameInput = React.createRef();
//             this.emailInput =React.createRef();
//             this.phoneInput = React.createRef();
        
//     }
    
// static defaultProps ={
//     name : 'Geetha',
//     email : 'geethagorantla6@gmail.com',                                                                                                                                                                                                              
//     phone : '8143382954'
// };
   

    
//     onSubmit = e => {
//         e.preventDefault(); 
//       const contact = {
//           name: this.nameInput.current.value,
//           email: this.emailInput.current.value,
//           phone: this.phoneInput.current.value
       
//       };
        
//         console.log(contact);      
//     };
   
//     render() {
//         const {name,email,phone} =this.props;
//         return (
//             <div className = "card mb-3">
//             <div className = "card-header">AddContact</div>
//             <div className="card-body">
//                 <form onSubmit = {this.onSubmit} >
//                     <div className="form-group">
//                         <label htmlFor="name">Name</label>
//                         <input type="text" 
//                         className="form-control form-control-lg"
//                          placeholder="Enter name..." 
//                          name="name" 
//                          defaultValue ={name}  ref={this.nameInput}  /> 
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="email">Email</label>
//                         <input type="email"
//                          className="form-control form-control-lg" 
//                          placeholder="Enter email..."
//                           name="email" 
//                            defaultValue={email}    ref={this.emailInput}  /> 
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="phone">Phone</label>
//                         <input type="text"
//                          className="form-control form-control-lg"
//                           placeholder="Enter phone..." 
//                           name="phone"
//                            defaultValue={phone} ref={this.phoneInput} /> 
//                     </div>
//                     <input type="submit" value="Addcontact" className="btn btn-light btn-block" />
//                 </form>
               
//             </div>
           
            

                
            
              
//             </div>
//         )
//     }
// }
// export default  AddContact;
