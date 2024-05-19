import { Box, Container, Divider } from "@mui/material"

const ContainerDivider = ({maxWidth = 'md'}) => {
    return (
      <Box sx={{ py: { xs: 12, md: 16 } }}>
            <Container maxWidth={maxWidth}>
              <Divider/>
            </Container>
      </Box>
    )
  }
  export default ContainerDivider