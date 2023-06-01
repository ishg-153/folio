import SectionInput from "./SectionInput"


const education = (props) => {

    const values = props.givenValues
    const school = props.onChangeSchool
    const degree = props.onChangeDegree
    const start = props.onChangeStart
    const end = props.onChangeEnd
    const score = props.onChangeScore

    return (<div>
    <div className='details'>
        <div className='detail-item'>
            <SectionInput label='What School or University did you study in?' placeholder='' defaultValue={values[0]} onChange={school} />
        </div>
        <div className='detail-item'>
            <SectionInput label='Which degree did you study for?' placeholder='Bachelors in Technology, Computer Sciences' defaultValue={values[1]} onChange={degree} />
        </div>
        <div className='detail-item'>
            <SectionInput label='When did you start studying here?' type='month' defaultValue={values[2]} onChange={start} />
        </div>
        <div className='detail-item'>
            <SectionInput label='When did you graduate?' type='month' defaultValue={values[3]} onChange={end} />
        </div>
        <div className='detail-item'>
            <SectionInput label='How much did you score(is still a student, add recent aggregate score)?' placeholder='CGPA: 7.9/10' defaultValue={values[4]} onChange={score} />
        </div>
        </div>

    </div>);
}

export default education