import { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { NavbarLlanos } from './NavbarLlanos';
import { Routes, Route } from 'react-router-dom';

import AboutLlanos from '../components/about/AboutLlanos';
import HomeLlanos from '../components/home/HomeLlanos';
import './RoutesLayoutLlanos.css';

const RoutesLayoutLlanos = () => {

	const [ darkMode, setDarkMode ] = useState(true);
	
	const handleClick = () => {
		setDarkMode( !darkMode );
	}


  return (
	<Grid container spacing={1} className={`content ${ darkMode ? 'dark' : 'light'} `}>
		<Grid item xs={11} component={'header'} className={`${ darkMode ? 'dark' : 'light'}`}>
			<NavbarLlanos darkMode={ darkMode } handleClick={ handleClick }/>
		</Grid>

		<Grid item xs={11} className={`container-content ${ darkMode ? 'dark' : 'light'}`}>
			<Routes>
				<Route exact path={'/'} element={ <HomeLlanos />} />
				<Route exact path={'/about'} element={ <AboutLlanos/>} />
			</Routes>
		</Grid>
		<Grid item xs={11} component={'footer'}>
			<Box className={`${darkMode ? 'dark' : 'light'} text-footer`}>
				<p>template create with &hearts; by <a target={'_blank'} href={'https://es.reactjs.org'}>React js</a></p>
				<p>&copy; 2022</p>
			</Box>

		</Grid>
	</Grid>
  )
}

export default RoutesLayoutLlanos



