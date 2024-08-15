import eth from './assets/images/eth.avif'
import alphabet from './assets/images/alphabet.avif'
import traveler from './assets/images/traveler.avif'
import cube from './assets/images/cube.avif'
import astro from './assets/images/astro.avif'
import cup from './assets/images/cup.avif'
import insta from './assets/images/insta.avif'
import foam from './assets/images/foam.avif'
import dimensional from './assets/images/dimensional.avif'
import {Footer, NavBar, OverlayImage} from './components'

function App() {

  return (
    <div className="app">
      <NavBar/>
      <div className="grid">
        <OverlayImage 
          id="eth"
          imagePath={eth} 
          text={"View Project"}
        />
        <OverlayImage 
          id="alphabet"
          imagePath={alphabet} 
          text={"View Project"}
        />
        <OverlayImage 
          id="traveler"
          imagePath={traveler} 
          text={"View Project"}
        />
        <OverlayImage 
          id="cube"
          imagePath={cube} 
          text={"View Project"}
        />
        <OverlayImage 
          id="astro"
          imagePath={astro} 
          text={"View Project"}
          overlayStyles={{color: "white"}}
        />
        <OverlayImage 
          id="cup"
          imagePath={cup} 
          text={"View Project"}
        />
        <OverlayImage 
          id="insta"
          imagePath={insta} 
          text={"View Project"}
          overlayStyles={{color: "white"}}
        />
        <OverlayImage 
          id="foam"
          imagePath={foam} 
          text={"View Project"}
        />
        <OverlayImage 
          id="dimensional"
          imagePath={dimensional} 
          text={"View Project"}
          overlayStyles={{color: "white"}}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default App
