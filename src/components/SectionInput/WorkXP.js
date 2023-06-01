import SectionInput from "./SectionInput"

const workXP = (props) => {

    // const values = props.givenValues
    // const skillOne = props.onChangeOne
    // const skillTwo = props.onChangeTwo

    return (<div>
        <div className='details'>
            <div className='detail-item'>
                <SectionInput label='What position did you work at?' placeholder='Senior Product Manager' />
            </div>
            <div className='detail-item'>
                <SectionInput label='Which company did you work at?' placeholder='Pepsi Co' />
            </div>
            <div className='detail-item'>
                <SectionInput label='When did you start working here?' type='month'/>
            </div>
            <div className='detail-item'>
                <SectionInput label='When did you stop working here?' type='month'/>
            </div>
        </div>
        
        <div >
            <SectionInput label='Explain how you had an effect on the team or the companny as a whole?(keep in mind -use action words to begin your sentences -show your impact through metrics -Write in pointers)' placeholder='Designed and wrote 30+ content pieces for marketing and community engagement.' />
            <SectionInput placeholder='Designed and wrote 30+ content pieces for marketing and community engagement.' />
        </div>

    </div>
    );
}

export default workXP