import React from 'react';

const AfterMtechPage = () => {
    // Content for After M.Tech
    const mtechContent = {
        scope: "The M.Tech degree is an advanced engineering program that deepens knowledge and expertise in specialized fields. It prepares students for research, development, and higher-level roles in industries or academia.",
        furtherStudies: [
            "Ph.D. in Engineering or related fields",
            "Post-Doctoral Research",
            "Certifications in Advanced Technologies, Project Management, or Data Science"
        ],
        entranceExams: [
            "GATE (Graduate Aptitude Test in Engineering) for Ph.D. programs",
            "GRE (Graduate Record Examination) for further studies abroad",
            "UGC NET (University Grants Commission National Eligibility Test) for academic positions"
        ],
        careerPaths: [
            "Research and Development Engineer",
            "Project Manager",
            "Assistant Professor or Lecturer",
            "Consultant in Specialized Engineering Fields"
        ]
    };

    return (
        <div>
            <h1>Guidance After M.Tech</h1>
            <div>
                <h2>Scope</h2>
                <p>{mtechContent.scope}</p>
            </div>
            <div>
                <h2>Further Studies</h2>
                <ul>
                    {mtechContent.furtherStudies.map((study, index) => (
                        <li key={index}>{study}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Entrance Exams</h2>
                <ul>
                    {mtechContent.entranceExams.map((exam, index) => (
                        <li key={index}>{exam}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Career Paths</h2>
                <ul>
                    {mtechContent.careerPaths.map((career, index) => (
                        <li key={index}>{career}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AfterMtechPage;
