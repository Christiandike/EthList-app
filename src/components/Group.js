import React from 'react';

const Group = ({ summary, details }) => {
  return (
    <details>
      <summary>{summary}</summary>
      {details}
    </details>
  );
};

export default Group;
