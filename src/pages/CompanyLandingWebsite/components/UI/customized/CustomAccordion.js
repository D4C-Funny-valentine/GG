import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import Heading from '../../../../../components/ui/Heading';

const CustomAccordion = ({sx, heading, headingVariant = 'h6', index, additonalComponent, children}) => {
    const [expand, setExpand] = React.useState(false);
    const handleChange = () => {
        setExpand(prev => !prev);
    }
  return (
    <Accordion expanded={expand} onChange={handleChange} sx={{...sx}} elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} id={index}>
            <Heading variant={headingVariant}>{heading}</Heading>
            {additonalComponent}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordion