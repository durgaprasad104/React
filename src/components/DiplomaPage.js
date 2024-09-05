import React, { useState } from 'react';

const DiplomaPage = () => {
    const [selectedYear, setSelectedYear] = useState('');

    const yearGuidance = {
        '1st Year': [
            'Build a Strong Foundation: Focus on understanding the core concepts in mathematics, physics, and basic engineering subjects. These are crucial for your future courses.',
            'Develop Study Habits: Establish effective study routines and time management skills. This will help you handle the workload in the coming years.',
            'Explore Extracurricular Activities: Get involved in clubs, societies, or sports to build soft skills and make new connections.',
            'Basic Programming: Start learning basic programming if you haven\'t already. It\'s a valuable skill across all engineering disciplines.',
            'Get Familiar with Campus Resources: Learn about the library, labs, and other academic resources available to you.',
        ],
        '2nd Year': [
            'Deepen Your Knowledge: Focus on core subjects and start specializing in your area of interest.',
            'Work on Projects: Apply your learning in practical projects or group assignments.',
            'Internships: Start looking for internship opportunities to gain real-world experience.',
            'Build Networks: Connect with professionals and professors for future guidance.',
            'Skill Development: Continue developing technical and soft skills via online courses or certifications.',
        ],
        '3rd Year': [
            'Capstone Project: Engage in significant projects that demonstrate your skills and knowledge.',
            'Prepare for Internships: Secure internships that provide hands-on experience in your field of study.',
            'Career Planning: Begin preparing your resume and practicing for job interviews.',
            'Industry Certifications: Consider earning certifications that will boost your employability.',
            'Transition to the Workforce: Get ready for the transition from student life to professional life.',
        ]
    };

    const handleYearSelect = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div>
            <h1>Diploma Course Guidance</h1>
            <div>
                <h2>Select Your Year</h2>
                <select 
                    onChange={handleYearSelect} 
                    value={selectedYear} 
                    style={{ 
                        marginLeft: '10px', 
                        padding: '5px', 
                        width: '350px', 
                        height: '60px', 
                        fontSize: '15px' 
                    }}
                >
                    <option value="">Select a year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                </select>
            </div>

            {selectedYear && (
                <div>
                    <h3>{selectedYear} Guidance</h3>
                    <ul>
                        {yearGuidance[selectedYear].map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DiplomaPage;
