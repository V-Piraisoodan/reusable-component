import logo from './logo.svg';
import React from "react"
import './App.css';
import {Route,Routes,BrowserRouter,Link,useLocation,Outlet, useNavigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter className="router">
        <div className='header'>
         <Link to={'/'} className="header-content">Home</Link>
         <Link to={'/more'} className="header-content">More</Link>
         <Link to={'/contactus'} className="header-content">Contact</Link>
        </div>
        <Routes>
         <Route path='/' element={<Home/>}>
           <Route path='top4' element={<Top4/>}>
             <Route path='bengaltiger' element={<BengalTiger/>}></Route>
             <Route path='indianelephant' element={<IndianElephant/>}></Route>
             <Route path='indianrhinoceros' element={<IndianRhinoceros/>}></Route>
             <Route path='asiaticlion' element={<AsiaticLion/>}></Route>
           </Route>
         </Route>
         <Route path="/More" element={<More/>}></Route>
         <Route path='/contactus' element={<Contactus/>}></Route>
        </Routes>
      </BrowserRouter>
      <div className="mainpage">
  
      </div>
    </div>
  );
}

export default App;

function Home(){
  const navigate = useNavigate();
  return(
    <div className='container'>
       <div className='con-text'>
         <p className='con-para'>1). Wildlife refers to undomesticated animal species, but has come to include all organisms that grow or live wild in an area without being introduced by humans.</p>
         <p className='con-para'>2). Wildlife can be found in all ecosystems. Deserts, plains, grasslands, woodlands, forests, and other areas, including the most developed urban areas, all have distinct forms of wildlife. While the term in popular culture usually refers to animals that are untouched by human factors, most scientists agree that much wildlife is affected by human activities</p>
       </div>
       <div className='con-btn'>
         <div className='text'>Top 4 Wild Animal in India 👇</div>
         <button className='top4-btn' onClick={()=>navigate("/top4")}>Click here</button>
       </div>
       <Outlet/>
    </div>
  )
}

function Top4(){
  const navigate = useNavigate();
  return(
    <div >
      <div className='buttons'>
       <button className='tiger-btn' onClick={()=>navigate("/top4/bengaltiger")}>Bengal Tiger</button>
       <button className='elephant-btn' onClick={()=>navigate("/top4/indianelephant")}>Indian Elephant</button>
       <button className='rhino-btn' onClick={()=>navigate("/top4/indianrhinoceros")}>Indian Rhinoceros</button>
       <button className='lion-btn' onClick={()=>navigate("/top4/asiaticlion")}>Asiatic Lion</button>
      </div> 
    
      <Outlet/>
    </div>
  )
}

function BengalTiger(){
  return(
    <div className='data-container'>
      <img className="pic"
      src={"https://cdn.britannica.com/22/226322-050-C17930D6/Bengal-tiger-Panthera-tigris-tigris-Maharastra-India.jpg"}
      alt={'bengal tiger'}
      />
      <div className='data-para'>
       <p>The Bengal tiger is a population of the Panthera tigris tigris subspecies.It ranks among the biggest wild cats alive today.</p>
       <p>The largest male Bengal tigers can grow up to about 3.2 metres (10.5 feet) long (including a 1-metre- [3.3-foot-] long tail) and weigh nearly 295 kg (about 650 pounds). Females are smaller, the largest ones measuring about 2.7 metres (9 feet) long and weighing as much as 181 kg (400 pounds).</p>
      </div>
    </div>
  )
}

function IndianElephant(){
  return(
    <div className='data-container'>
      <img className="pic"
      src={"https://live.staticflickr.com/8301/7825284102_41d467d9f5_b.jpg"}
      alt={'IndianElephant'}
      />
      <div className='data-para'>
       <p>Indian elephants may spend up to 19 hours a day feeding and they can produce about 220 pounds of dung per day while wandering over an area that can cover up to 125 square miles. This helps to disperse germinating seeds.</p>
       <p>The Indian elephant is native to mainland Asia: India, Nepal, Bangladesh, Bhutan, Myanmar, Thailand, Malay Peninsula, Laos, China, Cambodia, and Vietnam.</p>
      </div>
    </div>
  )
}

function IndianRhinoceros(){
  return(
    <div className='data-container'>
      <img className="pic"
      src={"http://archive.indiaspend.com/wp-content/uploads/rhino_620.jpg"}
      alt={'IndianRhinoceros'}
      />
      <div className='data-para'>
        <p>Indian rhinoceros, (Rhinoceros unicornis), also called greater one-horned rhinoceros, the largest of the three Asian rhinoceroses. The Indian rhinoceros weighs between 1,800 and 2,700 kg (4,000 and 6,000 pounds). It stands 2 metres (7 feet) high at the shoulder and is 3.5 metres (11.5 feet) long.</p>
      </div>
    </div>
  )
}

function AsiaticLion(){
  return(
    <div className='data-container'>
      <img className="pic"
      src={"https://c4.wallpaperflare.com/wallpaper/410/625/176/amazing-animal-asiatic-baby-wallpaper-preview.jpg"}
      alt={'AsiaticLion'}
      />
      <div className='data-para'>
        <p>Asiatic lions are slightly smaller than African lions. Adult males weigh 160 to 190 kg, while females weigh 110 to 120 kg. The height at the shoulders is about 3.5 ft (110 cm). The maximum recorded total length of a male Asiatic lion is 2.92m (115 inches) including the tail.</p>
      </div>
    </div>
  )
}

function More(){
  return(
    <div>More</div>
  )
}

function Contactus(){
  return(
    <div>Contact</div>
  )
}
