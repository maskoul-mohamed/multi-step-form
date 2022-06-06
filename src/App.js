import ResumeBuilder from './components/ResumeBuilder';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import React, { useState, useMemo } from 'react'
import { ResumeContext } from './contexts/ResumeContext';

function App() {
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

const value = useMemo(() => ({ resume, setResume }), [resume, setResume]);
  return (
      <>
          <ResponsiveAppBar />
          <ResumeBuilder />

      </>
  );
}

export default App;
