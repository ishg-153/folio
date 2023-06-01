import React from 'react'
import './SectionInput.css'


function SectionInput({label , ...props})  {

    return (<div className='form-component'>

        {label && <label>{label}</label>}
        <input type="text" {...props} />
                
    </div>
    );
}

export default SectionInput