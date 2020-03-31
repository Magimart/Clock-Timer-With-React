import React from 'react';
import styled from '@emotion/styled';



const TimeApp = (props) => {


    const Container = styled.div`
    position: relative;
    background-color: #15ad;
    display: block;
    margin: 20%;
    ` 
    const Box = styled.div`
    position: relative;
    top: .6em;
    margin: 1.5em 2em 1em 2em;
    background-color: #abc;
    border-radius: 1em;
    width: 20%
    font-family: 'Merriweather', Sans-serif;
    font-size: 1.5em;
    items-align: center;

    `  
    const Button = styled.button`
    margin-top: .2em;
    margin-bottom: 1em;
    font-family: 'Merriweather', Sans-serif;
    font-size: 1.2em;
    border-radius: 10%;
    border: 6px solid #ab1; 
     
    `

 const now =  new Date().toLocaleTimeString();
     
 const [time, setTime] = React.useState(now); 

                    function getCurrentTime(){

                                  //lets define our new time from the time Object
                            const showCurrentTime = new Date().toLocaleTimeString();
                            
                            setTime(showCurrentTime);
                    }
 
  // can add a set time inverval func and pass getCurrent function to update time automatically
  setInterval(getCurrentTime, 100);
                  

    return (   
     
        <Container>
           <Box><h1>{time}</h1></Box> 
           <Button onClick = {getCurrentTime}  >Check Time</Button>

        </Container>

     );
}
 
export default TimeApp;


//+++++++++++++++ Another way of doing the Above

// const date =  new Date();
    
// //Note that setTime is the function used to update the value'time' inside our useState function
// const [time, setTime] = React.useState({hour: null, minutes:null}); 
//                                                                 //console.log(time); jsut to check whats happening in the browser

//               function getCurrentTime(){
                        
//                            setTime(
//                           {hour: date.getHours(), minutes: date.getMinutes()}
//                            );
//                              }

//    return (  
    
//        <Container>
//           <Box><h1>{time.hour}: {time.minutes}</h1></Box> 
//           <Button onClick = {getCurrentTime}  >Check Time</Button>

//        </Container>

//     );


