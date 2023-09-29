import "./App.css";
// import thImg from "./images/th.jpg";
// const App = () => {
//   return (
//     <div className="App">
//       <h1>React Intro</h1>

//       <img src={thImg} alt="mario" />

//       <Person name="Dan" age="34" jobTitle="chef" />
//       <Person name="Stuart" age="26" jobTitle="developer" />
//       <Person name="Ben" age="21" jobTitle="sky diver" />
//     </div>
//   );
// };

// const Person = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h3>
//         Hello I'm {props.name} and I am {props.age}
//       </h3>
//       <Job title={props.jobTitle} />
//     </div>
//   );
// };

// const Job = (props) => {
//   return <p>Hi I'm a {props.title}</p>;
// };

// --Activity1--
// import fateImg from "./images/netflixFate.png";
// import gambitImg from "./images/netflixGambit.png";
// import outsideImg from "./images/netflixOutside.png";
// import starTrekImg from "./images/netflixStarTrek.png";
// import witcherImg from "./images/netflixWitcher.png";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Activity1</h1>
//       <img src={fateImg} alt="fate" />
//       <img src={gambitImg} alt="gambit" />
//       <img src={outsideImg} alt="outside" />
//       <img src={starTrekImg} alt="starTrek" />
//       <img src={witcherImg} alt="witcher" />
//     </div>
//   );
// };

// --Activity2--

// import homeImg from "./images/airbnbHome.png";
// import uniqueImg from "./images/airbnbUnique.png";
// import cabinImg from "./images/airbnbCabin.png";
// import petsImg from "./images/airbnbPets.png";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Activity2</h1>
//       <h2>
//         <img src={homeImg} alt="home" />
//         <img src={uniqueImg} alt="unique" />
//         <img src={cabinImg} alt="cabin" />
//         <img src={petsImg} alt="pets" />
//       </h2>

//       <h3>
//         <Airbnb name="Entire homes" />
//         <Airbnb name="Unique stays" />
//         <Airbnb name="Cabins and cottages" />
//         <Airbnb name="Pets allowed" />
//       </h3>
//     </div>
//   );
// };

// const Airbnb = (props) => {
//   return <p>{props.name}</p>;
// };

// --Activity3--

// import pandemicImg from "./images/bbcPandemic.png";
// import payImg from "./images/bbcPay.png";
// import morganImg from "./images/bbcMorgan.png";
// import unileverImg from "./images/bbcUnilever.png";

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Activity3</h1>

//       <h2>
//         <img src={pandemicImg} alt="Pandemic"></img>
//         <img src={payImg} alt="Pay"></img>
//         <img src={morganImg} alt="Morgan"></img>
//         <img src={unileverImg} alt="Unilever"></img>
//       </h2>
//       <h3>
//         <BBC
//           title="D'ont think pandemic is over,Whitty warns"
//           content="Unlocking too quickly would lead to a substantial surge in infection,UK chief medical adviser says.&#128348;2h|Health|✉🗨	"
//         />
//         <BBC
//           title="Pay rise was set to be 2.1%-NHS chief"
//           content="NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers.&#128348;1h|UK Politics"
//         />
//         <BBC
//           title="Charity criticises Morgan's comments about Megan "
//           content="Mental health charity Mind says it is``dissapointed`` by comments Piers Morgan made on Monday.&#128348; 2h| Entertainment & Arts	"
//         />
//         <BBC
//           title="Unilever drops word `normal` from beauty products"
//           content="The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity.&#128348;10m | Business"
//         />
//       </h3>
//     </div>
//   );
// };
// const BBC = (props) => {
//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <p>{props.content}</p>
//     </div>
//   );
// };

// --Activity4--
// import { useState } from "react";

// function handleClick() {}

// function App() {
//   const [toggle, setToggle] = useState(true);
//   const [count, setCount] = useState(0);

//   const handleClick = (value) => {
//     console.log("-1");
//     console.log("+1");
//     setCount(value);
//     setToggle(!toggle);
//   };

//   return (
//     <div className="App">
//       <h1>React State</h1>
//       <h1>{count}</h1>

//       <button onClick={() => handleClick(count - 1)}>
//         -{toggle ? " hide content " : "show content"}
//       </button>

//       {toggle ? (
//         <div>
//           <h2>-1</h2>
//           <p>toggle is true</p>
//         </div>
//       ) : (
//         <div>
//           <h2>{count}</h2>
//           <p>toggle is false</p>
//         </div>
//       )}
//       {toggle && (
//         <div>
//           <h3></h3>
//         </div>
//       )}
//       <button onClick={() => handleClick(count + 1)}>+</button>

//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// --Activity5--
// import { evaluate } from "mathjs";
// import { useState } from "react";

// const mathButtons = ["+", "-", "*", "/", "%"];
// const numButtons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// const clearButton = ["C"];
// const App = () => {
//   const [value, setValue] = useState("");

//   return (
//     <div className="Calculator">
//       <h1>{value}</h1>
//       <button onClick={() => setValue(evaluate(value))}>=</button>
//       {mathButtons.map((mathButtons, index) => {
//         return (
//           <div key={index}>
//             <button onClick={() => setValue(value + mathButtons)}>
//               {mathButtons}
//             </button>
//           </div>
//         );
//       })}
//       {numButtons.map((numButtons, index) => {
//         return (
//           <div key={index}>
//             <button onClick={() => setValue(value + numButtons)}>
//               {numButtons}
//             </button>
//           </div>
//         );
//       })}
//       <div>
//         <button onClick={() => setValue("")}>C</button>
//       </div>
//     </div>
//   );
// };

// --Activity6--
// import { useState } from "react";

// import { allHeroes } from "./heroData";

// function App() {
//   const [favourites, setfavourites] = useState(["mario"]);

//   const addToFav = (heroName) => {
//     let newFavArr = [...favourites];

//     if (newFavArr.indexOf(heroName) === -1) {
//       newFavArr.push(heroName);
//       setfavourites(newFavArr);
//     }
//   };

//   const removeFav = (selectedIndex) => {
//     let newFavArr = [...favourites];
//     newFavArr.splice(selectedIndex, 1);
//     setfavourites(newFavArr);
//   };

//   return (
//     <>
//       <h1>Hero Wiki</h1>

//       {favourites.map((heroName, index) => {
//         return (
//           <div key={index}>
//             <p>{heroName}</p>
//             <button onClick={() => removeFav(index)}>X</button>
//           </div>
//         );
//       })}

//       {allHeroes.map((heroObject, index) => {
//         return (
//           <HeroCard key={index} heroInfo={heroObject} favFunc={addToFav} />
//         );
//       })}
//     </>
//   );
// }

// const HeroCard = ({ heroInfo, favFunc }) => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <h2>HERO: {heroInfo.hero}</h2>

//       {toggle && (
//         <>
//           <p>INFO: {heroInfo.info}</p>
//           <p>VILLAIN: {heroInfo.villain}</p>
//         </>
//       )}

//       <button onClick={() => setToggle(!toggle)}>
//         {toggle ? "HIDE INFO" : "SHOW INFO"}
//       </button>
//       <button onClick={() => favFunc(heroInfo.hero)}>ADD TO FAVOURITES</button>
//     </div>
//   );
// };

// --Activity7--
import { useState } from "react";
import React from "react";
const App = () => {
  const [tasks, setTasks] = useState([
    "Take kids to school",
    "Wash the dishes",
    "Create new project",
    "Meet with doctor",
    "Working call",
    "Go to the gym",
    "Go to the shop",
    "Walk with dog",
  ]);
  const [worksToBeDone, setWorksToBeDone] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
  ]);
  const [tuesday3Ocromber, setTuesday3Octomber] = useState([
    "Read an article",
    "Try not to fall asleep",
    "Watch tv",
    "Go for a walk",
  ]);

  const handleClick = (clickedIndex) => {
    // console.log(tasks[clickedIndex]);
    // console.log(worksToBeDone[clickedIndex]);
    // console.log(tuesday3Ocromber[clickedIndex]);

    const storedTasks = [...tasks];
    // storedTasks.push("Wash the dog");
    // storedTasks.pop();
    storedTasks.splice(clickedIndex, 1);
    setTasks(storedTasks);
    // const storedWorksToBeDone = [...worksToBeDone];
    // // storedWorksToBeDone.push("Deploy");
    // storedWorksToBeDone.pop();
    // storedWorksToBeDone.splice(clickedIndex, 1);
    // setWorksToBeDone(storedWorksToBeDone);
    // const storedTuesday3Octomber = [...tuesday3Ocromber];
    // storedTuesday3Octomber.push("Go to doctor");
    // storedTuesday3Octomber.pop();
    // storedTuesday3Octomber.splice(clickedIndex, 1);
    // setTuesday3Octomber(storedTuesday3Octomber);
  };
  const work = (clickedIndex) => {
    const storedWorksToBeDone = [...worksToBeDone];
    // storedWorksToBeDone.push("Deploy");
    // storedWorksToBeDone.pop();
    storedWorksToBeDone.splice(clickedIndex, 1);
    setWorksToBeDone(storedWorksToBeDone);
  };
  const oct = (clickedIndex) => {
    const storedTuesday3Octomber = [...tuesday3Ocromber];
    // storedTuesday3Octomber.push("Go to doctor");
    // storedTuesday3Octomber.pop();
    storedTuesday3Octomber.splice(clickedIndex, 1);
    setTuesday3Octomber(storedTuesday3Octomber);
  };

  return (
    <div>
      <h1>TO-DO LIST</h1>
      <h2>All Tasks</h2>
      <div>
        {tasks.map((currentTasks, index) => {
          return (
            <div>
              <p key={index}>{currentTasks}</p>
              <input type="checkbox"></input>
              <button onClick={() => handleClick(index)}>X</button>
            </div>
          );
        })}
        {/* <button onClick={handleClick}>Add Tasks</button> */}
      </div>

      <h3>WORKS TO BE DONE</h3>
      <div>
        {worksToBeDone.map((currentWorksToBeDone, index) => {
          return (
            <p key={index} onClick={() => work(index)}>
              {currentWorksToBeDone}
            </p>
          );
        })}
        {/* <button onClick={handleClick}>Add Tasks</button> */}
      </div>

      <h4>TUESDAY 3 OCTOMBER</h4>
      <div>
        {tuesday3Ocromber.map((currentTuesday3Octomber, index) => {
          return (
            <p key={index} onClick={() => oct(index)}>
              {currentTuesday3Octomber}
            </p>
          );
        })}
        {/* <button onClick={handleClick}>Add Tasks</button> */}
      </div>
    </div>
  );
};

export default App;
