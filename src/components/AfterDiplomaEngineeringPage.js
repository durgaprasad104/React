import React, { useState } from 'react';

const AfterDiplomaEngineeringPage = () => {
    const [selectedBranch, setSelectedBranch] = useState('');

    // Define data for different engineering branches
    const diplomaEngineeringData = {
        "Mechanical Engineering": {
            scope: "Diploma in Mechanical Engineering provides foundational knowledge in mechanics, thermodynamics, and material science, preparing students for various technical roles in the manufacturing and automotive industries.",
            furtherStudies: [
                'Advanced Diploma in Mechanical Engineering',
                'B.E./B.Tech in Mechanical Engineering (via Lateral Entry)',
                'Specialized Certifications in CAD, CAM, or CNC Programming'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Junior Mechanical Engineer',
                'Maintenance Engineer',
                'Production Supervisor'
            ]
        },
        "Civil Engineering": {
            scope: "A diploma in Civil Engineering opens opportunities in construction, urban planning, and infrastructure development.",
            furtherStudies: [
                'Advanced Diploma in Civil Engineering',
                'B.E./B.Tech in Civil Engineering (via Lateral Entry)',
                'Certifications in Surveying, AutoCAD, and Construction Management'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Site Supervisor',
                'Junior Civil Engineer',
                'Construction Project Coordinator'
            ]
        },
        "Electrical Engineering": {
            scope: "Diploma in Electrical Engineering provides expertise in electrical circuits, power systems, and electronics, leading to roles in various industries including power generation and manufacturing.",
            furtherStudies: [
                'Advanced Diploma in Electrical Engineering',
                'B.E./B.Tech in Electrical Engineering (via Lateral Entry)',
                'Certifications in PLC, SCADA, and Electrical Safety'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Electrical Technician',
                'Maintenance Engineer',
                'Power Systems Technician'
            ]
        },
        "Electronics and Communication Engineering": {
            scope: "This diploma covers electronic circuits, communication systems, and signal processing, preparing students for roles in telecommunications and consumer electronics.",
            furtherStudies: [
                'Advanced Diploma in Electronics and Communication Engineering',
                'B.E./B.Tech in Electronics and Communication Engineering (via Lateral Entry)',
                'Certifications in Embedded Systems, VLSI Design, and IoT'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Electronics Technician',
                'Communication Systems Engineer',
                'Embedded Systems Developer'
            ]
        },
        "Computer Engineering": {
            scope: "Diploma in Computer Engineering covers programming, networking, and software development, leading to roles in IT and software industries.",
            furtherStudies: [
                'Advanced Diploma in Computer Science',
                'B.E./B.Tech in Computer Engineering (via Lateral Entry)',
                'Certifications in Programming, Networking, and Cybersecurity'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Junior Software Developer',
                'Network Administrator',
                'IT Support Technician'
            ]
        },
        "Automobile Engineering": {
            scope: "A diploma in Automobile Engineering prepares students for technical roles in automotive design, testing, and manufacturing.",
            furtherStudies: [
                'Advanced Diploma in Automobile Engineering',
                'B.E./B.Tech in Automobile Engineering (via Lateral Entry)',
                'Certifications in Automotive Design, Vehicle Dynamics, and AutoCAD'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Automobile Technician',
                'Vehicle Testing Engineer',
                'Production Supervisor in Automotive Plants'
            ]
        },
        "Chemical Engineering": {
            scope: "This diploma focuses on chemical processes, safety, and materials, preparing students for roles in chemical manufacturing and process engineering.",
            furtherStudies: [
                'Advanced Diploma in Chemical Engineering',
                'B.E./B.Tech in Chemical Engineering (via Lateral Entry)',
                'Certifications in Process Control, Chemical Safety, and Environmental Engineering'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Chemical Process Technician',
                'Quality Control Engineer',
                'Plant Operator'
            ]
        },
        "Aeronautical Engineering": {
            scope: "Diploma in Aeronautical Engineering focuses on aircraft design, aerodynamics, and maintenance, leading to careers in the aviation industry.",
            furtherStudies: [
                'Advanced Diploma in Aeronautical Engineering',
                'B.E./B.Tech in Aeronautical Engineering (via Lateral Entry)',
                'Certifications in Aircraft Maintenance, Avionics, and Aerodynamics'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Aircraft Maintenance Technician',
                'Aerodynamics Engineer',
                'Quality Control Inspector in Aviation'
            ]
        },
        "Mining Engineering": {
            scope: "This diploma provides knowledge in mining processes, safety, and mineral processing, opening opportunities in the mining and resources industry.",
            furtherStudies: [
                'Advanced Diploma in Mining Engineering',
                'B.E./B.Tech in Mining Engineering (via Lateral Entry)',
                'Certifications in Mine Safety, Geotechnical Engineering, and Mineral Processing'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Mining Technician',
                'Safety Officer',
                'Mine Surveyor'
            ]
        },
        "Mechatronics Engineering": {
            scope: "Diploma in Mechatronics combines mechanical and electronics engineering, leading to roles in robotics, automation, and control systems.",
            furtherStudies: [
                'Advanced Diploma in Mechatronics Engineering',
                'B.E./B.Tech in Mechatronics Engineering (via Lateral Entry)',
                'Certifications in Robotics, Automation, and Control Systems'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'Automation Technician',
                'Robotics Engineer',
                'Control Systems Engineer'
            ]
        },
        "Information Technology": {
            scope: "Diploma in Information Technology covers software, networking, and system administration, leading to opportunities in IT support and development.",
            furtherStudies: [
                'Advanced Diploma in Information Technology',
                'B.E./B.Tech in Information Technology (via Lateral Entry)',
                'Certifications in Cybersecurity, Cloud Computing, and Networking'
            ],
            entranceExams: [
                'LEET (Lateral Entry Entrance Test)',
                'JELET (Joint Entrance Lateral Entry Test)',
                'AMIE (Associate Member of the Institution of Engineers)'
            ],
            careerPaths: [
                'IT Support Technician',
                'Network Administrator',
                'Junior Software Developer'
            ]
        }
    };

    // Handle Branch Selection
    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <h2>After Diploma in Engineering</h2>
            <p>Select an engineering branch to learn about the scope, further studies, entrance exams, and career paths available after completing a diploma.</p>
            
            {/* Select Engineering Branch */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="engineering-branch"><h2>Select Your Diploma Branch:</h2></label>
                <select
                    id="engineering-branch"
                    onChange={handleBranchChange}
                    value={selectedBranch}
                    style={{ width: '350px', height: '60px', fontSize: '15px' }} // Adjusted width and height
                >
                    <option value="">Select a Branch</option>
                    {Object.keys(diplomaEngineeringData).map((branch) => (
                        <option key={branch} value={branch}>
                            {branch}
                        </option>
                    ))}
                </select>
            </div>

            {/* Display Branch Details */}
            {selectedBranch && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{selectedBranch} Scope</h3>
                    <p>{diplomaEngineeringData[selectedBranch].scope}</p>

                    <h4>Further Studies</h4>
                    <ul>
                        {diplomaEngineeringData[selectedBranch].furtherStudies.map((study, index) => (
                            <li key={index}>{study}</li>
                        ))}
                    </ul>

                    <h4>Entrance Exams</h4>
                    <ul>
                        {diplomaEngineeringData[selectedBranch].entranceExams.map((exam, index) => (
                            <li key={index}>{exam}</li>
                        ))}
                    </ul>

                    <h4>Career Paths</h4>
                    <ul>
                        {diplomaEngineeringData[selectedBranch].careerPaths.map((career, index) => (
                            <li key={index}>{career}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AfterDiplomaEngineeringPage;
