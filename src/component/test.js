import styled from "styled-components";
// import { createStore } from 'redux'

function Test() {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Title2 = styled(Title)`
        text-align: right;
    `

    const createStore = (dispatch) => {
        let state = {value:dispatch(null,"")}
        const subscribetions = []
    
        const docallback = () => {
          subscribetions.forEach(callback => {
            callback()
          })
        }
    
        return {
          getState : () => {
            return state
          },
          subscribe : (callback) => {
            subscribetions.push(callback)
          },
          dispatch : (type) => {
            const action = {
              type
            }
            const result = dispatch(state, type)
            if(result != state){
              state = result
            }
            docallback()
          }
        }
      }
    
      function counterReducer(state = { value: 0 }, action) {
        switch (action.type) {
          case 'counter/incremented':
            return { value: state.value + 1 }
          case 'counter/decremented':
            return { value: state.value - 1 }
          default:
            return state
        }
      }
    
      let store = createStore(counterReducer)
      
      store.subscribe(() => console.log(store.getState()))
    
      store.dispatch({ type: 'counter/incremented' })
      store.dispatch({ type: 'counter/incremented' })
      store.dispatch({ type: 'counter/decremented' })

    return (
        <>
            <Title>test</Title>
            <Title2>title2</Title2>
        </>
    );
}

export default Test;
