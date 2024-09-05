import React, { useState } from 'react';

const AfterITIPage = () => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedTrade, setSelectedTrade] = useState('');

    // Define ITI Groups and their respective Trades
    const itiData = {
        Engineering: {
            duration: '2 Years',
            trades: [
                {
                    name: 'Electrician',
                    description: 'Installation, maintenance, and repair of electrical systems.',
                    furtherStudies: [
                        'Diploma in Electrical Engineering',
                        'B.E./B.Tech in Electrical Engineering'
                    ],
                    careerPaths: [
                        'Electrical Technician',
                        'Maintenance Engineer',
                        'Electrical Inspector'
                    ]
                },
                {
                    name: 'Fitter',
                    description: 'Assembly, installation, and maintenance of machinery and equipment.',
                    furtherStudies: [
                        'Diploma in Mechanical Engineering',
                        'B.E./B.Tech in Mechanical Engineering'
                    ],
                    careerPaths: [
                        'Machinery Maintenance Technician',
                        'Assembly Line Supervisor',
                        'Quality Control Inspector'
                    ]
                },
                {
                    name: 'Machinist',
                    description: 'Operation of machine tools to produce precise metal parts.',
                    furtherStudies: [
                        'Diploma in Mechanical Engineering'
                    ],
                    careerPaths: [
                        'Precision Machinist',
                        'CNC Operator',
                        'Production Planner'
                    ]
                },
                {
                    name: 'Tool & Die Maker',
                    description: 'Design, build, and repair tools and dies used in manufacturing.',
                    furtherStudies: [
                        'Diploma in Tool Engineering'
                    ],
                    careerPaths: [
                        'Tool Designer',
                        'Die Maker',
                        'Maintenance Engineer'
                    ]
                },
                {
                    name: 'Welder',
                    description: 'Joining metals using various welding techniques.',
                    furtherStudies: [
                        'Advanced Welding Certifications'
                    ],
                    careerPaths: [
                        'Welding Technician',
                        'Fabrication Specialist',
                        'Quality Assurance Inspector'
                    ]
                },
                {
                    name: 'Turner',
                    description: 'Operation of lathes to cut, shape, and finish metal parts.',
                    furtherStudies: [
                        'Diploma in Mechanical Engineering'
                    ],
                    careerPaths: [
                        'CNC Turner',
                        'Production Supervisor',
                        'Maintenance Engineer'
                    ]
                },
                {
                    name: 'Refrigeration & Air Conditioning Mechanic',
                    description: 'Installation and maintenance of refrigeration and air conditioning systems.',
                    furtherStudies: [
                        'Diploma in Refrigeration and Air Conditioning'
                    ],
                    careerPaths: [
                        'HVAC Technician',
                        'Service Engineer',
                        'Installation Specialist'
                    ]
                }
            ]
        },
        NonEngineering: {
            duration: '1 Year',
            trades: [
                {
                    name: 'Carpenter',
                    description: 'Woodworking, including construction and installation of fixtures.',
                    furtherStudies: [
                        'Advanced Carpentry Certifications'
                    ],
                    careerPaths: [
                        'Furniture Maker',
                        'Construction Supervisor',
                        'Woodworking Technician'
                    ]
                },
                {
                    name: 'Plumber',
                    description: 'Installation and repair of plumbing systems in residential and commercial settings.',
                    furtherStudies: [
                        'Advanced Plumbing Certifications'
                    ],
                    careerPaths: [
                        'Plumbing Technician',
                        'Maintenance Supervisor',
                        'Plumbing Inspector'
                    ]
                },
                {
                    name: 'Beautician',
                    description: 'Providing beauty treatments, including skin care, hair styling, and makeup.',
                    furtherStudies: [
                        'Diploma in Cosmetology'
                    ],
                    careerPaths: [
                        'Beauty Consultant',
                        'Salon Manager',
                        'Makeup Artist'
                    ]
                },
                {
                    name: 'Tailor',
                    description: 'Clothing alterations and garment construction.',
                    furtherStudies: [
                        'Fashion Design Certification'
                    ],
                    careerPaths: [
                        'Fashion Designer',
                        'Clothing Manufacturer',
                        'Alteration Specialist'
                    ]
                },
                {
                    name: 'Nurse',
                    description: 'Basic medical care and assistance in healthcare settings.',
                    furtherStudies: [
                        'Diploma in Nursing'
                    ],
                    careerPaths: [
                        'Registered Nurse',
                        'Nurse Practitioner',
                        'Health Care Assistant'
                    ]
                }
            ]
        },
        Computer: {
            duration: '1 Year',
            trades: [
                {
                    name: 'Computer Operator and Programming Assistant',
                    description: 'Basic computer operations and programming skills.',
                    furtherStudies: [
                        'Diploma in Computer Science',
                        'B.Sc. in Computer Science'
                    ],
                    careerPaths: [
                        'Computer Operator',
                        'Junior Programmer',
                        'IT Support Technician'
                    ]
                },
                {
                    name: 'Network Technician',
                    description: 'Setting up and maintaining network systems.',
                    furtherStudies: [
                        'Diploma in Networking',
                        'CCNA Certification'
                    ],
                    careerPaths: [
                        'Network Administrator',
                        'IT Support Specialist',
                        'Network Engineer'
                    ]
                },
                {
                    name: 'Web Designer',
                    description: 'Designing and developing websites.',
                    furtherStudies: [
                        'Diploma in Web Development'
                    ],
                    careerPaths: [
                        'Web Designer',
                        'UI/UX Designer',
                        'Front-end Developer'
                    ]
                },
                {
                    name: 'Software Developer',
                    description: 'Developing and maintaining software applications.',
                    furtherStudies: [
                        'Advanced Programming Certifications'
                    ],
                    careerPaths: [
                        'Software Developer',
                        'Application Developer',
                        'Systems Analyst'
                    ]
                }
            ]
        },
        Construction: {
            duration: '2 Years',
            trades: [
                {
                    name: 'Mason',
                    description: 'Bricklaying, plastering, and other construction techniques.',
                    furtherStudies: [
                        'Diploma in Civil Engineering'
                    ],
                    careerPaths: [
                        'Masonry Technician',
                        'Construction Foreman',
                        'Site Supervisor'
                    ]
                },
                {
                    name: 'Surveyor',
                    description: 'Land surveying for construction and engineering projects.',
                    furtherStudies: [
                        'Diploma in Surveying'
                    ],
                    careerPaths: [
                        'Land Surveyor',
                        'Geospatial Technician',
                        'Mapping Specialist'
                    ]
                },
                {
                    name: 'Plasterer',
                    description: 'Applying plaster and other finishes to walls and ceilings.',
                    furtherStudies: [
                        'Advanced Plastering Certifications'
                    ],
                    careerPaths: [
                        'Plastering Specialist',
                        'Construction Finisher',
                        'Maintenance Technician'
                    ]
                }
            ]
        },
        Textile: {
            duration: '2 Years',
            trades: [
                {
                    name: 'Textile Mechatronics',
                    description: 'Automation and mechanics of textile machinery.',
                    furtherStudies: [
                        'Diploma in Textile Technology'
                    ],
                    careerPaths: [
                        'Textile Engineer',
                        'Maintenance Technician',
                        'Production Manager'
                    ]
                },
                {
                    name: 'Spinning Technician',
                    description: 'Operation of spinning machines for textile manufacturing.',
                    furtherStudies: [
                        'Diploma in Textile Engineering'
                    ],
                    careerPaths: [
                        'Spinning Machine Operator',
                        'Quality Control Technician',
                        'Textile Production Supervisor'
                    ]
                },
                {
                    name: 'Weaving Technician',
                    description: 'Operation and maintenance of weaving machines.',
                    furtherStudies: [
                        'Diploma in Weaving Technology'
                    ],
                    careerPaths: [
                        'Weaving Machine Operator',
                        'Textile Designer',
                        'Production Planner'
                    ]
                }
            ]
        },
        Agriculture: {
            duration: '1-2 Years',
            trades: [
                {
                    name: 'Horticulture',
                    description: 'Plant cultivation, landscaping, and garden management.',
                    furtherStudies: [
                        'Diploma in Horticulture'
                    ],
                    careerPaths: [
                        'Horticulturist',
                        'Nursery Manager',
                        'Landscape Designer'
                    ]
                },
                {
                    name: 'Agricultural Machinery Mechanic',
                    description: 'Repair and maintenance of farm equipment and machinery.',
                    furtherStudies: [
                        'Diploma in Agricultural Engineering'
                    ],
                    careerPaths: [
                        'Agricultural Equipment Technician',
                        'Farm Machinery Operator',
                        'Agriculture Mechanic'
                    ]
                },
                {
                    name: 'Poultry Farming',
                    description: 'Managing poultry farms and livestock.',
                    furtherStudies: [
                        'Diploma in Poultry Science'
                    ],
                    careerPaths: [
                        'Poultry Farm Manager',
                        'Livestock Specialist',
                        'Farm Consultant'
                    ]
                }
            ]
        }
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
    };

    return (
        <div style={{ textAlign: 'left', padding: '50px' }}>
            <h2>After Completing ITI Course</h2>
            <p>ITI courses are ideal for those who want to gain specific trade skills quickly and enter the workforce directly. If you have a clear trade in mind and want to get started with practical skills, these courses might be for you.</p>
            
            {/* Select ITI Group */}
            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="group"><h3>Select ITI Group:</h3></label>
                <select
                    id="group"
                    onChange={handleGroupChange}
                    value={selectedGroup}
                    style={{marginLeft: '-10px', padding: '5px',width: '350px', height: '60px', fontSize: '15px' }} // Adjusted width and height
                >
                    <option value="">Select a Group</option>
                    {Object.keys(itiData).map((group) => (
                        <option key={group} value={group}>
                            {group}
                        </option>
                    ))}
                </select>
            </div>

            {/* Select Trade */}
            {selectedGroup && (
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="trade"><h3>Select Trade</h3></label>
                    <select
                        id="trade"
                        onChange={handleTradeChange}
                        value={selectedTrade}
                        style={{ marginLeft: '-10px', padding: '5px',width: '350px', height: '60px', fontSize: '15px' }} // Adjusted width and height
                    >
                        <option value="">Select a Trade</option>
                        {itiData[selectedGroup].trades.map((trade) => (
                            <option key={trade.name} value={trade.name}>
                                {trade.name}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {/* Display Trade Details */}
            {selectedTrade && selectedGroup && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Trade Details</h3>
                    {itiData[selectedGroup].trades
                        .filter((trade) => trade.name === selectedTrade)
                        .map((trade) => (
                            <div key={trade.name}>
                                <h4>{trade.name}</h4>
                                <p><strong>Description:</strong> {trade.description}</p>
                                <p><strong>Further Studies:</strong></p>
                                <ul>
                                    {trade.furtherStudies.map((study, index) => (
                                        <li key={index}>{study}</li>
                                    ))}
                                </ul>
                                <p><strong>Career Paths:</strong></p>
                                <ul>
                                    {trade.careerPaths.map((path, index) => (
                                        <li key={index}>{path}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default AfterITIPage;
