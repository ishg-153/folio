import SectionInput from "./SectionInput"


const projects = () => {

    return (<div>
    <div className='details'>
        <div className='detail-item'>
            <SectionInput label='Name of your project' placeholder='Movie recommendation system' />
        </div>
        <div className='detail-item'>
            <SectionInput label='When did you start working on this project?' type='month' />
        </div>
        <div className='detail-item'>
            <SectionInput label='When did you finish this project?' type='month'/>
        </div>
    </div>

        <div>
            <SectionInput label='Explain the project.(keep in mind -first write what the project is -state the tools used to maka it -then write the target use of it)?' placeholder='Developed a [what you built] using [languages, frameworks, APIs] that [what your project does in a couple of words].' />
        </div>

    </div>
    );
}

export default projects