import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import Home from '../Home';

const Pages = () => {
  return (
          <Router>
              <Box sx={{margin: 0}}>
                  <Header />
                  <Routes>
                      <Route path="/" exact element={<Home />} />
                  </Routes>
                  <Footer />
              </Box>
          </Router>
  )
}

export default Pages