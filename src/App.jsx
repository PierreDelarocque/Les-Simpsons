
import "./App.css";
import Avatar from "./Avatar";


function App() {
  const bart = {image:"https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png" ,

firstName:"Bart",
lastName:"Simpsons",
initialDonuts: 0
}
const homer = {image:
  "https://www.stickees.com/files/cartoon/the-simpsons/2246-homer-simpson-donut-2.png" ,

firstName:"Homer",
lastName:"Simpsons"

}
const maggie = {image:
  "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",

firstName:"Maggie",
lastName:"Simpsons",
}
  return (
    <>
      <Avatar bart = {bart}
        
      />
      <Avatar homer = {homer}
        
      />
      <Avatar maggie ={maggie}
      />
      
    </>
  );
}

export default App;
