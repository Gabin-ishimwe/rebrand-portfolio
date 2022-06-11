import React from 'react';
import { Box, Grid, IconButton, Typography, Link, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from '@mui/styles';
import { theme } from '../theme/theme';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material';
import { Link as A } from 'react-router-dom';

const styles = makeStyles((theme) => ({
  iconHover: {
    '&:hover': {
      backgroundColor: '#ff4a57',
    },
  },
}));

const CustomButton = styled(Button)((theme) => ({
  fontSize: '15px',
  fontWeight: 500,
  color: 'black',
  padding: '13px 30px',
  border: '2px solid #ff4a57',
  borderRadius: '50px',
  textTransform: 'none',
  backgroundColor: '#1F2235',
  '&:hover': {
    backgroundColor: '#ff4a57',
  },
}));

const Home = () => {
  const useStyles = styles();
  return (
    <Box sx={{ marginTop: '80px' }}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Link
                    href="https://github.com/Gabin-ishimwe"
                    target="_blank"
                    rel="noopener"
                  >
                    <IconButton>
                      <GitHubIcon
                        sx={{
                          backgroundColor: '#1F2235',
                          color: 'white',
                          padding: '13px',
                          borderRadius: '50%',
                          fontSize: '20px',
                          border: '3px #ff4a57 solid',
                          fontWeight: 500,
                        }}
                        className={useStyles.iconHover}
                      />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" target="_blank" rel="noopener">
                    <IconButton>
                      <TwitterIcon
                        sx={{
                          backgroundColor: '#1F2235',
                          color: 'white',
                          padding: '13px',
                          borderRadius: '50%',
                          fontSize: '20px',
                          border: '3px #ff4a57 solid',
                          fontWeight: 500,
                        }}
                        className={useStyles.iconHover}
                      />
                    </IconButton>
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="#" target="_blank" rel="noopener">
                    <IconButton>
                      <LinkedInIcon
                        sx={{
                          backgroundColor: '#1F2235',
                          color: 'white',
                          padding: '13px',
                          borderRadius: '50%',
                          fontSize: '20px',
                          border: '3px #ff4a57 solid',
                          fontWeight: 500,
                        }}
                        className={useStyles.iconHover}
                      />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" target="_blank" rel="noopener">
                    <IconButton>
                      <EmailIcon
                        sx={{
                          backgroundColor: '#1F2235',
                          color: 'white',
                          padding: '13px',
                          borderRadius: '50%',
                          fontSize: '20px',
                          border: '3px #ff4a57 solid',
                          fontWeight: 500,
                        }}
                        className={useStyles.iconHover}
                      />
                    </IconButton>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: '48px',
                  fontWeight: 700,
                }}
              >
                I am Gabin Ishimwe
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: '22px',
                  fontWeight: '400',
                  lineHeight: '40px',
                }}
              >
                Fun fact about Gabin, He is scared of watching Horror Movies
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <CustomButton>
                    <A
                      to={'/about'}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      More about me
                    </A>
                  </CustomButton>
                </Grid>
                <Grid item>
                  <CustomButton>
                    <A
                      to={'/portfolio'}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      My Portfolio
                    </A>
                  </CustomButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography>Hello word</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
