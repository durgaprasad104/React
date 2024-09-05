import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubOption, setSelectedSubOption] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedCareerPath, setSelectedCareerPath] = useState('');
    const navigate = useNavigate();

    // Handle main category selection
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setSelectedSubOption(''); // Reset sub-option when category changes
        setSelectedClass(''); // Reset class when category changes

        // Navigate to specific page based on selected category
        if (category === 'intermediate') {
            navigate('/IntermediatePage');
        } else if (category === 'btech') {
            navigate('/BTechPage');
        } else if (category === 'mtech') {
            navigate('/MTechPage');
        } else if (category === 'diploma') {
            navigate('/DiplomaPage'); 
        } else if (category === 'degree'){
            navigate('/DegreePage');
        } else if (category === 'it'){
            navigate('/ITIPage');
        }
    };

    // Handle sub-option (class) selection
    const handleSubOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSubOption(selectedValue);
        setSelectedClass(selectedValue);

        if (selectedValue === '10th') {
            // Navigate to a separate page for 10th Class
            navigate('/After10thPage');
        }
    };

    // Handle career path selection
    const handleCareerPathChange = (event) => {
        const path = event.target.value;
        setSelectedCareerPath(path);

        // Navigate or show relevant content based on selected career path
        if (path === 'after10th') {
            navigate('/After10thPage');
        } else if (path === 'afterIntermediate') {
            navigate('/AfterIntermediateGroupPage');
        } else if (path === 'afterITI') {
            navigate('/AfterITIPage');
        } else if (path === 'afterDiploma') {
            navigate('/AfterDiplomaEngineeringPage');
        } else if (path === 'afterDegree') {
            navigate('/AfterDegreePage');
        } else if (path === 'afterBTech') {
            navigate('/AfterBTechPage');
        } else if (path === 'afterMTech') {
            navigate('/AfterMTechPage');
        } 
    };

    // Render content based on selected class
    const renderClassContent = () => {
        if (selectedClass === '8th') {
            return (
                <div style={{ marginTop: '20px' }}>
                    <h2>If you study 8th Class</h2>
                    <p>In the 8th class, students typically study core subjects like:</p>
                    <ul>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>English</li>
                        <li>Regional Language</li>
                    </ul>
                    <p>It's crucial to focus on these subjects as they form the foundation for higher education.</p>
                    <h3>Next Steps</h3>
                    <p>After completing the 8th class, students will generally advance to the 9th class, where they will delve deeper into these subjects and start preparing for higher secondary education.</p>
                </div>
            );
        } else if (selectedClass === '9th') {
            return (
                <div style={{ marginTop: '20px' }}>
                    <h2>If you study 9th Class</h2>
                    <p>The 9th class is a crucial year as it lays the groundwork for your future academic pursuits. This year focuses on reinforcing the core subjects introduced in the 8th class and introduces more advanced concepts. It is considered a foundation year where students solidify their understanding and skills in key areas:</p>
                    <ul>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>English</li>
                        <li>Regional Language</li>
                    </ul>
                    <p>Success in the 9th class is vital as it prepares students for the 10th class, which is marked by the first public exams. These exams play a significant role in shaping your academic path and determining your future educational options.</p>
                    <h3>Next Steps</h3>
                    <p>After the 9th class, students advance to the 10th class, where they face their first major public exams. These exams are crucial for assessing the knowledge gained throughout their school years and can impact future academic and career choices.</p>
                </div>
            );
        } else if (selectedClass === '10th') {
            return (
                <div style={{ marginTop: '20px' }}>
                    <h2>If you study 10th Class</h2>
                    <p>The 10th class is a pivotal year in a student's academic journey. It culminates in the first major public exams that assess your knowledge and understanding across various subjects. These exams are crucial as they mark the transition from primary to secondary education and significantly influence your future academic choices.</p>
                    <p>Subjects typically covered include:</p>
                    <ul>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Studies</li>
                        <li>English</li>
                        <li>Regional Language</li>
                    </ul>
                    <p>Preparation for these exams involves thorough revision and understanding of concepts learned throughout the year. The results of these exams will help guide you towards suitable streams and subjects for your higher secondary education.</p>
                </div>
            );
        }
        return null;
    };

    // Render content based on category
    const renderCategoryContent = () => {
        if (selectedCategory === 'upTo10th') {
            return (
                <div style={{ margin: '20px 0' }}>
                    <label htmlFor="sub-options"><h2>Select Class:</h2>
                    <h3>Please select your class</h3></label>
                    <select
                        id="sub-options"
                        value={selectedSubOption}
                        onChange={handleSubOptionChange}
                        style={{ marginLeft: '-10px', padding: '5px', width: '350px', height: '60px' ,  fontSize: '15px'}}
                    >
                        <option value="">Select a class</option>
                        <option value="8th">8th Class</option>
                        <option value="9th">9th Class</option>
                        <option value="10th">10th Class</option>
                    </select>

                    {/* Render content based on selected class */}
                    {renderClassContent()}
                </div>
            );
        } else if (selectedCategory === 'diploma') {
            return (
                <div style={{ margin: '20px 0' }}>
                    <h2>Diploma Courses</h2>
                    <p>Explore various diploma courses and their career prospects.</p>
                    {/* Render content or links for Diploma courses */}
                </div>
            );
        } else if (selectedCategory === 'it') {
            return (
                <div style={{ margin: '20px 0' }}>
                    <h2>IT Pathways</h2>
                    <p>Explore IT-related courses and career options.</p>
                    {/* Render content or links for IT pathways */}
                </div>
            );
        } else if (selectedCategory === 'btech') {
            return (
                <div style={{ margin: '20px 0' }}>
                    <h2>BTech Courses</h2>
                    <p>Find out about BTech programs and career opportunities.</p>
                    {/* Render content or links for BTech courses */}
                </div>
            );
        } else if (selectedCategory === 'mtech') {
            return (
                <div style={{ margin: '20px 0' }}>
                    <h2>MTech Courses</h2>
                    <p>Learn about MTech programs and their career prospects.</p>
                    {/* Render content or links for MTech courses */}
                </div>
            );
        }

        return null;
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <center><h1>Welcome, {user.email}</h1></center>
            <h1>Welcome to Career Pathway Advisor</h1>
            <p>The "Career Pathway Advisor" is an educational web application designed to guide students through their academic and career choices. The application provides tailored information for different educational stages, helping students and their guardians make informed decisions about their future. Please select your present studying category; if you are studying in 8th, 9th, or 10th, please select the 'up to 10th class' in the select box below.</p>

            {/* Category selection */}
            <div>
                <label htmlFor="category-select"><h2>Select Your Category:</h2>
                <h3>Please select your present class</h3></label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    style={{ padding: '5px', width: '350px', height: '60px', fontSize: '15px' }}
                >
                    <option value="">Select a category</option>
                    <option value="upTo10th">Up to 10th Class</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="diploma">Diploma</option>
                    <option value="it">ITI</option>
                    <option value="degree">Degree</option>
                    <option value="btech">BTech</option>
                    <option value="mtech">MTech</option>
                </select>
            </div>

            {/* Render content based on selected category */}
            {renderCategoryContent()}

            {/* Career Path Selection */}
            <div style={{ margin: '20px 0' }}>
                <label htmlFor="career-path"><h2>Select Career Path:</h2>
                <h3>Please select your Career path</h3></label>
                <select
                    id="career-path"
                    value={selectedCareerPath}
                    onChange={handleCareerPathChange}
                    style={{ padding: '5px', width: '350px', height: '60px', fontSize: '15px' }}
                >
                    <option value="">Select a Career Path</option>
                    <option value="after10th">After 10th Class</option>
                    <option value="afterIntermediate">After Intermediate</option>
                    <option value="afterITI">After ITI</option>
                    <option value="afterDiploma">After Diploma</option>
                    <option value="afterDegree">After Degree</option>
                    <option value="afterBTech">After BTech</option>
                    <option value="afterMTech">After MTech</option>
                </select>
            </div>
        </div>
    );
};

export default Dashboard;
