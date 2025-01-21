import '../HomePage/HomePage.css';

function HomePage() {
  return (
    <div className="main-content" id="homepage-body">
      <h1 id="homepage-header">"Welcome, young Hunters."</h1>
      <div id="homepage-text">
        <p><b>Voxenfelle Academy</b> is a plot-based roleplay group centered around a magic combat school and its students.</p>
        <p>Genres: Action, Fantasy, Drama, Slice-of-life</p>
        <p>Inspired by: RWBY, Mahouka, Returner’s Magic, Witch Hat Atelier</p>
      </div>

      <div>
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/xbfLZ0JxbLs" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default HomePage;
