import SectionInput from "./SectionInput"


const extra = () => {
    
    return (<div>

        <div className="details">
        <div className='detail-item'>
            <SectionInput label='What extra curricular activities did you do and where?' placeholder='Technical writer, CSI' />
        </div>
        <div className='detail-item'>
            <SectionInput label='When did you start working here?' type='month'/>
        </div>
        <div className='detail-item'>
            <SectionInput label='When did you stop working here?' type='month'/>
        </div>
        </div>

        <div>
            <SectionInput label='Explain your responsibility, role and/or experience.' placeholder='Developed a [what you built] using [languages, frameworks, APIs] that [what your project does in a couple of words].' />
        </div>

    </div>
    );

}

export default extra