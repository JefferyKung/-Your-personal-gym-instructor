import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import Icon from '../assets/icons/gym.png';
import back from "../assets/icons/back.png";
import cardio from "../assets/icons/cardio.png";
import lowerArm from "../assets/icons/lower-arm.png";
import lowLeg from "../assets/icons/lower-leg.png";
import neck from "../assets/icons/neck.png";
import shoulder from "../assets/icons/shoulder.png";
import thighs from "../assets/icons/thighs.png";
import upperArms from "../assets/icons/upper arms.png";
import waist from "../assets/icons/waist.png";
import chest from "../assets/icons/chest.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart , iconSrc ,setIconSrc }) => (

  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
     

        {item === 'all' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={Icon}  />  }

        {item === 'back' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={back}  />  }
        {item === 'cardio' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={cardio}  />  }
        {item === 'lower arms' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={lowerArm}  />  }
        {item === 'lower legs' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={lowLeg}  />  }
        {item === 'neck' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={neck}  />  }
        {item === 'shoulders' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={shoulder}  />  }
        {item === 'upper legs' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={thighs}  />  }
        {item === 'upper arms' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={upperArms}  />  }
        {item === 'waist' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={waist}  />  }
        {item === 'chest' && <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} iconSrc={chest}  />  }

        
        {bodyParts ? "" : <ExerciseCard exercise={item} /> }
        
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
