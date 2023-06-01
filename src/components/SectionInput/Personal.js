import SectionInput from "./SectionInput"

const personal = (props) => {

    const values = props.givenValues
    const name = props.onChangeName
    const email = props.onChangeEmail
    const phone = props.onChangePhone
    const linkedin = props.onChangeLinkedin

    return (<div>
    
    <div className='details'>
        <div>
            <SectionInput label='What is your name?' placeholder='FirstName LastName' defaultValue={values[0]} onChange={name} />
        </div>
        <div>
            <SectionInput label='Email ID' placeholder='example@abc.com' 
            defaultValue={values[1]} onChange={email} />
        </div>
        <div>
            <SectionInput label='Phone Number' placeholder='+914567891234' 
            defaultValue={values[2]} onChange={phone} />
        </div>
        <div>
            <SectionInput label='LinkedIn' placeholder='Enter profile link' 
            defaultValue={values[3]} onChange={linkedin} />
        </div>
        </div>

    </div>
    );
}

export default personal