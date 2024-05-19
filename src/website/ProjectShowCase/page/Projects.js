import { CountOnScrollNumber, CustomButton, Heading } from '@globalComponents/index'
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react'
import { projectCategoriesName, projectShowCase } from '../config/_showcase';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [value, setValue] = React.useState(projectCategoriesName[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box sx={{textAlign: 'center', mb: 12}}>
        <CountOnScrollNumber n={75} unit='+' color={'primary'}/>
        <Heading sx={{mt: 5, mb: 2}} variant='h6' color="primary">Server side rendered</Heading>
        <Heading variant='h3'>DEMOS & PAGES</Heading>
      </Box>
      <TabContext value={value}>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TabList
          onChange={handleChange}
          textColor='primary'
          indicatorColor='transparent'
          variant="scrollable"
          scrollButtons={true}
        >
          {
            projectCategoriesName.map(item => (
              <Tab key={item} value={item} disableRipple sx={{'&:hover': {color: 'primary.main'}}} label={item} />
            ))
          }
        </TabList>
      </Box>
        <TabPanel 
          value={value ?? projectCategoriesName[0]} 
          sx={{
            width: '100%', 
            display: 'grid', 
            gridTemplateColumns: {md: 'repeat(2, 1fr)', xs: 'repeat(1, 1fr)'}, 
            gridTemplateRows: 'repeat(6, auto)', 
            gap: {xs: '1.5rem', md: '1rem'}
          }}
        >
          {
            value === projectCategoriesName[0] ? (
                <>
                  {
                    projectShowCase.map((item, index) => (
                            <ProjectCard data={item} key={index}/> 
                    ))
                  }
                </>
            ) : (
              <>
              {
                projectShowCase.map((item, index) => (
                      item.foreign_key.includes(value) &&
                        <ProjectCard data={item} key={index}/> 
                ))
              }
              </>
            )
          }
        </TabPanel>
      </TabContext>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CustomButton variant='contained'>
          Purchase now
        </CustomButton>
      </Box>
    </Box>
  )
}

export default Projects