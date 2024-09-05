import React, { useState } from 'react';

const BTechPage = () => {
    const [selectedYear, setSelectedYear] = useState('');

    // Handle Year Selection
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    // Detailed point-wise guidance based on the selected year
    const yearGuidance = {
        "1st Year": (
            <ul>
                <li><strong>Build a Strong Foundation:</strong> Focus on understanding the core concepts in mathematics, physics, and basic engineering subjects. These are crucial for your future courses.</li>
                <li><strong>Develop Study Habits:</strong> Establish effective study routines and time management skills. This will help you handle the workload in the coming years.</li>
                <li><strong>Explore Extracurricular Activities:</strong> Get involved in clubs, societies, or sports to build soft skills and make new connections.</li>
                <li><strong>Basic Programming:</strong> Start learning basic programming if you haven't already. It's a valuable skill across all engineering disciplines.</li>
                <li><strong>Get Familiar with Campus Resources:</strong> Learn about the library, labs, and other academic resources available to you.</li>
            </ul>
        ),
        "2nd Year": (
            <ul>
                <li><strong>Dive into Core Subjects:</strong> Begin focusing on subjects specific to your engineering branch. These courses will build on the foundation you created in your first year.</li>
                <li><strong>Consider Online Courses:</strong> Supplement your learning with online courses related to your branch. Platforms like Coursera, edX, and Udemy offer valuable resources.</li>
                <li><strong>Explore Internship Opportunities:</strong> Start researching potential internships. Although many are taken up in the third year, early preparation is key.</li>
                <li><strong>Join Technical Clubs:</strong> Engage with technical clubs or societies related to your branch. This will provide hands-on experience and exposure to industry trends.</li>
                <li><strong>Strengthen Your Resume:</strong> Begin to document your skills, projects, and any certifications you earn.</li>
            </ul>
        ),
        "3rd Year": (
            <ul>
                <li><strong>Apply for Internships:</strong> Actively seek out internships that align with your career goals. Practical experience is invaluable and often leads to job offers.</li>
                <li><strong>Work on Major Projects:</strong> Start or continue working on significant projects that you can showcase during job interviews. Focus on real-world applications and problem-solving.</li>
                <li><strong>Prepare for Campus Placements:</strong> Begin studying for campus placements by practicing aptitude tests, group discussions, and interview techniques.</li>
                <li><strong>Network with Industry Professionals:</strong> Attend seminars, workshops, and conferences. Networking can open doors to job opportunities and mentorship.</li>
                <li><strong>Consider GRE/GATE Prep:</strong> If you're interested in higher studies, consider beginning your preparation for exams like GRE, GATE, or other relevant entrance tests.</li>
            </ul>
        ),
        "4th Year": (
            <ul>
                <li><strong>Finalize Your Projects:</strong> Complete your final year project with a focus on quality and innovation. This project is often a key talking point during interviews.</li>
                <li><strong>Intensify Interview Preparation:</strong> Sharpen your technical and soft skills in preparation for job interviews. Participate in mock interviews and get feedback.</li>
                <li><strong>Apply for Jobs:</strong> Actively apply for jobs through campus placements and online job portals. Tailor your resume and cover letter to each job application.</li>
                <li><strong>Consider Further Studies:</strong> If you're planning to pursue a master's degree, ensure you've applied to programs and taken necessary exams like GRE, GATE, or others.</li>
                <li><strong>Plan for Transition:</strong> Start planning your transition from academic life to professional life. This includes understanding financial independence, workplace culture, and setting career goals.</li>
            </ul>
        ),
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <h2>Bachelor of Technology (BTech) Guidance</h2>
            <p>Select your academic year to view detailed guidance on what to focus on during that year of your BTech program.</p>

            {/* Select Year */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="academic-year"><h2>Select Year:</h2></label>
                <select
                    id="academic-year"
                    onChange={handleYearChange}
                    value={selectedYear}
                    style={{ width: '350px', height: '60px',fontSize: '15px' }} // Adjusted width and height
                >
                    <option value="">Select a Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                </select>
            </div>

            {/* Display Guidance */}
            {selectedYear && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{selectedYear} Guidance</h3>
                    {yearGuidance[selectedYear]}
                </div>
            )}
        </div>
    );
};

export default BTechPage;
