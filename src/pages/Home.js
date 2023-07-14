import '../components/Carousel.js';
import '../components/Carousel.css';
import '../components/carousel-func.js';
import './Home.css'; 
import law from '../img/Law.png';
import gojo from '../img/Gojo Unmaskedpng.png';
import meruemImage from '../img/Meruem.png';
import mightGuyImage from '../img/Might Guy.png';

const App = () => {
  return (
    <div>
      <div id= "hero">
      <div className="hero-box">
        <h1 className="hero-heading">Anime Funko POPS!</h1>
        <p className="hero-desc">
          Your one-stop shop for all things Anime Funko!
        </p>
      </div>
      </div>

      <div className="main-container">
        <main>
          <h1 className="arrivals">New Arrivals</h1>
          <div className="carousel">
            <div className="carousel__item carousel__item--visible">
              <img src= {law} alt="Law" />
            </div>
            <div className="carousel__item">
              <img src={gojo} alt="Gojo" />
            </div>
            <div className="carousel__item">
              <img src={meruemImage} alt="Meruem" />
            </div>
            <div className="carousel__item">
              <img src={mightGuyImage} alt="Might Guy" />
            </div>
          </div>

          <div className="carousel__actions">
            <button id="carousel__button--prev" aria-label="Previous slide">
              &lt;
            </button>
            <button id="carousel__button--next" aria-label="Next slide">
              &gt;
            </button>
          </div>
        </main>

        <div className="new-arrival-info">
          <div className="new-arrival-container">
            <div className="new-arrival-box">
              <h2 className="new-arrival-title">
                Why Jujutsu Kaisen is Worth Watching?
              </h2>
              <p className="new-arrival-description">
                Overall, Jujutsu Kaisen is a must-watch anime for fans of
                action, fantasy, and great storytelling. With its compelling
                characters, thrilling action, and stunning animation, it's easy
                to see why the series has become one of the most talked-about
                anime of the year.
              </p>
            </div>

            <div className="new-arrival-box">
              <h2 className="new-arrival-title">
                The Top Themes of Attack on Titan.
              </h2>
              <p className="new-arrival-description">
                Attack on Titan is a complex and thought-provoking series that
                touches on a wide range of themes. In this blog post, you can
                highlight three of the most significant themes in the series,
                such as the struggle for freedom, the corrupting influence of
                power, and the nature of humanity.
              </p>
            </div>

            <div className="new-arrival-box">
              <h2 className="new-arrival-title">
                What Makes My Hero Academia a Great Superhero Anime!
              </h2>
              <p className="new-arrival-description">
                My Hero Academia is a great superhero anime that tells the
                story of a young boy named Izuku Midoriya who dreams of
                becoming a hero. The anime explores themes of self-discovery,
                teamwork, and the power of hope, and features dynamic action
                scenes and compelling characters.
              </p>
            </div>

            <div className="new-arrival-box">
              <h2 className="new-arrival-title">
                The Must-Watch Anime of Spring 2022!!!
              </h2>
              <p className="new-arrival-description">
                Spring 2023 has brought us a wealth of exciting new anime
                series to enjoy, from the highly-anticipated return of popular
                shows like My Hero Academia and Fruits Basket to new offerings
                like To Your Eternity and Vivy: Fluorite Eye's Song. With fresh
                animation styles, intriguing storylines, and a mix of genres,
                this season's new anime is sure to keep us entertained.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



