import React, { useState } from 'react';

const IntermediatePage = () => {
  // State for the selected group and year
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Groups and years options
  const groups = ['MPC', 'BiPC', 'MEC', 'CEC', 'HEC'];
  const years = ['1st Year', '2nd Year'];

  // Function to handle group change
  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };

  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Render guidance content based on selected group and year
  const renderGuidance = () => {
    if (selectedGroup === 'MPC' && selectedYear === '1st Year') {
      return (
        <div>
          <h3>Guidance for MPC - 1st Year</h3>
          <p><strong>Master the Basics:</strong> Focus on understanding the fundamental concepts in Mathematics, Physics, and Chemistry, as they will form the foundation for the next year.</p>
          <p><strong>Regular Practice:</strong> Solve problems regularly, especially in Mathematics, to strengthen your problem-solving skills.</p>
          <p><strong>Science Experiments:</strong> Participate actively in lab sessions to gain practical experience.</p>
          <p><strong>Prepare for Competitive Exams:</strong> Start preparing for competitive exams like JEE if you're aiming for engineering.</p>
          <p><strong>Stay Organized:</strong> Keep your notes organized, and regularly revise the concepts covered in class.</p>
        </div>
      );
    } else if (selectedGroup === 'MPC' && selectedYear === '2nd Year') {
      return (
        <div>
          <h3>Guidance for MPC - 2nd Year</h3>
          <p><strong>Focus on Advanced Topics:</strong> Delve into more complex topics in Mathematics, Physics, and Chemistry.</p>
          <p><strong>JEE Preparation:</strong> Intensify your preparation for engineering entrance exams like JEE.</p>
          <p><strong>Regular Revisions:</strong> Regularly revise 1st-year topics, as they are crucial for entrance exams.</p>
          <p><strong>Time Management:</strong> Develop a study schedule that balances both board exam preparation and entrance exam preparation.</p>
          <p><strong>Mock Tests:</strong> Take regular mock tests to evaluate your preparation and improve your speed and accuracy.</p>
        </div>
      );
    } else if (selectedGroup === 'BiPC' && selectedYear === '1st Year') {
      return (
        <div>
          <h3>Guidance for BiPC - 1st Year</h3>
          <p><strong>Build a Strong Foundation:</strong> Focus on understanding the core concepts in Biology, Physics, and Chemistry.</p>
          <p><strong>Practical Learning:</strong> Engage actively in lab experiments and practical sessions.</p>
          <p><strong>Explore Career Paths:</strong> Consider various career options in the medical field, research, and biotechnology.</p>
          <p><strong>Prepare for Entrance Exams:</strong> Start preparing for medical entrance exams like NEET if interested in medical careers.</p>
          <p><strong>Study Group Participation:</strong> Join or form study groups to enhance your learning and problem-solving skills.</p>
        </div>
      );
    } else if (selectedGroup === 'BiPC' && selectedYear === '2nd Year') {
      return (
        <div>
          <h3>Guidance for BiPC - 2nd Year</h3>
          <p><strong>Advanced Topics:</strong> Dive deeper into advanced topics in Biology, Physics, and Chemistry.</p>
          <p><strong>Focused Exam Preparation:</strong> Focus heavily on preparing for medical entrance exams and board exams.</p>
          <p><strong>Revision Strategy:</strong> Regularly review 1st-year material along with 2nd-year topics.</p>
          <p><strong>Time Management:</strong> Balance your study time between board exams and entrance exam preparation.</p>
          <p><strong>Mock Tests:</strong> Practice with mock tests to track your progress and improve your test-taking skills.</p>
        </div>
      );
    } else if (selectedGroup === 'MEC' && selectedYear === '1st Year') {
      return (
        <div>
          <h3>Guidance for MEC - 1st Year</h3>
          <p><strong>Understand Basics:</strong> Build a strong foundation in Mathematics, Economics, and Commerce.</p>
          <p><strong>Real-World Applications:</strong> Relate your learning to real-world economic and business scenarios.</p>
          <p><strong>Develop Analytical Skills:</strong> Work on improving your analytical and problem-solving skills.</p>
          <p><strong>Explore Business Trends:</strong> Stay updated with current trends in economics and commerce.</p>
          <p><strong>Participate in Internships:</strong> Look for internship opportunities to gain practical experience.</p>
        </div>
      );
    } else if (selectedGroup === 'MEC' && selectedYear === '2nd Year') {
      return (
        <div>
          <h3>Guidance for MEC - 2nd Year</h3>
          <p><strong>Advanced Concepts:</strong> Delve into advanced topics in Mathematics, Economics, and Commerce.</p>
          <p><strong>Exam Preparation:</strong> Focus on preparing for final exams and any relevant competitive exams.</p>
          <p><strong>Project Work:</strong> Engage in project work or case studies to apply theoretical knowledge.</p>
          <p><strong>Career Planning:</strong> Begin exploring career opportunities in economics, finance, and business sectors.</p>
          <p><strong>Networking:</strong> Build professional connections through internships, seminars, and workshops.</p>
        </div>
      );
    } else if (selectedGroup === 'CEC' && selectedYear === '1st Year') {
      return (
        <div>
          <h3>Guidance for CEC - 1st Year</h3>
          <p><strong>Build a Strong Foundation:</strong> Focus on understanding the basics of Civics, Economics, and Commerce.</p>
          <p><strong>Current Affairs:</strong> Stay updated with current affairs related to civics and economics.</p>
          <p><strong>Develop Analytical Skills:</strong> Work on improving your analytical and critical thinking skills.</p>
          <p><strong>Explore Career Paths:</strong> Consider various career options in public administration, economics, and business.</p>
          <p><strong>Participate in Discussions:</strong> Engage in discussions and debates to enhance your understanding of civic issues.</p>
        </div>
      );
    } else if (selectedGroup === 'CEC' && selectedYear === '2nd Year') {
      return (
        <div>
          <h3>Guidance for CEC - 2nd Year</h3>
          <p><strong>Advanced Topics:</strong> Explore advanced topics in Civics, Economics, and Commerce.</p>
          <p><strong>Focus on Exam Preparation:</strong> Prepare thoroughly for exams and any relevant competitive tests.</p>
          <p><strong>Project Work:</strong> Engage in project work or internships to gain practical experience.</p>
          <p><strong>Career Exploration:</strong> Explore career opportunities in government services, economics, and business sectors.</p>
          <p><strong>Networking:</strong> Build professional connections through seminars, workshops, and relevant events.</p>
        </div>
      );
    } else if (selectedGroup === 'HEC' && selectedYear === '1st Year') {
      return (
        <div>
          <h3>Guidance for HEC - 1st Year</h3>
          <p><strong>Foundation Knowledge:</strong> Focus on understanding the basics of History, Economics, and Civics.</p>
          <p><strong>Current Events:</strong> Stay updated with current events and historical contexts.</p>
          <p><strong>Analytical Skills:</strong> Develop strong analytical and research skills.</p>
          <p><strong>Participate in Debates:</strong> Engage in debates and discussions to enhance your understanding of historical and economic issues.</p>
          <p><strong>Explore Career Paths:</strong> Look into various career options related to history, economics, and public administration.</p>
        </div>
      );
    } else if (selectedGroup === 'HEC' && selectedYear === '2nd Year') {
      return (
        <div>
          <h3>Guidance for HEC - 2nd Year</h3>
          <p><strong>Advanced Understanding:</strong> Dive deeper into advanced topics in History, Economics, and Civics.</p>
          <p><strong>Exam Preparation:</strong> Focus on preparing for final exams and any relevant competitive exams.</p>
          <p><strong>Project Work:</strong> Engage in project work or internships to apply theoretical knowledge.</p>
          <p><strong>Career Planning:</strong> Explore career opportunities in history, public administration, and economic sectors.</p>
          <p><strong>Networking:</strong> Build professional connections through seminars, workshops, and relevant events.</p>
        </div>
      );
    }

    return null; // Return null if no valid combination is selected
  };

  return (
    <div>
      <h1>Intermediate Guidance</h1>
      <div>
        <label><h2>Select Group:</h2></label>
        <select value={selectedGroup} onChange={handleGroupChange} style={{ marginLeft: '5px', padding: '5px', width: '350px', height: '60px', fontSize: '15px' }}>
          <option value="">--Select Group--</option>
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label><h2>Select Year:</h2></label>
        <select value={selectedYear} onChange={handleYearChange} style={{ marginLeft: '5px', padding: '5px', width: '350px', height: '60px', fontSize: '15px' }}>
          <option value="">--Select Year--</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {renderGuidance()}
    </div>
  );
};

export default IntermediatePage;
