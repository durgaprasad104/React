import React, { useState } from 'react';

const ParamedicalCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState('');

    // Define Paramedical Courses data
    const paramedicalData = {
        Nursing: {
            duration: '3-4 Years',
            description: 'Nursing courses prepare students to provide care to patients in various healthcare settings. This includes understanding patient care, anatomy, and medical procedures.',
            furtherStudies: [
                'B.Sc. Nursing',
                'M.Sc. Nursing',
                'Specialization in fields like Pediatric Nursing, Critical Care Nursing'
            ],
            entranceExams: [
                'Nursing Entrance Exam',
                'AIIMS Nursing Exam',
                'JIPMER Nursing Exam'
            ],
            scholarships: [
                'Government scholarships for nursing students',
                'Private scholarships from healthcare organizations'
            ]
        },
        Physiotherapy: {
            duration: '4 Years',
            description: 'Physiotherapy courses train students to help patients recover from physical injuries and disabilities through exercises and manual therapy.',
            furtherStudies: [
                'MPT (Master of Physiotherapy)',
                'Specialization in areas like Sports Physiotherapy, Orthopedic Physiotherapy'
            ],
            entranceExams: [
                'Physiotherapy Entrance Exam',
                'AIIMS Physiotherapy Exam'
            ],
            scholarships: [
                'Government scholarships for physiotherapy students',
                'Institution-specific scholarships'
            ]
        },
        Radiology: {
            duration: '2-3 Years',
            description: 'Radiology courses focus on training students to operate imaging equipment and interpret diagnostic images like X-rays, MRIs, and CT scans.',
            furtherStudies: [
                'Postgraduate Diploma in Radiology',
                'Specialization in fields like MRI, CT Imaging'
            ],
            entranceExams: [
                'Radiology Entrance Exam',
                'Institution-specific entrance exams'
            ],
            scholarships: [
                'Government scholarships for radiology students',
                'Private sector scholarships'
            ]
        },
        MedicalLaboratoryTechnology: {
            duration: '2-3 Years',
            description: 'Medical Laboratory Technology courses prepare students to perform and analyze diagnostic tests in a laboratory setting.',
            furtherStudies: [
                'M.Sc. in Medical Laboratory Technology',
                'Specializations in fields like Hematology, Clinical Biochemistry'
            ],
            entranceExams: [
                'Medical Laboratory Technology Entrance Exam',
                'Institution-specific exams'
            ],
            scholarships: [
                'Government scholarships',
                'Institutional scholarships'
            ]
        },
        OccupationalTherapy: {
            duration: '4 Years',
            description: 'Occupational Therapy courses train students to assist patients in regaining daily living and work skills following an injury or illness.',
            furtherStudies: [
                'MOT (Master of Occupational Therapy)',
                'Specializations in areas like Pediatric Therapy, Geriatric Therapy'
            ],
            entranceExams: [
                'Occupational Therapy Entrance Exam',
                'Institution-specific exams'
            ],
            scholarships: [
                'Government scholarships',
                'Scholarships from professional organizations'
            ]
        }
    };

    // Handle Course Selection
    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Paramedical Courses</h2>
            <p>Explore various paramedical courses, their durations, specializations, and career paths.</p>

            {/* Course Selection */}
            <div style={{ marginTop: '20px' }}>
                <label htmlFor="course-select"><h3>Select Paramedical Course:</h3></label>
                <select
                    id="course-select"
                    value={selectedCourse}
                    onChange={handleCourseChange}
                    style={{ padding: '5px', width: '350px', height: '40px' }}
                >
                    <option value="">Select a course</option>
                    {Object.keys(paramedicalData).map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                    ))}
                </select>
            </div>

            {/* Display Course Details */}
            {selectedCourse && (
                <div style={{ marginTop: '30px' }}>
                    <h3>{selectedCourse}</h3>
                    <p><strong>Duration:</strong> {paramedicalData[selectedCourse].duration}</p>
                    <p><strong>Description:</strong> {paramedicalData[selectedCourse].description}</p>

                    <h4>Further Studies:</h4>
                    <ul>
                        {paramedicalData[selectedCourse].furtherStudies.map((study, idx) => (
                            <li key={idx}>{study}</li>
                        ))}
                    </ul>

                    <h4>Entrance Exams:</h4>
                    <ul>
                        {paramedicalData[selectedCourse].entranceExams.map((exam, idx) => (
                            <li key={idx}>{exam}</li>
                        ))}
                    </ul>

                    <h4>Scholarships:</h4>
                    <ul>
                        {paramedicalData[selectedCourse].scholarships.map((scholarship, idx) => (
                            <li key={idx}>{scholarship}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div style={{ marginTop: '40px' }}>
                <h3>Why Choose Paramedical Courses?</h3>
                <p>
                    Paramedical courses offer specialized training in healthcare fields, providing students with practical skills to support medical professionals and contribute to patient care. These courses often have strong job prospects and opportunities for further specialization.
                </p>
            </div>
        </div>
    );
};

export default ParamedicalCourses;
