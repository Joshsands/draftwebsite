import React, { useState } from 'react';
import Estimatortool from '../components/Estimatortool';
import Labor from '../components/Labor';
import Permit from '../components/Permit';
import { Switch, Button } from 'evergreen-ui'

const Pricing = () => {

  const [component, setComponent] = useState('componentA')

  return (



      <div>
        <Button margin={16} appearance="primary" intent="none" onClick={() => setComponent('componentA')}>
          MATERIAL
        </Button>

        <Button margin={16} appearance="primary" intent="success" onClick={() => setComponent('componentB')}>
          LABOR
        </Button>

        <Button margin={16} appearance="primary" intent="danger" onClick={() => setComponent('componentC')}>
          PERMITTING
        </Button>

        {component === 'componentA' && <Estimatortool />}
        {component === 'componentB' && <Labor />}
        {component === 'componentC' && <Permit />}


    </div>
  );
};

export default Pricing;