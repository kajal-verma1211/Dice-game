
import styled from "styled-components"


const RollDice = (
  {rollDice, currentDice}
) => {



  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`
          /images/Dice/dice_${currentDice}.png
        `} alt="Dice_1"/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 48px;
flex-direction: column;
align-items: center;

.dice{
  cursor: pointer;
}


p{
  font-size: 24px;
}
  
`