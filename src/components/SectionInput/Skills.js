import SectionInput from "./SectionInput"


const skills = (props) => {

    const values = props.givenValues
    const skillOne = props.onChangeOne
    const skillTwo = props.onChangeTwo

    return (<div>

        <div>
            <SectionInput label='List skills you possess relevant to the job.' placeholder='JavaScript, HTML, CSS, React' defaultValue={values[0]} onChange={skillOne} />
            <SectionInput placeholder='MS Word, Google Sheets' defaultValue={values[1]} onChange={skillTwo} />
        </div>
    </div>
    );
}

export default skills