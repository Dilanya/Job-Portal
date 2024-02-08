import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Stack from "@mui/joy/Stack";
import { Container } from "@mui/system";
import { Box, Chip } from "@mui/joy";
import {
    Button
    
  } from '@mui/material';

export default function SearchBox() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        alert(JSON.stringify(formJson));
      }}
    >
      <Container
        sx={{
            mt: { xs: 2, sm: 8, md: 14 },
        }}

        
      >
        <Stack
  spacing={2}
  direction={{ xs: 'column', md: 'row' }}  
  alignItems={{ xs: 'center', md: 'flex-start' }} 
  justifyContent={{ xs: 'center', md: 'center' }} 
>
  <Select
    multiple
    placeholder="Keywords"
    renderValue={(selected) => (
      <Box sx={{ display: "flex", gap: "0.25rem" }}>
        {selected.map((selectedOption) => (
          <Chip variant="soft" color="primary">
            {selectedOption.label}
          </Chip>
        ))}
      </Box>
    )}
    sx={{
      minWidth: 200,
    }}
    slotProps={{
      listbox: {
        sx: {
          width: "100%",
        },
      },
    }}
  >
    <Option value="Accountancy">Accountancy</Option>
            <Option value="Bank">Bank</Option>
            <Option value="IT">IT</Option>
            <Option value="Finance">Finance</Option>
  </Select>
  <Select
    placeholder="Location"
    name="foo"
    required
    sx={{ minWidth: 200, marginLeft: { xs: 0, md: 10 } }}  
  >
    <Option value="Onsite">Onsite</Option>
            <Option value="Remote">Remote</Option>
            <Option value="Hybrid">Hybrid</Option>
            <Option value="Colombo, SriLanka">Colombo, SriLanka</Option>
  </Select>
  <Select
    placeholder="Type"
    name="foo"
    required
    sx={{ minWidth: 200, marginLeft: { xs: 0, md: 10 } }}  
  >
   <Option value="Full-time">Full-Time</Option>
    <Option value="Part-time">Part-Time</Option>
  </Select>
  <Button type="submit" sx={{ backgroundColor: "#1c2125" , color: "white"}}>Search</Button>
</Stack>

      </Container>
    </form>
  );
}
