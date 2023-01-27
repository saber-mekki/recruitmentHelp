import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

interface Candidate {
  id: number;
  name: string;
  party: string;
  yearsExperience: number;
}

const candidates: Candidate[] = [
  { id: 1, name: 'John Smith', party: 'Democratic', yearsExperience: 10 },
  { id: 2, name: 'Jane Doe', party: 'Republican', yearsExperience: 5 },
  { id: 3, name: 'Bob Johnson', party: 'Independent', yearsExperience: 8 }
];

export default function CandidatesPage () {

  const [activeTab, setActiveTab] = useState('1');
  const toggle = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <Nav tabs>
        {candidates.map((candidate) => (
          <NavItem key={candidate.id}>
            <NavLink
              className={activeTab === `${candidate.id}` ? 'active' : ''}
              onClick={() => {
                toggle(`${candidate.id}`);
              }}
            >
              {candidate.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {candidates.map((candidate) => (
          <TabPane key={candidate.id} tabId={`${candidate.id}`}>
            <h2>{candidate.name}</h2>
            <p>Party: {candidate.party}</p>
            <p>Years of experience: {candidate.yearsExperience}</p>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};


