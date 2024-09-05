import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ITIPage = () => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedTrade, setSelectedTrade] = useState('');
    const navigate = useNavigate();

    // Define ITI Groups and their respective Trades
    const itiData = {
        Engineering: {
            duration: '2 Years',
            trades: [
                {
                    name: 'Electrician',
                    description: 'Learn the installation, maintenance, and repair of electrical systems in residential, commercial, and industrial settings.',
                    careerPaths: [
                        'Electrical Technician',
                        'Maintenance Engineer',
                        'Electrical Inspector',
                        'Further Studies: Diploma in Electrical Engineering or B.E./B.Tech in Electrical Engineering'
                    ]
                },
                {
                    name: 'Fitter',
                    description: 'Focus on assembling, installing, and maintaining machinery and equipment in various industries.',
                    careerPaths: [
                        'Machinery Maintenance Technician',
                        'Assembly Line Supervisor',
                        'Quality Control Inspector',
                        'Further Studies: Diploma in Mechanical Engineering or B.E./B.Tech in Mechanical Engineering'
                    ]
                },
                {
                    name: 'Mechanic (Automobile)',
                    description: 'Train in the diagnosis, repair, and maintenance of automobiles, including cars, trucks, and buses.',
                    careerPaths: [
                        'Automobile Technician',
                        'Service Manager',
                        'Automotive Inspector',
                        'Further Studies: Diploma in Automobile Engineering or B.E./B.Tech in Automobile Engineering'
                    ]
                },
                {
                    name: 'Turner',
                    description: 'Learn the operation of lathes and other machine tools for metalworking.',
                    careerPaths: [
                        'Turner Technician',
                        'Lathe Machine Operator',
                        'Tool and Die Maker',
                        'Further Studies: Diploma in Mechanical Engineering'
                    ]
                },
                {
                    name: 'Machinist',
                    description: 'Focus on precision machining techniques for manufacturing and repairing metal parts.',
                    careerPaths: [
                        'Machinist',
                        'CNC Operator',
                        'Tool and Die Maker',
                        'Further Studies: Diploma in Manufacturing Technology'
                    ]
                },
                // Add more Engineering Trades as needed
            ]
        },
        NonEngineering: {
            duration: '1 Year',
            trades: [
                {
                    name: 'Welder',
                    description: 'Learn various welding techniques to join metals for construction, manufacturing, and repair purposes.',
                    careerPaths: [
                        'Welding Technician',
                        'Fabrication Specialist',
                        'Quality Assurance Inspector',
                        'Further Studies: Advanced Welding Certifications'
                    ]
                },
                {
                    name: 'Carpenter',
                    description: 'Focus on woodworking, including the construction, installation, and repair of structures and fixtures.',
                    careerPaths: [
                        'Woodworking Technician',
                        'Furniture Maker',
                        'Construction Supervisor',
                        'Further Studies: Advanced Carpentry Certifications'
                    ]
                },
                {
                    name: 'Plumber',
                    description: 'Train in the installation and maintenance of plumbing systems in residential, commercial, and industrial buildings.',
                    careerPaths: [
                        'Plumbing Technician',
                        'Pipefitter',
                        'Maintenance Supervisor',
                        'Further Studies: Advanced Plumbing Certifications'
                    ]
                },
                {
                    name: 'Stenographer',
                    description: 'Learn shorthand, typing, and office management skills for clerical and administrative roles.',
                    careerPaths: [
                        'Stenographer',
                        'Office Assistant',
                        'Personal Assistant',
                        'Further Studies: Diploma in Office Management'
                    ]
                },
                {
                    name: 'Dress Making',
                    description: 'Train in sewing, garment construction, and fashion design.',
                    careerPaths: [
                        'Tailor',
                        'Fashion Designer',
                        'Boutique Owner',
                        'Further Studies: Diploma in Fashion Design'
                    ]
                },
                // Add more Non-Engineering Trades as needed
            ]
        },
        Computer: {
            duration: '1 Year',
            trades: [
                {
                    name: 'Computer Operator and Programmer',
                    description: 'Learn computer operations, basic programming, and maintenance of computer systems.',
                    careerPaths: [
                        'Computer Operator',
                        'Junior Programmer',
                        'IT Support Technician',
                        'Further Studies: Diploma in Computer Science or B.Sc. in Computer Science'
                    ]
                },
                {
                    name: 'Hardware Maintenance Technician',
                    description: 'Focus on the maintenance and repair of computer hardware, including desktops, laptops, and peripherals.',
                    careerPaths: [
                        'Hardware Technician',
                        'IT Support Specialist',
                        'Technical Support Engineer',
                        'Further Studies: Advanced Hardware Certifications'
                    ]
                },
                {
                    name: 'Network Technician',
                    description: 'Learn the basics of networking, including setup, maintenance, and troubleshooting of network systems.',
                    careerPaths: [
                        'Network Administrator',
                        'IT Support Specialist',
                        'Network Engineer',
                        'Further Studies: Diploma in Networking or CCNA Certification'
                    ]
                },
                {
                    name: 'Web Designing',
                    description: 'Focus on designing and developing websites using HTML, CSS, JavaScript, and other web technologies.',
                    careerPaths: [
                        'Web Designer',
                        'Frontend Developer',
                        'UI/UX Designer',
                        'Further Studies: Diploma in Web Design or B.Sc. in Web Development'
                    ]
                },
                // Add more Computer Trades as needed
            ]
        },
        Construction: {
            duration: '2 Years',
            trades: [
                {
                    name: 'Mason',
                    description: 'Train in bricklaying, plastering, and other construction techniques.',
                    careerPaths: [
                        'Masonry Technician',
                        'Construction Foreman',
                        'Site Supervisor',
                        'Further Studies: Diploma in Civil Engineering'
                    ]
                },
                {
                    name: 'Surveyor',
                    description: 'Learn land surveying techniques for construction and engineering projects.',
                    careerPaths: [
                        'Land Surveyor',
                        'Geospatial Technician',
                        'Mapping Specialist',
                        'Further Studies: Diploma in Surveying'
                    ]
                },
                // Add more Construction Trades as needed
            ]
        },
        Textile: {
            duration: '2 Years',
            trades: [
                {
                    name: 'Textile Mechatronics',
                    description: 'Learn about the automation and mechanics of textile machinery.',
                    careerPaths: [
                        'Textile Engineer',
                        'Maintenance Technician',
                        'Production Manager',
                        'Further Studies: Diploma in Textile Technology'
                    ]
                },
                {
                    name: 'Spinning Technician',
                    description: 'Focus on the operation of spinning machines for textile manufacturing.',
                    careerPaths: [
                        'Spinning Machine Operator',
                        'Quality Control Technician',
                        'Textile Production Supervisor',
                        'Further Studies: Diploma in Textile Engineering'
                    ]
                },
                // Add more Textile Trades as needed
            ]
        },
        Agriculture: {
            duration: '1-2 Years',
            trades: [
                {
                    name: 'Horticulture',
                    description: 'Study plant cultivation, landscaping, and garden management.',
                    careerPaths: [
                        'Horticulturist',
                        'Nursery Manager',
                        'Landscape Designer',
                        'Further Studies: Diploma in Horticulture'
                    ]
                },
                {
                    name: 'Agriculture Machinery Mechanic',
                    description: 'Train in the repair and maintenance of farm equipment and machinery.',
                    careerPaths: [
                        'Agricultural Equipment Technician',
                        'Farm Machinery Operator',
                        'Agriculture Mechanic',
                        'Further Studies: Diploma in Agricultural Engineering'
                    ]
                },
                // Add more Agriculture Trades as needed
            ]
        },
    };

    // Handle Group Selection
    const handleGroupChange = (event) => {
        const group = event.target.value;
        setSelectedGroup(group);
        setSelectedTrade(''); // Reset trade when group changes
    };

    // Handle Trade Selection
    const handleTradeChange = (event) => {
        const trade = event.target.value;
        setSelectedTrade(trade);

        // Navigate to a specific page based on trade selection if needed
        // Example:
        // if (trade === 'Electrician') {
        //     navigate('/ElectricianPage');
        // }
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <h2>ITI Course</h2>
            <p>ITI: Best for those looking to gain specific trade skills quickly and enter the workforce directly. Ideal if you have a clear trade in mind and want to start working sooner..</p>
            <h3>Know about these iti groups and trades,by selecting the option below</h3>

            {/* Group Selection */}
            <div style={{ marginTop: '20px' }}>
                <label htmlFor="group-select"><h3>Select ITI Group:</h3></label>
                <select
                    id="group-select"
                    value={selectedGroup}
                    onChange={handleGroupChange}
                    style={{ marginLeft: '-10px', padding: '5px', width: '350px', height: '60px' ,  fontSize: '15px'}}
                >
                    <option value="">Select a group</option>
                    <option value="Engineering">Engineering</option>
                    <option value="NonEngineering">Non-Engineering</option>
                    <option value="Computer">Computer</option>
                    <option value="Construction">Construction</option>
                    <option value="Textile">Textile</option>
                    <option value="Agriculture">Agriculture</option>
                </select>
            </div>

            {/* Trade Selection */}
            {selectedGroup && (
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="trade-select"><h3>Select Trade:</h3></label>
                    <select
                        id="trade-select"
                        value={selectedTrade}
                        onChange={handleTradeChange}
                        style={{ marginLeft: '-10px', padding: '5px', width: '350px', height: '60px' , fontSize: '15px'}}
                    >
                        <option value="">Select a trade</option>
                        {itiData[selectedGroup].trades.map((trade, index) => (
                            <option key={index} value={trade.name}>{trade.name}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* Display Trade Information */}
            {selectedTrade && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Trade Information:</h3>
                    <p><strong>Description:</strong> {itiData[selectedGroup].trades.find(trade => trade.name === selectedTrade).description}</p>
                    <p><strong>Duration:</strong> {itiData[selectedGroup].duration}</p>
                    <h4>Career Paths:</h4>
                    <ul>
                        {itiData[selectedGroup].trades.find(trade => trade.name === selectedTrade).careerPaths.map((path, index) => (
                            <li key={index}>{path}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ITIPage;
