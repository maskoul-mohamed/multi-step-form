import ExperienceForm from "./ExperienceForm"
import { useEffect, useState } from "react";
import { Box, TextField, Button } from "@mui/material";



const ExperienceSection = ({addEducation, nextStep, prevStep, education})=> {
    const [educationList, setEducationList] = useState([...education]);
    

    const handleOnChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...educationList];
        list[index][name] = value;
        setEducationList(list);
      };

    const onEducationChange = (education,id) =>{
            const list = [...educationList];
            list.forEach((item, i) => {
                console.log(item)
                if(item.id === id){
                    item = education
                    list[i] = item
                    setEducationList([...list])
                } 
            });
    }

    useEffect(() =>{
        addEducation(educationList)

    }, [educationList])
    const [inputList, setInputList] = useState(
                    [<ExperienceForm key={0}  
                    onEducationChange={onEducationChange}
                    />
                ]);
    const onAddBtnClick = () => {
        setEducationList([...educationList, {
            id:1,
            title: "Lorem",
            description:"Lorem epsum dfjkdshfkjhdskjfhdkjfhhdkjshf"
        }])
    };

   
    return (
        <>
            {educationList.map((item, index) => {
                return (
                    <div key={index}>
                    <Box 
                    >
                        <TextField
                            sx={{m: 5}}
                            label="Title"
                            name="title"
                            value={item.title}
                            variant="standard"
                            onChange={(e) => handleOnChange(e, index)}
                        />
                        <TextField
                            sx={{m: 5}}
                            value={item.description}
                            name="description"
                            label="Description"
                            variant="standard"  
                            onChange={(e) => handleOnChange(e, index)}
            
                        />
                    </Box>
                    </div>
                )
            })}
            <button onClick={onAddBtnClick}>Add input</button>
            <Button 
              color="primary"
              variant="contained"
              onClick={() => nextStep()}
              sx={{ mt: 3, }}
            >Next</Button>
            <Button 
              color="secondary"
              sx={{ mt: 3, mb: 2,  }}
              variant="contained"
              onClick={() => prevStep()}
            >Back</Button>
        </>
    )
}

export default ExperienceSection;