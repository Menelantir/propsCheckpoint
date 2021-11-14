import './App.css';
import Details from './profile/profile';



function App() { 
  function handleName() {
    alert("Menel Antir")
}

  return (
    <div className="App">
      <Details name="Menel Antir"  desc="I’m just having an allergic reaction to the universe." job="Professional sleeper" data={handleName}/>
      <hr/>
      <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/253845067_417721403286142_554673154786446243_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5X-3UZ7hHy0AX_ptvNL&tn=-9o65sLlchjFHlKA&_nc_ht=scontent.ftun1-2.fna&oh=0b16a3c0d0d3a315f06823e642f2b11c&oe=619629B4" alt="Mypicture" width="200px" style={{borderRadius:"100%"}}></img>
      
    </div>
  );
}

export default App;
