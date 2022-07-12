import React from 'react';

const TechnicalSkillListItem = (props) => {
  return (
    <div>
      <li>
        <span>{props.icon}</span>&nbsp;
        {props.skill}
      </li>
    </div>
  );
};

export default TechnicalSkillListItem;
