
import styled from "styled-components"

const NumberSelector = ({
    setError,error,selectedNumber, setSelectedNumber
}

) => {
    const arrayNumber =[1,2,3,4,5,6];
    
    const NumberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError("")
    }
    

  return (

    <NumberSelectorConatiner>
        <p className="error">{error}</p>
        <div className="flex">
        {
            arrayNumber.map((value, i) =>(
                <Box
                isSelected = 
                {value === selectedNumber}
                
                key={i} onClick={()=>NumberSelectorHandler(value) }>{value}</Box>
            ))
        }
        </div>
        <p>Select Number</p>
     
    </NumberSelectorConatiner>
  )
}

export default NumberSelector


const NumberSelectorConatiner = styled.div`

display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
    .error{
        color: red;
    }
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    display: grid;
    border: 1px solid black;
    font-size: 24px;
    font-weight: 700;
    place-items: center;
    background-color: ${(props)=>(props.isSelected ? "black" : "white")};
    color: ${(props)=>(!props.isSelected ? "black" : "white")};
`
