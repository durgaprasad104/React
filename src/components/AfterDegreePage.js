import React, { useState } from 'react';

const AfterDegreePage = () => {
    const [selectedDegree, setSelectedDegree] = useState('');

    // Handle Degree Selection
    const handleDegreeChange = (event) => {
        setSelectedDegree(event.target.value);
    };

    // Content based on selected degree
    const degreeContent = {
        "B.Sc.": {
            scope: "The B.Sc. degree provides a solid foundation in various scientific fields. It prepares students for careers in research, laboratory work, and teaching. Specializations can include Physics, Chemistry, Biology, and Mathematics.",
            furtherStudies: [
                "M.Sc. in various scientific disciplines",
                "Ph.D. in specialized fields of science",
                "Certifications in Laboratory Techniques and Research Methods"
            ],
            entranceExams: [
                "JAM (Joint Admission Test for M.Sc.)",
                "CSIR NET (Council of Scientific and Industrial Research National Eligibility Test)"
            ],
            careerPaths: [
                "Research Scientist",
                "Laboratory Technician",
                "Science Teacher"
            ]
        },
        "B.Com.": {
            scope: "The B.Com. degree focuses on business and commerce-related subjects, preparing students for roles in finance, accounting, and business management.",
            furtherStudies: [
                "MBA (Master of Business Administration)",
                "M.Com. (Master of Commerce)",
                "Certifications in Accounting (e.g., CA, CMA)"
            ],
            entranceExams: [
                "CAT (Common Admission Test)",
                "MAT (Management Aptitude Test)"
            ],
            careerPaths: [
                "Accountant",
                "Business Analyst",
                "Finance Manager"
            ]
        },
        "B.Z.C.": {
            scope: "The B.Z.C. degree combines Biology, Zoology, and Chemistry, focusing on the life sciences. It prepares students for careers in research, environmental science, and healthcare.",
            furtherStudies: [
                "M.Sc. in Environmental Science or Biotechnology",
                "Ph.D. in Zoology or Biology",
                "Certifications in Environmental Management and Wildlife Conservation"
            ],
            entranceExams: [
                "JAM (Joint Admission Test for M.Sc.)",
                "NET (National Eligibility Test)"
            ],
            careerPaths: [
                "Environmental Scientist",
                "Wildlife Biologist",
                "Research Scientist"
            ]
        },
        "B.A.": {
            scope: "The B.A. degree provides a broad education in the humanities and social sciences. Students can specialize in areas such as English, History, Political Science, or Psychology.",
            furtherStudies: [
                "M.A. in specialized fields of Humanities or Social Sciences",
                "Ph.D. in areas like History, Political Science, or Psychology",
                "Certifications in Public Administration or Teaching"
            ],
            entranceExams: [
                "GRE (Graduate Record Examination) for further studies abroad",
                "NET (National Eligibility Test) for higher education in India"
            ],
            careerPaths: [
                "Teacher",
                "Content Writer",
                "Social Worker"
            ]
        }
    };

    return (
        <div>
            <h1>Guidance for Degree Programs</h1>
            <div>
                <label>
                    <h2>Select Degree:</h2>
                    <select value={selectedDegree} onChange={handleDegreeChange} style={{ width: '350px', height: '60px',fontSize:'15px' }}>
                        <option value="">--Select Degree--</option>
                        <option value="B.Sc.">B.Sc.</option>
                        <option value="B.Com.">B.Com.</option>
                        <option value="B.Z.C.">B.Z.C.</option>
                        <option value="B.A.">B.A.</option>
                    </select>
                </label>
            </div>
            {selectedDegree && (
                <div>
                    <h2>Information for {selectedDegree}</h2>
                    <div>
                        <h3>Scope</h3>
                        <p>{degreeContent[selectedDegree].scope}</p>
                    </div>
                    <div>
                        <h3>Further Studies</h3>
                        <ul>
                            {degreeContent[selectedDegree].furtherStudies.map((study, index) => (
                                <li key={index}>{study}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Entrance Exams</h3>
                        <ul>
                            {degreeContent[selectedDegree].entranceExams.map((exam, index) => (
                                <li key={index}>{exam}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Career Paths</h3>
                        <ul>
                            {degreeContent[selectedDegree].careerPaths.map((career, index) => (
                                <li key={index}>{career}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AfterDegreePage;
