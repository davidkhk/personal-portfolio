import React from 'react';
import { FaCaretRight } from 'react-icons/fa';
import { SectionAnimation } from '../../../Animation';

const SoftSkillListItem = (props) => {
  return (
    <SectionAnimation timeout={1000}>
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
    </SectionAnimation>
  );
};

export default SoftSkillListItem;
