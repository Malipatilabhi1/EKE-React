import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import React from 'react';

import {Treebeard} from 'react-treebeard';
import './Home.css';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const domains = [
    { title: 'domain1' },
    { title: 'domain2' },
  ];
  const personas = [
    { title: 'persona1' },
    { title: 'persona2' },
  ];

  // Dummy tree data
  const treeData = {
    name: 'Root',
    toggled: true,
    children: [
      {
        name: 'Node 1',
        children: [
          { name: 'Node 1.1' },
          { name: 'Node 1.2' },
        ],
      },
      {
        name: 'Node 2',
      },
    ],
  };

  // Set the initial expanded keys
  const [expanded, setExpanded] = React.useState(true);

  const onToggle = (node, toggled) => {
    if (node.children) {
      node.toggled = toggled;
      setExpanded({ ...expanded, [node.name]: toggled });
    }
  };
  

  return (
    <div className={`content-container ${theme}`}>
      <div className="left-section"></div>
      <div className="separator"></div>
      <div className="right-section">
        <div className="domain">
          <div className="card-container">
            {domains.map((card, index) => (
              <div key={index} className="mat-card">
                <span>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="persona">
          <div className="card-container">
            {personas.map((card, index) => (
              <div key={index} className="mat-card">
                <span>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-box">
          {/* Use react-treebeard component */}
          <Treebeard
            data={treeData}
            onToggle={onToggle}
            style={{ width: '100%', maxHeight: '500px', overflowY: 'auto' }}
          />
          <div className="right-chat-section">
            {/* Add content for the right section as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
