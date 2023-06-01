import SectionInput from "./SectionInput"

const summary = (props) => {

    const values = props.givenValues
    const summary = props.onChangeSummary

    return (<div>
        <div>
            <SectionInput label='Explain your goals, ambitions and why you are an asset in 1 or 2 sentences.' placeholder='summary' defaultValue={values} onChange={summary} />
        </div>

    </div>
    );
}

export default summary