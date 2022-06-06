import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";


const ExperienceForm = ({onEducationChange, initList}) => {
    const [education, setEducation] = useState({
        id:1,
        title: "Lorem",
        description:"Lorem epsum dfjkdshfkjhdskjfhdkjfhhdkjshf"
    })

   


    const handleOnChange = (input) => (e) => {
        setEducation({...education, [input] : e.target.value})
    }

    useEffect(()=> {
        onEducationChange(education)
    }, [education])
    return (
        <>
        <Box
        >
            <TextField
                defaultValue={education.title}
                sx={{m: 5}}
                label="Title"
                variant="standard"
                onChange={handleOnChange("title")}
            />
            <TextField
                defaultValue={education.description}
                sx={{m: 5}}
                label="Description"
                variant="standard"  
                onChange={handleOnChange("description")}

            />
        </Box>
        </>
    )
}

export default ExperienceForm;