import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import ExperienceSection from './ExperienceSection';
import PersonalInfoForm from './PersonalInfoForm';
import Resume from './Resume';
import { ResumeContext } from '../contexts/ResumeContext';

const ResumeBuilder = () => {
    const [step, setStep] = useState(1)
    const [resume, setResume] = useState({
        personalInfo: {
            firstName:"",
            lastName:"",
            postPosition:"",
            email:"",
        },
        experiences: [],
        education: [],
        skills:[],
        others:[]
    })


    const addEducation = (eduList) => {
        setResume({
            ...resume,
            education: [eduList]
        })
    }
    const nextStep =() => {
        setStep(step + 1)

        console.log(step)
    }
    const prevStep =() => {
        setStep(step - 1)

        console.log(step)
    }
    switch(step){
        case 1:
            return (
                <>
                    <Resume resume={resume} />
                    <PersonalInfoForm nextStep={nextStep} />
                </>

            )
        case 2:
            return (
                <>
                    <Resume resume={resume} />
                    <ExperienceSection addEducation={addEducation} res nextStep={nextStep} />
                </>
            )

    }
}

export default ResumeBuilder;