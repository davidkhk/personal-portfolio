import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

const SoftSkillListItem = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <ul>
        <li>
          <span>
            <FaCaretRight />
          </span>
          &nbsp;{props.skills[0]}
        </li>
        <li>
          <span>
            <FaCaretRight />
          </span>
          &nbsp;{props.skills[1]}
        </li>
        <li>
          <span>
            <FaCaretRight />
          </span>
          &nbsp;{props.skills[2]}
        </li>
        <li>
          <span>
            <FaCaretRight />
          </span>
          &nbsp;{props.skills[3]}
        </li>
      </ul>
    </div>
  );
};

export default SoftSkillListItem;
