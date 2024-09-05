import React, { useState } from 'react';

const DegreeYearPage = () => {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedDegree, setSelectedDegree] = useState('');

    // Handle Year and Degree Selection
    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleDegreeChange = (event) => {
        setSelectedDegree(event.target.value);
    };

    // Guidance based on selected degree and year
    const degreeGuidance = {
        "B.Sc.": {
            "1st Year": (
                <ul>
                    <li><strong>Build a Strong Foundation:</strong> Focus on understanding the basic concepts of your subjects, as they will be crucial in the upcoming years.</li>
                    <li><strong>Explore Various Fields:</strong> Identify areas of interest within your major, whether it's physics, chemistry, biology, or another field.</li>
                    <li><strong>Develop Good Study Habits:</strong> Create a study schedule and stick to it. Good habits formed early will help you throughout your degree.</li>
                    <li><strong>Participate in Extracurricular Activities:</strong> Join clubs or societies related to your field of study to build networks and enhance your resume.</li>
                    <li><strong>Start Thinking About Careers:</strong> Begin exploring different career paths within science, such as research, teaching, or industry roles.</li>
                </ul>
            ),
            "2nd Year": (
                <ul>
                    <li><strong>Deepen Your Subject Knowledge:</strong> Engage more deeply with your core subjects and consider electives that align with your interests.</li>
                    <li><strong>Start Gaining Practical Experience:</strong> Look for internships, lab work, or research projects to gain hands-on experience in your field.</li>
                    <li><strong>Explore Research Opportunities:</strong> If you’re interested in research, connect with faculty members to explore opportunities for working on research projects.</li>
                    <li><strong>Prepare for Competitive Exams:</strong> If you plan to pursue higher education (like M.Sc. or Ph.D.), start preparing for entrance exams like JAM, GRE, or NET.</li>
                    <li><strong>Enhance Your Skills:</strong> Consider learning complementary skills such as programming, data analysis, or scientific writing.</li>
                </ul>
            ),
            "3rd Year": (
                <ul>
                    <li><strong>Focus on Final Projects:</strong> Dedicate time to your final year project or thesis, as it will be a significant part of your degree.</li>
                    <li><strong>Prepare for Further Studies:</strong> If you're planning to continue with higher education, apply for relevant entrance exams and begin the application process for postgraduate programs.</li>
                    <li><strong>Job Readiness:</strong> Start preparing for job interviews, attend campus placements, and update your resume with relevant skills and experiences.</li>
                    <li><strong>Networking:</strong> Attend seminars, workshops, and career fairs to network with professionals in your field.</li>
                    <li><strong>Government Job Preparation:</strong> If interested in government jobs, focus on exams like UPSC, SSC, or state-level exams specific to your field of study.</li>
                </ul>
            ),
        },
        "B.Com.": {
            "1st Year": (
                <ul>
                    <li><strong>Understand the Basics of Commerce:</strong> Focus on building a solid foundation in subjects like accounting, economics, and business studies.</li>
                    <li><strong>Explore Different Areas in Commerce:</strong> Identify areas of interest such as finance, marketing, or human resources.</li>
                    <li><strong>Develop Financial Literacy:</strong> Enhance your understanding of financial concepts and start managing your personal finances effectively.</li>
                    <li><strong>Join Student Organizations:</strong> Participate in commerce-related clubs or societies to gain additional exposure and experience.</li>
                    <li><strong>Career Exploration:</strong> Start exploring various career paths in commerce, such as auditing, banking, or entrepreneurship.</li>
                </ul>
            ),
            "2nd Year": (
                <ul>
                    <li><strong>Specialize in Your Interest Area:</strong> Choose electives or specializations that align with your career goals, whether in finance, marketing, or another area.</li>
                    <li><strong>Gain Practical Experience:</strong> Look for internships or part-time jobs to gain practical experience in your field of interest.</li>
                    <li><strong>Prepare for Professional Exams:</strong> If interested in certifications like CA, CS, or CFA, start your preparation alongside your regular studies.</li>
                    <li><strong>Enhance Your Skills:</strong> Consider learning additional skills such as digital marketing, data analysis, or financial modeling.</li>
                    <li><strong>Start Networking:</strong> Build professional connections through internships, seminars, and alumni networks.</li>
                </ul>
            ),
            "3rd Year": (
                <ul>
                    <li><strong>Focus on Your Final Year Project:</strong> If your program includes a project, make it a priority, as it can significantly impact your final grades.</li>
                    <li><strong>Prepare for Job Interviews:</strong> Start preparing for campus placements or job interviews, focusing on common questions in your field.</li>
                    <li><strong>Further Studies or Certifications:</strong> Decide if you want to pursue further studies like an MBA or professional certifications and start the application process.</li>
                    <li><strong>Resume Building:</strong> Update your resume with all your internships, projects, and relevant coursework.</li>
                    <li><strong>Government Job Preparation:</strong> If interested in government jobs, focus on exams like UPSC, banking exams, or state public service exams.</li>
                </ul>
            ),
        },
        "B.A.": {
            "1st Year": (
                <ul>
                    <li><strong>Establish a Foundation:</strong> Focus on core subjects such as English, History, Political Science, or Psychology, depending on your major.</li>
                    <li><strong>Explore Your Interests:</strong> Take electives that interest you and help you discover what areas you might want to specialize in later.</li>
                    <li><strong>Develop Study Skills:</strong> Cultivate effective study habits and time management skills that will serve you throughout your degree.</li>
                    <li><strong>Engage in Campus Activities:</strong> Join clubs, societies, or student organizations related to your field to build connections and enhance your resume.</li>
                    <li><strong>Career Exploration:</strong> Start exploring potential career paths in areas like teaching, writing, social work, or public administration.</li>
                </ul>
            ),
            "2nd Year": (
                <ul>
                    <li><strong>Deepen Subject Knowledge:</strong> Focus on more advanced topics in your major and choose electives that align with your interests and career goals.</li>
                    <li><strong>Get Practical Experience:</strong> Look for internships, volunteer opportunities, or part-time jobs related to your field to gain practical experience.</li>
                    <li><strong>Build Research Skills:</strong> If interested in research or academia, start working on small research projects or assist faculty members with their research.</li>
                    <li><strong>Prepare for Graduate Studies:</strong> If planning to pursue further studies, begin preparing for entrance exams or research potential graduate programs.</li>
                    <li><strong>Network:</strong> Attend seminars, workshops, and networking events related to your field of interest.</li>
                </ul>
            ),
            "3rd Year": (
                <ul>
                    <li><strong>Focus on Major Projects:</strong> Prioritize any major projects or dissertations as they will be crucial for your final grades.</li>
                    <li><strong>Prepare for Job Market:</strong> Start preparing for job interviews, update your resume, and consider internships or part-time work.</li>
                    <li><strong>Plan for Further Studies:</strong> Apply for graduate programs or professional certifications if you plan to continue your education.</li>
                    <li><strong>Government Job Preparation:</strong> If interested in government jobs, start focusing on relevant exams and application processes.</li>
                    <li><strong>Build Professional Relationships:</strong> Network with professionals, alumni, and faculty to explore job opportunities and career advice.</li>
                </ul>
            ),
        },
        "B.Z.C.": {
            "1st Year": (
                <ul>
                    <li><strong>Build Core Knowledge:</strong> Focus on understanding the fundamentals of Zoology and Chemistry as these will form the basis of advanced topics.</li>
                    <li><strong>Explore Specializations:</strong> Identify areas of interest within Zoology and Chemistry to guide your elective choices and future studies.</li>
                    <li><strong>Develop Good Study Practices:</strong> Establish effective study habits and time management techniques to keep up with the coursework.</li>
                    <li><strong>Engage in Relevant Activities:</strong> Join clubs or societies related to Zoology and Chemistry to gain additional exposure and experience.</li>
                    <li><strong>Consider Career Paths:</strong> Explore potential career paths in research, education, or industry roles related to Zoology and Chemistry.</li>
                </ul>
            ),
            "2nd Year": (
                <ul>
                    <li><strong>Advance Your Knowledge:</strong> Delve deeper into advanced topics in Zoology and Chemistry, and start specializing in areas of interest.</li>
                    <li><strong>Gain Practical Experience:</strong> Look for internships, lab work, or research opportunities to gain hands-on experience in your field.</li>
                    <li><strong>Prepare for Research:</strong> If interested in research, start working on small projects or assist faculty members with their research.</li>
                    <li><strong>Plan for Future Studies:</strong> If you plan to pursue higher education, begin preparing for relevant entrance exams and researching potential programs.</li>
                    <li><strong>Network with Professionals:</strong> Attend seminars, workshops, and conferences to build connections in your field.</li>
                </ul>
            ),
            "3rd Year": (
                <ul>
                    <li><strong>Focus on Final Projects:</strong> Dedicate significant effort to your final year project or dissertation, as it will be a major component of your degree.</li>
                    <li><strong>Prepare for Career or Further Studies:</strong> Start preparing for job interviews or applying for graduate programs if you plan to continue your education.</li>
                    <li><strong>Update Your Resume:</strong> Include all relevant internships, projects, and skills on your resume and prepare for job applications or interviews.</li>
                    <li><strong>Explore Government Jobs:</strong> If interested in government roles, focus on relevant exams and application procedures.</li>
                    <li><strong>Build Professional Relationships:</strong> Network with professionals, faculty, and alumni to explore job opportunities and career advice.</li>
                </ul>
            ),
        },
    };

    return (
        <div>
            <h1>Guidance for Degree and Year</h1>
            <div>
                <label>
                    <h3>Select Degree:</h3></label>
                    <select value={selectedDegree} onChange={handleDegreeChange} style={{ marginLeft: '10px',width: '350px', height: '60px',fontSize: '15px' }}>
                        <option value="">--Select Degree--</option>
                        <option value="B.Sc.">B.Sc.</option>
                        <option value="B.Com.">B.Com.</option>
                        <option value="B.A.">B.A.</option>
                        <option value="B.Z.C.">B.Z.C.</option>
                    </select>
                
            </div>
            <div>
                <label>
                   <h3>Select Year:</h3>
                    <select value={selectedYear} onChange={handleYearChange} style={{ marginLeft: '10px',width: '350px', height: '60px',fontSize: '15px' }}>
                        <option value="">--Select Year--</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                    </select>
                </label>
            </div>
            {selectedDegree && selectedYear && (
                <div>
                    <h2>Guidance for {selectedDegree} - {selectedYear}</h2>
                    <div>
                        {degreeGuidance[selectedDegree] && degreeGuidance[selectedDegree][selectedYear]}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DegreeYearPage;
