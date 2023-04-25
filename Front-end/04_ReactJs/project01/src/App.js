import './App.css';
import Heading, { College, College2, College3 } from './components/Heading';
// import { College, College2, College3 } from './components/Heading';
// we can import these along with the Heading as these are from same file

// we can use any name to import a component using 'as'
import { District as Dist} from './components/Heading';
// now we need to use Dist to call the component


const fullName = "Miraj Asraf";

/* 
function Address() {
  return <h3>I am from Raiganj</h3>
}
*/

// using arrow function 
const Address = () => <h3>I am from Raiganj</h3>


function App() {
  return(
    // to return multiple elements we need to wrap up inside a empty tag (fragments)
    <>
      <div className='App'>
        <h1>Introduction to ReactJs</h1>
      </div>

      <div>
        {/* use of JS inside HTML => JSX */}
        <h2>I am {fullName} </h2>
        <Address />
      </div>

      <Heading />
      <College />
      <College2 />
      <College3 />
      <Dist />
    </>
  )
}

export default App;