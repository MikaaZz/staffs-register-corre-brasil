import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './accordion.css';

/* eslint-disable-next-line */

interface childrens {
  accordionTitle: string;
  children: React.ReactNode;
}

export const Accordion_personal: React.FC<childrens> = ({
  accordionTitle = '',
  children,
}) => {
  return (
    <Accordion className="main-accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        className="main-accordion__sumary"
      >
        <Typography className="main-accordion__title">
          {accordionTitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="main-accordion__details">
        <ul className="main-accordion__infos">{children}</ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordion_personal;
