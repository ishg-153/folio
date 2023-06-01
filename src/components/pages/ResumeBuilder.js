import React, { useState } from 'react'
import Workspace from '../Workspace/Workspace'
import Sections from '../../Sections';

function ResumeBuilder() {

      const [resumeInformation, setResumeInformation] = useState({
            [Sections[0].title]: {
              id: Sections[0].title,
              sectionTitle: Sections[0].title,
              detail: {},
            },
            [Sections[1].title]: {
              id: Sections[1].title,
              sectionTitle: Sections[1].title,
              details: "",
            },
            [Sections[2].title]: {
              id: Sections[2].title,
              sectionTitle: Sections[2].title,
              details: [],
            },
            [Sections[3].title]: {
              id: Sections[3].title,
              sectionTitle: Sections[3].title,
              points: [],
            },
            [Sections[4].title]: {
              id: Sections[4].title,
              sectionTitle: Sections[4].title,
              details: [],
            },
            [Sections[5].title]: {
              id: Sections[5].title,
              sectionTitle: Sections[5].title,
              details: [],
            },
            [Sections[6].title]: {
              id: Sections[6].title,
              sectionTitle: Sections[6].title,
              details: [],
            },
            [Sections[7].title]: {
                id: Sections[7].title,
                sectionTitle: Sections[7].title,
                points: [],
              },
          });

    return <div>
          
          <Workspace information={resumeInformation}/>
        </div>;
  }
  
  export default ResumeBuilder