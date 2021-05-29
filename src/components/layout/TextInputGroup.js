import React from 'react'
import propTypes from 'prop-types';
import classnames from 'classnames'

 const TextInputGroup = ({

    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error

 }) => {
    return (
        <div>
             <div className="form-group">
                        <label htmlFor="name">{label}</label>
                        <input type={type} 
                        // className="form-control form-control-lg is-invalid"
                        className = {classnames('form-control form-control-lg',{'is-invalid' : error})}
                         placeholder={placeholder}
                         name={name}
                         type={type} 
                         value ={value}  onChange = {onChange}  /> 

                         {/* <div className ="invalid-feedback">This is a wrong way</div> */}
                    {error && 
                    <div className = "invalid-feedback"> {error} </div> }
                    </div>
                    

        </div>
    )
}


TextInputGroup.propTypes ={
    name : propTypes.string.isRequired,
    placeholder : propTypes.string.isRequired,
    value : propTypes.string.isRequired,
    type : propTypes.string.isRequired,
    onChange : propTypes.func.isRequired,
    label : propTypes.string.isRequired,
    error :propTypes.string
}

TextInputGroup.defaultProps ={
    type:"text"
}
export default TextInputGroup;
