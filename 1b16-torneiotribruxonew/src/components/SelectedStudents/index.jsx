import './styles.css'
import { useState } from 'react'

const SelectedStudents = ({get3, charList}) => {
    const audio = new Audio('../src/images/musica.mp3')
    const [name, setName] = useState('Começar!')
    function changeName(){
        setName('Tentar novamente')
    }

    return(
        <div className='big-container'>
            
            {charList.map((item) => {return (
               
                <div className='container-principal' key={item.id}>
                    <div className='container-img'>
                        <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className='container-texto'>
                        <span>Nome: {item.name}</span>
                        <span>Casa: {item.house}</span>
                        <span>Patronus: {item.patronus}</span>
                    </div>
                    
                    
                </div>
                

            )})}
            
            <button className='button-start' onClick={() => (get3(), changeName(), audio.play())} >{name}</button>
        </div>
    )
}
export default SelectedStudents