import ExperienceForm from "./ExperienceForm"
import { useEffect, useState } from "react";


const ExperienceSection = ({addEducation})=> {
    const [educationList, setEducationList] = useState([]);
    

    const onEducationChange = (education) =>{

            setEducationList([...educationList, education])
    }

    useEffect(() =>{
        addEducation([...educationList])

    }, [educationList])
    const [inputList, setInputList] = useState(
                    [<ExperienceForm key={0}  
                    onEducationChange={onEducationChange}
                    />
                ]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<ExperienceForm  key={inputList.length} onEducationChange={onEducationChange}/>));
   
    };

   
    return (
        <>
            {inputList}
            <button onClick={onAddBtnClick}>Add input</button>
        </>
    )
}

export default ExperienceSection;