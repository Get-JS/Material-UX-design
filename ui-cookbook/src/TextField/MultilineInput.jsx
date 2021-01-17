import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';

function MultilineInput() {
  const [multiline, setMultiline] = useState('');

  return (
    <TextField multiline rows={5} label="Address" value={multiline} onChange={e => setMultiline(e.target.value)} />
  );
}
export default MultilineInput;
