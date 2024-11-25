import Card from './Card';
import goldenBook from './assets/golden-book.jpeg';
import itEndsWithUs from './assets/itendswithus.jpeg';
import whoMovedMyCheese from './assets/whomovedmycheese.jpeg';
import freedomInCave from './assets/freedomincave.jpeg';
import Header from './HomePage/Header';
import Slider from './HomePage/Slider';
import Footer from './HomePage/Footer';


function App() {
  return(
    <>
      <Header/>
      <div className='tagline'>
        <span class="material-symbols-outlined">
          book
        </span>
        Unlock the power of reading by exploring the <b>e-book</b> universe.
      </div>
      <Slider/>

      {/* A specified number of books will appear in a random way */}
      <div className='main-content'>
        <Card name="Golden Book" src={goldenBook} desc="The Golden Book is a book that is going to drive you to the world of extreme fantasies .."/>
        <Card name="It Ends With Us" isBestSeller={true} src={itEndsWithUs} desc="It Ends With Us; a book that is going to make you learn how to be the cycle breaker.."/>
        <Card />
        <Card name="Who Moved My Cheese" src={whoMovedMyCheese} desc="Who Moved My Cheese is a beautiful guideline for us to learn how to adapt.."/>
        <Card name="Freedom In Cave" src={freedomInCave} desc="Freedom in Cave to learn that you are capable of seeing the fantasy as a reality."/>
      </div>
      <Footer/>
    </>
  );
}

export default App
