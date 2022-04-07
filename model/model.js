// this information stimulates getting dat from a database
var homeContent = `<div class="home"></div>
<div class="banner">
  <div class="hero-text">
    <h1>The Dominican Republic</h1>
    <p>
      Come visit this country full of wonders and beautiful views.
    </p>
    <button>LEARN MORE</button>
  </div>
</div>
<br />

<!-- offers begin -->
<section class="offers">
  <div class="offer">
    <div class="hero-image">
      <img src="images/resort-example.jpg" alt="food" />
      <div class="hero-text">
        <h2>Splendid Resorts</h2>
        <button>VIEW RESORTS</button>
      </div>
    </div>
  </div>

  <div class="offer">
    <div class="hero-image">
      <img src="images/excursion-example.jpg" alt="food" />
      <div class="hero-text">
        <h2>Fun Excursions</h2>
        <button>VIEW EXCURSIONS</button>
      </div>
    </div>
  </div>

  <div class="offer">
    <div class="hero-image">
      <img src="images/beach-example.jpg" alt="food" />
      <div class="hero-text">
        <h2>Beautiful Beaches</h2>
        <button>VIEW BEACHES</button>
      </div>
    </div>
  </div>
</section>`;
var aboutContent = `<div class="about">
<div class="about-header">
  <h1 class="about-header-title">ABOUT THE DOMINICAN REPUBLIC:</h1>
  <div class="border-bottom"></div>
  <div class="about-info">
  <img src="images/dr-flag.jpg" alt="flag" />
  <p>
    The Dominican Republic is a country in the Caribbean located on the island of Hispaniola, which it shares with Haiti. The country is full of beautiful beaches, luxurious resorts, delicious food, awesome excursion, and other fun things to do as well as places to go.
  </p>
  </div>
</div>
</div>`;
var experiencesContent = `<div class="experiences">
<div class="about-experiences-posts">
  <p class="experiences-title">Experiences</p>
  <div class="border-bottom-two"></div>
  <div class="experience-box">
    <img src="images/beach-example2.jpg" alt="" />
    <div class="experience-content">
      <h2>Cayo Arena</h2>
      <p>
        Cayo Arena is home to hundreds of tropical fish, and is popular among snorkelers due to its shallow, turquoise waters. The island is also known as Cayo Paraíso.
      </p>
      <button>Learn More</button>
    </div>
  </div>

  <div class="experience-box">
    <img src="images/historical-example.jpg" alt="" />
    <div class="experience-content">
      <h2>Altos De Chavón</h2>
      <p>
        Visit this 16th Century Mediterranean-style village. It is a popular destination among tourists and it is located in the city of La Romana. Here you can view charming architecture, as find fine dining, jewelry shops, and more.
      </p>
      <button>Learn More</button>
    </div>
  </div>

  <div class="experience-box">
    <img src="images/larimar-example.jpg" alt="" />
    <div class="experience-content">
      <h2>Larimar Mines</h2>
      <p>
        Larimar is a rare blue mineral that originates from and is only found in the Dominican Republic. When visiting these mines, you can explore the area and see the workers climb back out of deep holes with raw larimar stones.
      </p>
      <button>Learn More</button>
    </div>
  </div>
</div>
</div>`;
var contactContent = `<div class="contact">
<div class="about-contact">
  <p class="contact-title">CONTACT US:</p>
  <div class="border-bottom-two"></div>
  <div class="contact-box">
    <div class="contact-image-address">
      <img src="images/contact-image.jpg" alt="contact" />
      <p class="contact-address">
        
        For more information,  contact us at: <br>
        (123) 456 - 7890<br>DRGenius@hotmail.com
      </p>
    </div>

    <div class="contact-form">
      <p class="contact-address">Or contact us by using the form below...</p>
    <input
        type="text"
        id="name"
        class="contact-box"
        placeholder="Your name..."
      />
      <input
        type="text"
        id="email"
        class="contact-box"
        placeholder="Email Address..."
      />
      <textarea class="message-box" placeholder="Message..."></textarea>

      <p>
        <span class="read-btn">SEND MESSAGE</span>
      </p>
    </div>
  </div>
</div>
</div>`;

// this function is being called from the app.js and it has the page name
export function modelPageName(pgName) {
    console.log(pgName);

    $("#app").html(eval(pgName));
}