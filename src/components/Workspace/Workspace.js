import React, {useState, useEffect} from 'react'
import { X } from "react-feather";


import './Workspace.css'
import Sections from '../../Sections'
import SectionInput from '../SectionInput/SectionInput';
import Personal from '../SectionInput/Personal';
import Summary from '../SectionInput/Summary';
import Education from '../SectionInput/Education';
import Skills from '../SectionInput/Skills';
import WorkXP from '../SectionInput/WorkXP';
import Projects from '../SectionInput/Projects';
import Extra from '../SectionInput/Extra';
import Achievements from '../SectionInput/Achievements';


function Workspace(props) {

    const information = props.information;

    const [currentSection, setCurrentSection] = useState(0);
    const [activeInformation, setActiveInformation] = useState(
        information[Sections[0].title]
    );
    const [sectionTitle, setSectionTitle] = useState(Sections[0].title)
    const [values, setValues] = useState({
        name: activeInformation?.detail?.name || "",
        email: activeInformation?.detail?.email || "",
        phone: activeInformation?.detail?.phone || "",
        linkedin: activeInformation?.linkedin?.name || ""
    });
    


    const selectSectionInput = () => {
        switch(Sections[currentSection].title){
            case Sections[0].title :
                return <Personal givenValues={[values.name, values.email, values.phone, values.linkedin]} onChangeName={(e) => setValues((prev) => ({...prev, name: e.target.value}))} onChangeEmail={(e) => setValues((prev) => ({...prev, email: e.target.value}))} onChangePhone={(e) => setValues((prev) => ({...prev, phone: e.target.value}))} onChangeLinkedin={(e) => setValues((prev) => ({...prev, linkedin: e.target.value}))} />;
            case Sections[1].title:
                return <Summary givenValues={values.summary} onChangeName={(e) => setValues((prev) => ({...prev, summary: e.target.value}))}/>;
            case Sections[2].title :
                return <Education givenValues={[values.school, values.degree, values.schoolStart, values.schoolEnd, values.score]} onChangeSchool={(e) => setValues((prev) => ({...prev, school: e.target.value}))} onChangeDegree={(e) => setValues((prev) => ({...prev, degree: e.target.value}))} onChangeStart={(e) => setValues((prev) => ({...prev, schoolStart: e.target.value}))} onChangeEnd={(e) => setValues((prev) => ({...prev, schoolEnd: e.target.value}))} onChangeScore={(e) => setValues((prev) => ({...prev, score: e.target.value}))} />;
            case Sections[3].title :
                return <Skills givenValues={[values.skillOne, values.skillTwo]} onChangeOne={(e) => setValues((prev) => ({...prev, skillOne: e.target.value}))} onChangeTwo={(e) => setValues((prev) => ({...prev, skillTwo: e.target.value}))} />;
            case Sections[4].title :
                return <WorkXP />;
            case Sections[5].title :
                return <Projects />;
            case Sections[6].title :
                return <Extra />;
            case Sections[7].title :
                return <Achievements />;
            default:
                return null;
        }
    }

    useEffect(() => {
        setActiveInformation(information[Sections[currentSection].title]);
        setSectionTitle(Sections[currentSection].title);
    }, [currentSection, information]);


    const NextButtonClick = () => {
        const nextSection = currentSection + 1;
        if (nextSection < Sections.length) {
            setCurrentSection(nextSection);
            setSectionTitle(Sections[nextSection].title);
        } else {
            alert('you reached the end of the quiz');
        }
    }

    return (<div>
        <h2>{Sections[currentSection].title}</h2>
        
        <div >
        <form>

            <div className='each-section'>
                <div>
                    <SectionInput label='Section Title' value={sectionTitle} onChange={(e)=>setSectionTitle(e.target.value)} />
                </div>

                <div>
                        {
                            activeInformation?.details ? 
                            activeInformation?.details?.map((item, index)=>
                                <div key={item+index}>
                                    <p>{Sections[currentSection].title} {index+1}</p>
                                    <X />
                                </div>)
                            :""
                        }

                </div>

                {selectSectionInput()}
            </div>

        </form>
        <button onClick={() => NextButtonClick()}>Next <img width="25rem" src="https://img.icons8.com/material-rounded/96/right.png" alt="right"/></button>
        </div>

        
    </div>
    );
}

export default Workspace