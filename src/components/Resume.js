import React, { useState, useEffect, useContext} from 'react';


const Resume = ({ resume }) => {
    


    return (
        <div>
            {resume.education.map((edu, index) => (<div key={index}>
                        <h1  style={{"padding": "33px"}}>{edu.title}</h1>
                        <p >{edu.description}</p>
                    </div> 
                    ))
            }
<p>Tst</p>
        </div>
    )
}


export default Resume;