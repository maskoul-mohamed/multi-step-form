import React from 'react';
import { useState, useEffect } from 'react';
import ExperienceSection from './ExperienceSection';
import PersonalInfoForm from './PersonalInfoForm';

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
                <PersonalInfoForm nextStep={nextStep} />
            )
        case 2:
            return (
                <ExperienceSection nextStep={nextStep} />
            )

    }
}

export default ResumeBuilder;