import './App.css';
import { useEffect, useState } from 'react';
import SelectedStudents from './components/SelectedStudents';

function App() {
  const [charList, setCharList] = useState([])
  const [allCharList, setAllCharList] = useState([])
  
  useEffect(() =>{
  fetch('https://hp-api.herokuapp.com/api/characters/students')
  .then((response) => response.json())
  .then((response) => setAllCharList(response))
  .catch((err) => console.log(err))
  }, [])

 
  function get3 () {
      const newArr = []
      const filteredArr = allCharList.filter((item) =>{return item.image !== ''})
      const houses = []
      let position = 0
  
      // student.house !== houses[count]
      while(newArr.length < 3){
        const leftStudents = [...filteredArr.filter((student) => houses.every((house) => house !== student.house))]
        
        position = Math.floor(Math.random() * leftStudents.length)
          
          newArr.push(leftStudents[position])
          houses.push(leftStudents[position].house)

      } 
      setCharList(newArr)
  }
  
  
  return (
    <div className="App">
      
      <SelectedStudents charList={charList} get3={get3}/>

    </div>
  );
}

export default App;
