import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AnimationIcon from '@mui/icons-material/Animation';
import LandingPage from './LandingPage';
import UserType from './Register';
import LoginForm from './Login';
import CreateJobPostForm from './JobPost';
import JobPostList from './FindJobs';

import { NavLink , BrowserRouter,
    Routes,
    Route, } from 'react-router-dom';

const pages = ['Find a Job', 'Post a Job', 'Register' , 'Login'];
const settings = ['Profile',  'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <BrowserRouter>
    <AppBar position="static" sx={{backgroundColor: "#1c2125"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AnimationIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JobNexa
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
            >
              
                <MenuItem  >
                <NavLink to="/find-job" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "#1c2125",
                                marginRight: 20,
                                textDecoration: 'none'
                            })} >Find a Job</NavLink> </MenuItem>
               <MenuItem><NavLink to="/new-job" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "#1c2125",
                                marginRight: 20,
                                textDecoration: 'none'})}>Post a Job</NavLink> </MenuItem>
               <MenuItem><NavLink to="/register" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "#1c2125",
                                marginRight: 20,
                                textDecoration: 'none'})}>Register</NavLink> </MenuItem>
               <MenuItem><NavLink to="/login" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "#1c2125",
                                marginRight: 20,
                                textDecoration: 'none'})}>Login</NavLink> </MenuItem>
             
            </Menu>
          </Box>
          <AnimationIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JobNexa
          </Typography>
          <Box sx={{ flexGrow: 1,  justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
            
              <div>
               <NavLink to="/find-job" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "white",
                                marginRight: 20,
                                textDecoration: 'none'
                            })}>Find a Job</NavLink> 
              </div>
              <div>
               <NavLink to="/new-job" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "white",
                                    marginRight: 20,
                                    textDecoration: 'none'
                            })}>Post a Job</NavLink> 
              </div>
              <div
                >
               <NavLink to="/register" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "white",
                                    marginRight: 20,
                                    textDecoration: 'none'
                            })}>Register</NavLink> 
              </div>
              <div>
               <NavLink to="/login" style={({ isActive }) => ({
                                color: isActive
                                    ? "#9fc1e6"
                                    : "white",
                                    marginRight: 20,
                                    textDecoration: 'none'
                            })}>Login</NavLink> 
              </div>
          </Box>
          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<UserType />} />
          <Route path="/new-job" element={<CreateJobPostForm  />} />
          <Route path="/find-job" element={<JobPostList  />} />
    </Routes>
    </BrowserRouter>

  );
}
export default NavBar;