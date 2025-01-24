
import './HomePage.css'




function HomePage() {


  return (
    <div className="main-content">
      <div id='homepage-body'>
        <div id='homepage-info'>
          <div id='homepage-header'>“—Welcome, young Hunters.”</div>
          <p>Voxenfelle Academy is a plot-based roleplay group centered around a magic combat school and its students. Run Time: July 2024 - November 2025.</p>

          <b>PREMISE</b>
          <p>Long ago, during the Great War, the world was engulfed in darkness. Creatures of the Void named “Voidwalkers” ran amok as humanity was pushed to the brink of extinction. The humans fought for their lives, desperate to reclaim what had once been their own.</p>
          <p>One day, the goddess Hylia descended upon the land. She aided humanity in their fight against darkness, bestowing a select few with her blessing, granting them abilities beyond their wildest imaginations. Thus, the Hunters were born.</p>
          <p>Now, using these newfound abilities, humanity was eventually able to seal the darkness away, restoring peace to the land and freeing themselves from their long battle.</p>

          <b>PRESENT</b>
          <p>You are a student at the prestigious Voxenfelle Academy, one of the top hunter schools world-wide. </p>

          <div id="homepage-links">
            <p>Academy</p>
            <p>World</p>
            <p>News</p>
            <p>Timeline</p>
          </div>
        </div>
        



        <div id="events-box">
          <div className='current-events-header'>CURRENT EVENT</div>
            <div className='event-listing'>
              <p className='event-date'>JANUARY 19 - 25</p>
              <p className='event-desc'>☀️ Adventure: Solstia Streets</p>
            </div>

            <div className='events-header'>UPCOMING EVENTS</div>
            <div className='event-listing'>
              <p className='event-date'>JANUARY 25 @ 7 PM EST</p>
              <p className='event-desc'>Plot RP</p>
            </div>
            <div className='event-listing'>
              <p className='event-date'>FEBRUARY 1</p>
              <p className='event-desc'>Game Jam Starts</p>
            </div>
            <div className='event-listing'>
              <p className='event-date'>MARCH 15</p>
              <p className='event-desc'>Game Release</p>
            </div>
          </div>



      </div>
      </div>

  );
}

export default HomePage;
