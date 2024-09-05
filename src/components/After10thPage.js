import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const After10thPage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        const option = event.target.value;
        setSelectedOption(option);
        if (option === 'intermediate') {
            navigate('/IntermediatePage');
        } else if (option === 'diploma') {
            navigate('/DiplomaPage'); 
        } else if (option === 'iti'){
            navigate('/ITIPage');
        } else if (option === 'paramedical') {
            navigate('/ParamedicalCourses');
        }
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <h1>If you Study 10th Class</h1>
            <h3>10th Class: A Crucial Milestone</h3>
            <p>
            10th grade, often considered a significant milestone in a student's academic journey, is where foundational concepts across various subjects are solidified. The subjects in 10th grade typically include:</p>
<ul> <li>
<strong>Mathematics:</strong> Focuses on algebra, geometry, trigonometry, and statistics, building analytical and problem-solving skills.</li>
<li><strong>Science: </strong>Includes Physics, Chemistry, and Biology, laying the groundwork for future studies in these fields.</li>
<li><strong>Social Studies:</strong> Covers history, geography, political science, and economics, helping students understand societal structures and global events.</li>
<li><strong>English:</strong> Enhances language skills, including grammar, literature, and writing, essential for effective communication.</li>
<li><strong>Second Language: </strong>Could be a regional language or another foreign language, improving bilingual or multilingual proficiency.</li>

                
            </ul>
            <h2>Educational Pathways After 10th Grade</h2>
                 <h4>A. Technical and Vocational Training</h4>

                  <ul> <h3>1.ITI Courses:</h3>

                       <li><strong>Relevant Trades: </strong>Electrician, Mechanic (Automobile), Fitter, etc.</li>
                       <li><strong> Duration: </strong>Typically 1-2 years.</li>
                       <li><strong>Purpose:</strong> Provides hands-on skills and training for technical roles related to vehicle maintenance and repair.</li>
                    <h3>2.Polytechnic Diploma</h3>

                    <li><strong>Courses: </strong>Mechanical Engineering, Automobile Engineering, Electrical Engineering.</li>
                    <li><strong>Duration: </strong>Typically 3 years.</li>
                    <li><strong>Purpose:</strong> Offers more in-depth technical education compared to ITI.</li>
                   <h3>3. Higher Secondary Education</h3>

                          <h4>Intermediate (11th and 12th Grades)</h4>
                          <li><strong>Stream Options:</strong> Science (Physics, Chemistry, Mathematics), Commerce.</li>
                          <li><strong> Purpose:</strong>strong Prepares students for higher education or vocational training.</li>
            </ul>
            <p>If you see more details about these by selecting the below select box.</p>
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="after10th-options"><h2>Select Your Path After 10th:</h2>
                <h3>Select what you have to interest to know</h3></label>
                <select
                    id="after10th-options"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    style={{ marginLeft: '-10px', padding: '5px', width: '350px', height: '60px' ,  fontSize: '15px'}}
                >
                    <option value="">Select an option</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="diploma">Diploma</option>
                    <option value="iti">ITI</option>
                </select>
            </div>

        </div>
        
    );
};

export default After10thPage;