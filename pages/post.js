import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <h1>some text</h1>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h1>another some text</h1>
      </Tab>
    </Tabs>
  );
}
