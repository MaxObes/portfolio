import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './Header';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#424242',
        },
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeight: 'fontWeightMedium'
    },
    components: {
        MuiTypography: {
          variants: [
            {
              props: { variant: 'sectionHeader' },
              style: ({ theme }) => ({
                ...theme.typography.h4,
                fontFamily: 'Roboto',
                letterSpacing: '1px',
                color: '#ffffff',
                fontWeight: '600'
              }),
            },
          ],
        },
      }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <>
                <Header />
                <Intro />
                <AboutMe />
                <Experience />
                <Projects />
                <Footer />
            </>
        </ThemeProvider>
    );
}

export default App;