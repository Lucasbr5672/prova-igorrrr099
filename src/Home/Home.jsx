import Header from './Header/HomeH'
import {Div,Input} from './home'

const Home = () => {
    return(
        <>
          <Header/>
          <Div>
            <h1>AVISOS</h1>
            <br />
            <Input 
            type="text" 
            placeholder=' TURMA / TODAS AS TURMAS'
            />
            
          </Div>
        </>
    )
}
export default Home;
