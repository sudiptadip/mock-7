import './App.css';
import { Box } from '@chakra-ui/react';
import AllRoute from './Routes/AllRoute';
// https://first-api-mock.onrender.com/dogs
function App() {
  return (
    <Box className="App">
      <AllRoute />
    </Box>
  );
}

export default App;
