/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import '../styles/programmingHome.css'
import {FaChevronRight} from 'react-icons/fa'

const ProgrammingLandingContent = () => {
  return (
    <div id='page' className='mainWrapper'>
      <section className='package-slide hero packageSlide0'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <span className='hero__headerPrefix'>meet the</span>
            <h1 className='hero__mainTitle'> Mainstages Theater Program</h1>
            <div sx={{textAlign: 'left'}}>
              <p className='hero__tagLine'>for Summer Camps and Afterschools</p>
              <h2 className='hero__mainSubtitle'>The Answer to Your Theater Program Needs</h2>
            </div>
            <img className='package-slide__mobile-image' src='/images/programming/main-cover.png' alt='Mainstages Theater ina Box' />
          </div>
          <span href='#' className='scrollBtn'><span />Down for More</span>
        </div>
      </section>
      <section className='package-slide packageSlide1'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <h2 className='package-slide__title'>The Complete Package</h2>
            <p className='package-slide__undertitle'>Cultivate a successful program while simplifying your administrative schedule at the same time!</p>
            <img className='package-slide__mobile-image' src='/images/programming/whole-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className='body-rte'>
              <p>Our process-oriented, development-driven approach results in impactful and easy-to-implement theater&nbsp;programs across the nation.</p>
              <h3>There are two tracks to our Theater Program:</h3>
              <ol>
                <li><strong>Camp Services:</strong> Program partnerships with sleep-away and day camps during the summer.</li>
                <li><strong>Afterschool Services:</strong> Session-based enrollment programs ideal for schools and organizations.</li>
              </ol>
              <h3>Each track is divided into five components:</h3>
              <ul>
                <li>Staffing &amp; Training</li>
                <li>Program Development</li>
                <li>Production Supplies</li>
                <li>Marketing &amp;&nbsp;Publicity</li>
                <li>Supervision &amp;&nbsp;Support</li>
              </ul>
              <h3>Every program is different, so we customize based on the needs of each community.&nbsp;</h3>
              <div className='package-slide__button-wrapper' />
            </div>
          </div>
        </div>
      </section>
      <section className='package-slide packageSlide2'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <h2 className='package-slide__title'>Staffing &amp; Training</h2>
            <p className='package-slide__undertitle'>Success Starts With Great Staff!</p>
            <img className='package-slide__mobile-image' src='/images/programming/base-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className='body-rte'>
              <p>We're dedicated to making sure your Theater Program has the best staff available! That's why we&nbsp;hand select your staff member&nbsp;from our pool of talented applicants&nbsp;based on applicable skills and relevant teaching experiences.</p>
              <p>Our Staff Members:</p>
              <ul>
                <li>are <strong>professionals</strong> working as educators in their field, often with previous camp/school experience;</li>
                <li>are <strong>confident </strong>administering a curriculum and communicating to reach goals;</li>
                <li>are <strong>goal driven</strong>, take initiative, and successfully know how to negotiate "drama" both onstage and off;</li>
                <li>possess a <strong>creative teaching style </strong>and innovative problem solving skills.</li>
              </ul>
              <p>See details about Staffing &amp; Training:</p>
              <div className='package-slide__button-wrapper'>
                <Link className='button package-slide__button' to='/programming/camp-package/staffing-and-training/' sx={{variant: 'buttons.simpleAccent'}}>
                  Camp Staffing &amp; Training <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/programming/afterschool-package/staffing-and-training/' sx={{variant: 'buttons.simpleAccent'}}>
                  Afterschool Staffing &amp; Training <FaChevronRight />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='package-slide packageSlide3'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <h2 className='package-slide__title'>Program Development</h2>
            <p className='package-slide__undertitle'>We Build the Infrastructure of Your Program!</p>
            <img className='package-slide__mobile-image' src='/images/programming/back-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className='body-rte'>
              <p>With a focused detail on your needs and a wide scope of influence on your community, we&nbsp;ensure an impact that reaches beyond the theater program.&nbsp;</p>
              <h3>Here's how we get there:</h3>
              <ul>
                <li>Oversee overall program design &amp; strategy of program.</li>
                <li>Facilitate conference calls, webinars and one-on-one conversations with program staff.</li>
                <li>Create lesson and activity plans that include an activities track for everyday periods and a performance track for clubs and intensives.</li>
                <li>Develop itineraries and program outlines that build upon previous skills and applications.</li>
                <li>Integrate relevant mission driven themes and activity resources into curriculum.</li>
              </ul>
              <p>See details about Program Development:</p>
              <div className='package-slide__button-wrapper'>
                <Link className='button package-slide__button' to='/programming/camp-package/program-development/' sx={{variant: 'buttons.simpleAccent'}}>
                  Camp Program Development
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/programming/afterschool-package/program-development/' sx={{variant: 'buttons.simpleAccent'}}>
                  Afterschool Program Development
                  <FaChevronRight />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='package-slide packageSlide4'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <h2 className='package-slide__title'>Production Supplies</h2>
            <p className='package-slide__undertitle'>Take in the applause with our stage and sound packages!</p>
            <img className='package-slide__mobile-image' src='/images/programming/left-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className='body-rte'>
              <h3>&nbsp;&nbsp;This part of the package can be customized with one of our three options:</h3>
              <ul>
                <li><strong>Theater Essentials Kit: &nbsp;Curriculum, handouts, props, teaching tools</strong></li>
                <li><strong>Production Kits: &nbsp;Royalties, copies of scripts, costumes, &nbsp;backdrops</strong></li>
                <li><strong>Production Base: Backdrop stands, stage curtains, and presenter stand</strong></li>
              </ul>
              <p>&nbsp;These Kits provide access to portable, easy to set up visual and audio displays to effectively present a show in what may otherwise be a limited performance space.</p>
              <p>See details about Production Supplies:</p>
              <div className='package-slide__button-wrapper'>

                <Link className='button package-slide__button' to='/programming/camp-package/production-supplies/' sx={{variant: 'buttons.simpleAccent'}}>
                  Camp Production Supplies
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/programming/afterschool-package/production-supplies/' sx={{variant: 'buttons.simpleAccent'}}>
                  Afterschool Production Supplies
                  <FaChevronRight />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='package-slide packageSlide5'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <h2 className='package-slide__title'>Marketing &amp; Publicity</h2>
            <p className='package-slide__undertitle'>We Ensure your Program Reaches Maximum Participation and Exposure!</p>
            <img className='package-slide__mobile-image' src='/images/programming/right-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className='body-rte'>
              <h3>We will provide:</h3>
              <ul>
                <li>giveaways and supplemental materials sent to parents</li>
                <li>printed backdrops, full color posters &amp; custom playbill</li>
                <li>display of information and materials by mainstages on our performances;</li>
                <li>communication and family engagement.</li>
              </ul>
              <p>.. and more.<br />&nbsp;</p>
              <p>See details about Marketing &amp; Publicity:</p>
              <div className='package-slide__button-wrapper'>

                <Link className='button package-slide__button' to='/programming/camp-package/marketing-and-publicity/' sx={{variant: 'buttons.simpleAccent'}}>
                  Camp Marketing &amp; Publicity
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/programming/afterschool-package/marketing-and-publicity/' sx={{variant: 'buttons.simpleAccent'}}>
                  Afterschool Marketing &amp; Publicity
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='package-slide packageSlide6'>
        <div className='package-slide__content-wrapper'>
          <div className='package-slide__content'>
            <h2 className='package-slide__title'>Supervision &amp; Support</h2>
            <p className='package-slide__undertitle'>We're Involved on the Ground to Ensure Your Program Exceeds Expectations!</p>
            <img className='package-slide__mobile-image' src='/images/programming/front-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className='body-rte'>
              <p>You'll receive active support&nbsp;in the day-to-day operations of your program to ensure success.</p>
              <h3>We manage the following:</h3>
              <ul>
                <li>Lines of communication between staff and administration;</li>
                <li>Customized staging and performance needs based on your individual production choice and participant logistics;</li>
                <li>Program alterations, modified teaching tools and best practices;</li>
                <li>Assignment of a program supervisor who provides ongoing support;</li>
                <li>Weekly resources and engagement opportunities for staff and participants.</li>
              </ul>
              <p>See details about Supervision &amp; Support:</p>
              <div className='package-slide__button-wrapper'>

                <Link className='button package-slide__button' to='/programming/camp-package/supervision-and-support/' sx={{variant: 'buttons.simpleAccent'}}>
                  Camp Supervision &amp; Support
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/programming/afterschool-package/supervision-and-support/' sx={{variant: 'buttons.simpleAccent'}}>
                  Afterschool Supervision &amp; Support
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProgrammingLandingContent