
import Section from "./components/Section";
import {ThemeProvider} from './components/Context/ThemeProvider'
function App() {
  return (
    <>
     <ThemeProvider>
      <Section/>
     </ThemeProvider>
    </>
  );
}

export default App;
