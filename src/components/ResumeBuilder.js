import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import ExperienceSection from './ExperienceSection';
import PersonalInfoForm from './PersonalInfoForm';
import Resume from './templates/template-1/Resume';
import { ResumeContext } from '../contexts/ResumeContext';
import GenericPdfDownloader from './GenericPdfDownloader'

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
        education: [{
            id:1,
            title: "Lorem",
            description:"Lorem epsum dfjkdshfkjhdskjfhdkjfhhdkjshf"
        }],
        skills:[],
        others:[]
    })


    const addEducation = (eduList) => {
        setResume({
            ...resume,
            education: eduList
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
                <div style={{display: "flex"}}>
                    <Resume resume={resume} />
                    <PersonalInfoForm 
                        nextStep={nextStep} 
                        prevStep={prevStep}
                    />
                    <GenericPdfDownloader rootElementId={"divToDownload"}  />
                </div>

            )
        case 2:
            return (
                <>
                    <Resume resume={resume} />
                    <ExperienceSection 
                        addEducation={addEducation} 
                        nextStep={nextStep} 
                        prevStep={prevStep} 
                        education={resume.education}

                    />
                </>
            )

    }
}

export default ResumeBuilder;