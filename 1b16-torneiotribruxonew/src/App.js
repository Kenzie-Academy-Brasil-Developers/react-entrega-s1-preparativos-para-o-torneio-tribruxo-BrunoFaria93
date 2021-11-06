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
      let position = 0
      let condition = false
      
      while(!condition){
        position = Math.ceil(Math.random() * 10)
        if(!newArr.includes(filteredArr[position])){
          newArr.push(filteredArr[position])
          if(newArr.length === 3){
            condition = true
          }
        }

        
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
