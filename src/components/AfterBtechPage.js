import React, { useState } from 'react';

const AfterBtechPage = () => {
    const [selectedBranch, setSelectedBranch] = useState('');

    // Content for After B.Tech based on branch
    const btechContent = {
        "Computer Engineering": {
            scope: "Computer Engineering focuses on the design and development of computer systems and software. It prepares students for roles in software development, systems engineering, and IT management.",
            furtherStudies: [
                "M.Tech in Computer Science and Engineering",
                "M.Tech in Information Technology",
                "Certifications in AI, Machine Learning, and Data Science"
            ],
            entranceExams: [
                "GATE (Graduate Aptitude Test in Engineering)",
                "GRE for studies abroad",
                "CAT for MBA programs"
            ],
            careerPaths: [
                "Software Developer",
                "Systems Engineer",
                "IT Consultant",
                "Data Scientist"
            ]
        },
        "Mechanical Engineering": {
            scope: "Mechanical Engineering covers the design, analysis, manufacturing, and maintenance of mechanical systems. It opens up careers in automotive, aerospace, and manufacturing industries.",
            furtherStudies: [
                "M.Tech in Mechanical Engineering",
                "M.Tech in Automotive Engineering",
                "Certifications in CAD/CAM, Robotics"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Mechanical Engineer",
                "Automotive Engineer",
                "Robotics Engineer",
                "Product Designer"
            ]
        },
        "Civil Engineering": {
            scope: "Civil Engineering involves the design, construction, and maintenance of infrastructure such as roads, bridges, and buildings. It prepares students for roles in both public and private sector infrastructure projects.",
            furtherStudies: [
                "M.Tech in Civil Engineering",
                "M.Tech in Structural Engineering",
                "Certifications in Project Management and Sustainable Design"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Civil Engineer",
                "Structural Engineer",
                "Project Manager",
                "Construction Manager"
            ]
        },
        "Electrical Engineering": {
            scope: "Electrical Engineering focuses on the study and application of electricity, electronics, and electromagnetism. It prepares students for careers in energy production, power systems, and electronics design.",
            furtherStudies: [
                "M.Tech in Electrical Engineering",
                "M.Tech in Power Systems",
                "Certifications in Renewable Energy and Smart Grids"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Electrical Engineer",
                "Power Systems Engineer",
                "Electronics Design Engineer",
                "Control Systems Engineer"
            ]
        },
        "Electronics and Communication Engineering": {
            scope: "Electronics and Communication Engineering deals with electronic devices, circuits, communication equipment, and related systems. It prepares students for roles in telecommunications, consumer electronics, and embedded systems.",
            furtherStudies: [
                "M.Tech in VLSI Design",
                "M.Tech in Communication Systems",
                "Certifications in Embedded Systems and Signal Processing"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Electronics Engineer",
                "Telecommunication Engineer",
                "Embedded Systems Engineer",
                "Signal Processing Engineer"
            ]
        },
        "Chemical Engineering": {
            scope: "Chemical Engineering focuses on chemical processes, safety, and materials, preparing students for roles in chemical manufacturing and process engineering.",
            furtherStudies: [
                "M.Tech in Chemical Engineering",
                "M.Tech in Process Engineering",
                "Certifications in Process Control, Chemical Safety, and Environmental Engineering"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Chemical Process Engineer",
                "Quality Control Engineer",
                "Plant Operator",
                "Process Safety Engineer"
            ]
        },
        "Automobile Engineering": {
            scope: "Automobile Engineering focuses on the design, development, and manufacturing of vehicles. It prepares students for careers in the automotive industry, focusing on innovation and sustainability.",
            furtherStudies: [
                "M.Tech in Automobile Engineering",
                "M.Tech in Automotive Design",
                "Certifications in Hybrid Vehicles and Electric Mobility"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Automobile Engineer",
                "Vehicle Dynamics Engineer",
                "Automotive Design Engineer",
                "Quality Control Engineer"
            ]
        },
        "Aeronautical Engineering": {
            scope: "Aeronautical Engineering focuses on the design, development, testing, and production of aircraft. It prepares students for careers in the aerospace industry, including roles in defense and space exploration.",
            furtherStudies: [
                "M.Tech in Aeronautical Engineering",
                "M.Tech in Aerospace Engineering",
                "Certifications in UAVs and Avionics"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Aerospace Engineer",
                "Flight Test Engineer",
                "Aircraft Design Engineer",
                "Systems Engineer in Aerospace"
            ]
        },
        "Mining Engineering": {
            scope: "Mining Engineering involves the extraction of minerals from the earth, with a focus on safety, efficiency, and environmental sustainability. It prepares students for roles in the mining and minerals industry.",
            furtherStudies: [
                "M.Tech in Mining Engineering",
                "M.Tech in Mineral Exploration",
                "Certifications in Mine Safety and Geology"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Mining Engineer",
                "Mineral Exploration Engineer",
                "Mine Safety Engineer",
                "Geotechnical Engineer"
            ]
        },
        "Mechatronics Engineering": {
            scope: "Mechatronics Engineering is an interdisciplinary field combining mechanical, electrical, and computer engineering. It focuses on the design and maintenance of automated systems and robotics.",
            furtherStudies: [
                "M.Tech in Mechatronics",
                "M.Tech in Robotics",
                "Certifications in Automation and Control Systems"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "IES for government engineering services"
            ],
            careerPaths: [
                "Mechatronics Engineer",
                "Robotics Engineer",
                "Automation Engineer",
                "Control Systems Engineer"
            ]
        },
        "Information Technology": {
            scope: "Information Technology focuses on the design, development, and management of information systems. It prepares students for roles in software development, IT consulting, and cybersecurity.",
            furtherStudies: [
                "M.Tech in Information Technology",
                "M.Tech in Cybersecurity",
                "Certifications in Cloud Computing, Networking, and Data Security"
            ],
            entranceExams: [
                "GATE for M.Tech programs",
                "GRE for further studies abroad",
                "CAT for MBA programs"
            ],
            careerPaths: [
                "IT Consultant",
                "Software Engineer",
                "Cybersecurity Analyst",
                "Network Administrator"
            ]
        },
    };

    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    return (
        <div>
            <h1>Guidance After B.Tech</h1>

            {/* Select Box for B.Tech Branch */}
            <div>
                <label>
                    <h2>Select Branch:</h2>
                    <select value={selectedBranch} onChange={handleBranchChange} style={{ width: '350px', height: '60px', fontSize: '16px' }}>
                        <option value="">--Select Branch--</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Automobile Engineering">Automobile Engineering</option>
                        <option value="Aeronautical Engineering">Aeronautical Engineering</option>
                        <option value="Mining Engineering">Mining Engineering</option>
                        <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                        <option value="Information Technology">Information Technology</option>
                    </select>
                </label>
            </div>

            {/* Display content based on selected branch */}
            {selectedBranch && (
                <div>
                    <h2>Scope</h2>
                    <p>{btechContent[selectedBranch].scope}</p>

                    <h2>Further Studies</h2>
                    <ul>
                        {btechContent[selectedBranch].furtherStudies.map((study, index) => (
                            <li key={index}>{study}</li>
                        ))}
                    </ul>

                    <h2>Entrance Exams</h2>
                    <ul>
                        {btechContent[selectedBranch].entranceExams.map((exam, index) => (
                            <li key={index}>{exam}</li>
                        ))}
                    </ul>

                    <h2>Career Paths</h2>
                    <ul>
                        {btechContent[selectedBranch].careerPaths.map((career, index) => (
                            <li key={index}>{career}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AfterBtechPage;
