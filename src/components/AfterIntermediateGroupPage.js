import React, { useState } from 'react';

const AfterIntermediateGroupPage = () => {
    const [selectedGroup, setSelectedGroup] = useState('');

    // Handle group selection
    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    // Render content based on selected group
    const renderGroupContent = () => {
        switch (selectedGroup) {
            case 'MPC':
                return (
                    <div>
                        <h2>After Completing MPC 2nd Year</h2>
                        <p>Further study options after completing the MPC group in the 2nd year of Intermediate include:</p>
                        <ul>
                            <li><strong>Engineering:</strong> Pursue B.Tech or B.E. in various branches such as Computer Science, Mechanical, Civil, Electrical, Electronics, etc.</li>
                            <li><strong>Architecture:</strong> Study B.Arch to become a licensed architect.</li>
                            <li><strong>Aerospace Engineering:</strong> Specialize in aircraft and spacecraft design and production.</li>
                            <li><strong>Defense Services:</strong> Join Indian Armed Forces (Army, Navy, Air Force) through NDA or technical entry schemes.</li>
                            <li><strong>Merchant Navy:</strong> Pursue B.Sc. in Nautical Science or Marine Engineering.</li>
                            <li><strong>Pure Sciences:</strong> Opt for B.Sc. in Physics, Chemistry, or Mathematics for a career in research or academia.</li>
                            <li><strong>Data Science and Analytics:</strong> Study B.Tech in Data Science or related fields.</li>
                        </ul>
                        <h3>Entrance Exams After MPC</h3>
                        <p>Some common entrance exams for the options above include:</p>
                        <ul>
                            <li><strong>Engineering:</strong> JEE Main, JEE Advanced</li>
                            <li><strong>Architecture:</strong> NATA</li>
                            <li><strong>Aerospace Engineering:</strong> JEE Main, JEE Advanced</li>
                            <li><strong>Defense Services:</strong> NDA Exam</li>
                            <li><strong>Merchant Navy:</strong> IMU-CET</li>
                            <li><strong>Pure Sciences:</strong> JEST, IIT JAM</li>
                            <li><strong>Data Science and Analytics:</strong> JEE Main (for some B.Tech programs), direct admission based on merit</li>
                        </ul>
                    </div>
                );
            case 'BPC':
                return (
                    <div>
                        <h2>After Completing BIPC 2nd Year</h2>
                        <p>Further study options after completing the BIPC group in the 2nd year of Intermediate include:</p>
                        <ul>
                            <li><strong>Medical Sciences:</strong> Pursue MBBS, BDS, BAMS, BHMS, BPT, Nursing, etc.</li>
                            <li><strong>Pharmacy:</strong> Study B.Pharm or D.Pharm.</li>
                            <li><strong>Paramedical Sciences:</strong> Opt for courses in Physiotherapy, Radiology, Laboratory Technology, etc.</li>
                            <li><strong>Veterinary Sciences:</strong> Pursue BVSc & AH (Bachelor of Veterinary Science and Animal Husbandry).</li>
                            <li><strong>Allied Health Sciences:</strong> Study courses related to healthcare such as Medical Lab Technology, Operation Theatre Technology, etc.</li>
                            <li><strong>Biotechnology:</strong> Opt for B.Sc. in Biotechnology or related fields.</li>
                        </ul>
                        <h3>Entrance Exams After BIPC</h3>
                        <p>Some common entrance exams for the options above include:</p>
                        <ul>
                            <li><strong>Medical Sciences:</strong> NEET</li>
                            <li><strong>Pharmacy:</strong> GPAT, BITSAT</li>
                            <li><strong>Paramedical Sciences:</strong> Various state and national-level exams</li>
                            <li><strong>Veterinary Sciences:</strong> AIPVT</li>
                            <li><strong>Allied Health Sciences:</strong> State-level exams</li>
                            <li><strong>Biotechnology:</strong> JNU CEEB, BHU PET</li>
                        </ul>
                    </div>
                );
            case 'CEC':
                return (
                    <div>
                        <h2>After Completing CEC 2nd Year</h2>
                        <p>Further study options after completing the CEC (Commerce, Economics, Civics) group include:</p>
                        <ul>
                            <li><strong>Commerce:</strong> Pursue B.Com, BBA, or MBA.</li>
                            <li><strong>Economics:</strong> Study B.A. in Economics or related fields.</li>
                            <li><strong>Law:</strong> Pursue LLB or integrated Law programs.</li>
                            <li><strong>Management:</strong> Opt for BBA/MBA or other management courses.</li>
                            <li><strong>Finance:</strong> Study B.Com with specializations in Finance or Accounting.</li>
                        </ul>
                        <h3>Entrance Exams After CEC</h3>
                        <p>Some common entrance exams for the options above include:</p>
                        <ul>
                            <li><strong>Commerce and Management:</strong> CPT, CAT, MAT</li>
                            <li><strong>Law:</strong> CLAT, LSAT</li>
                        </ul>
                    </div>
                );
            case 'HEC':
                return (
                    <div>
                        <h2>After Completing HEC 2nd Year</h2>
                        <p>Further study options after completing the HEC (Humanities, Economics, Civics) group include:</p>
                        <ul>
                            <li><strong>Humanities:</strong> Pursue B.A. in various subjects like English, History, Political Science, Sociology, etc.</li>
                            <li><strong>Journalism:</strong> Study B.Journ or related fields.</li>
                            <li><strong>Social Work:</strong> Opt for BSW (Bachelor of Social Work).</li>
                            <li><strong>Law:</strong> Pursue LLB or integrated Law programs.</li>
                            <li><strong>Design:</strong> Study Fashion Design, Interior Design, or related courses.</li>
                        </ul>
                        <h3>Entrance Exams After HEC</h3>
                        <p>Some common entrance exams for the options above include:</p>
                        <ul>
                            <li><strong>Humanities and Social Work:</strong> Various state and national-level exams</li>
                            <li><strong>Design:</strong> NIFT, NID</li>
                            <li><strong>Journalism:</strong> JMI, DUET</li>
                        </ul>
                    </div>
                );
            case 'MEC':
                return (
                    <div>
                        <h2>After Completing MEC 2nd Year</h2>
                        <p>Further study options after completing the MEC (Mathematics, Economics, Civics) group include:</p>
                        <ul>
                            <li><strong>Economics:</strong> Pursue B.A. in Economics or related fields.</li>
                            <li><strong>Commerce:</strong> Study B.Com or related courses.</li>
                            <li><strong>Law:</strong> Pursue LLB or integrated Law programs.</li>
                            <li><strong>Management:</strong> Opt for BBA/MBA or other management courses.</li>
                            <li><strong>Data Science:</strong> Study B.Sc. in Data Science or related fields.</li>
                        </ul>
                        <h3>Entrance Exams After MEC</h3>
                        <p>Some common entrance exams for the options above include:</p>
                        <ul>
                            <li><strong>Economics and Commerce:</strong> Various state and national-level exams</li>
                            <li><strong>Law:</strong> CLAT, LSAT</li>
                            <li><strong>Management:</strong> CAT, MAT</li>
                            <li><strong>Data Science:</strong> JNU CEEB</li>
                        </ul>
                    </div>
                );
           
            default:
                return <div>Select a group to see further study options.</div>;
        }
    };

    return (
        <div style={{ padding: '50px', textAlign: 'left' }}>
            <center><h1>Options After Intermediate</h1></center>

            <label htmlFor="intermediate-group"><h2>Select Your Intermediate Group:</h2></label>
            <select
                id="intermediate-group"
                value={selectedGroup}
                onChange={handleGroupChange}
                style={{ marginLeft: '-10px', padding: '5px', width: '350px', height: '60px', fontSize: '15px' }}
            >
                <option value="">Select a group</option>
                <option value="MPC">MPC (Mathematics, Physics, Chemistry)</option>
                <option value="BPC">BIPC (Biology, Physics, Chemistry)</option>
                <option value="CEC">CEC (Commerce, Economics, Civics)</option>
                <option value="HEC">HEC (Humanities, Economics, Civics)</option>
                <option value="MEC">MEC (Mathematics, Economics, Civics)</option>
            </select>

            {/* Render content based on selected group */}
            {renderGroupContent()}
        </div>
    );
};

export default AfterIntermediateGroupPage;
