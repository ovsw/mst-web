/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import s from '../styles/programmingHome.module.css'
import {FaChevronRight} from 'react-icons/fa'

const ProgrammingLandingContent = () => {
  return (
    <div id='page'>
      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide0}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <span className={s.hero__headerPrefix}>meet the</span>
            <h1 className={s.hero__mainTitle}> Mainstages Theater Program</h1>
            <div sx={{textAlign: 'left'}}>
              <p className={s.hero__tagLine}>for Summer Camps and Schools</p>
              <h2 className={s.hero__mainSubtitle}>The Answer to Your Theater Program Needs</h2>
            </div>
            <img className={s.packageSlide__mobileImage} src='/images/programming/main-cover.png' alt='Mainstages Theater ina Box' />
          </div>
          <span href='#' className={s.scrollBtn}><span />Down for More</span>
        </div>
      </section>

      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide1}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <h2 className={s.packageSlide__title}>The Complete Package</h2>
            <p className={s.packageSlide__undertitle}>Cultivate a successful program while simplifying your administrative schedule at the same time!</p>
            <img className={s.packageSlide__mobileImage} src='/images/programming/whole-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className={s.bodyRte}>
              <p>Our process-oriented, development-driven approach results in impactful and easy-to-implement theater&nbsp;programs across the nation.</p>
              <h3>There are two tracks to our Theater Program:</h3>
              <ol>
                <li><strong>Camp Services:</strong> Program partnerships with sleep-away and day camps during the summer.</li>
                <li><strong>School Services:</strong> Session-based enrollment programs ideal for schools and organizations.</li>
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
              <div className={s.packageSlide__buttonWrapper} />
            </div>
          </div>
        </div>
      </section>
      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide2}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <h2 className={s.packageSlide__title}>Staffing &amp; Training</h2>
            <p className={s.packageSlide__undertitle}>Success Starts With Great Staff!</p>
            <img className={s.packageSlide__mobileImage} src='/images/programming/base-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className={s.bodyRte}>
              <p>We're dedicated to making sure your Theater Program has the best staff available! That's why we&nbsp;hand select your staff member&nbsp;from our pool of talented applicants&nbsp;based on applicable skills and relevant teaching experiences.</p>
              <p>Our Staff Members:</p>
              <ul>
                <li>are <strong>professionals</strong> working as educators in their field, often with previous camp/school experience;</li>
                <li>are <strong>confident </strong>administering a curriculum and communicating to reach goals;</li>
                <li>are <strong>goal driven</strong>, take initiative, and successfully know how to negotiate "drama" both onstage and off;</li>
                <li>possess a <strong>creative teaching style </strong>and innovative problem solving skills.</li>
              </ul>
              <p>See details about Staffing &amp; Training:</p>
              <div className={s.packageSlide__buttonWrapper}>
                <Link className='button package-slide__button' to='/programming/camp-package/' sx={{variant: 'buttons.simpleAccent'}}>
                  See camp package options
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/school-programs/' sx={{variant: 'buttons.simpleAccent'}}>
                  See school program options
                  <FaChevronRight />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide3}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <h2 className={s.packageSlide__title}>Program Development</h2>
            <p className={s.packageSlide__undertitle}>We Build the Infrastructure of Your Program!</p>
            <img className={s.packageSlide__mobileImage} src='/images/programming/back-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className={s.bodyRte}>
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
              <div className={s.packageSlide__buttonWrapper}>
                <Link className='button package-slide__button' to='/programming/camp-package/' sx={{variant: 'buttons.simpleAccent'}}>
                  See camp package options
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/school-programs/' sx={{variant: 'buttons.simpleAccent'}}>
                  See school program options
                  <FaChevronRight />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide4}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <h2 className={s.packageSlide__title}>Production Supplies</h2>
            <p className={s.packageSlide__undertitle}>Take in the applause with our stage and sound packages!</p>
            <img className={s.packageSlide__mobileImage} src='/images/programming/left-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className={s.bodyRte}>
              <h3>&nbsp;&nbsp;This part of the package can be customized with one of our three options:</h3>
              <ul>
                <li><strong>Theater Essentials Kit: &nbsp;Curriculum, handouts, props, teaching tools</strong></li>
                <li><strong>Production Kits: &nbsp;Royalties, copies of scripts, costumes, &nbsp;backdrops</strong></li>
                <li><strong>Production Base: Backdrop stands, stage curtains, and presenter stand</strong></li>
              </ul>
              <p>&nbsp;These Kits provide access to portable, easy to set up visual and audio displays to effectively present a show in what may otherwise be a limited performance space.</p>
              <p>See details about Production Supplies:</p>
              <div className={s.packageSlide__buttonWrapper}>

                <Link className='button package-slide__button' to='/programming/camp-package/' sx={{variant: 'buttons.simpleAccent'}}>
                  See camp package options
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/school-programs/' sx={{variant: 'buttons.simpleAccent'}}>
                  See school program options
                  <FaChevronRight />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide5}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <h2 className={s.packageSlide__title}>Marketing &amp; Publicity</h2>
            <p className={s.packageSlide__undertitle}>We Ensure your Program Reaches Maximum Participation and Exposure!</p>
            <img className={s.packageSlide__mobileImage} src='/images/programming/right-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className={s.bodyRte}>
              <h3>We will provide:</h3>
              <ul>
                <li>giveaways and supplemental materials sent to parents</li>
                <li>printed backdrops, full color posters &amp; custom playbill</li>
                <li>display of information and materials by mainstages on our performances;</li>
                <li>communication and family engagement.</li>
              </ul>
              <p>.. and more.<br />&nbsp;</p>
              <p>See details about Marketing &amp; Publicity:</p>
              <div className={s.packageSlide__buttonWrapper}>

                <Link className='button package-slide__button' to='/programming/camp-package/' sx={{variant: 'buttons.simpleAccent'}}>
                  See camp package options
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/school-programs/' sx={{variant: 'buttons.simpleAccent'}}>
                  See school program options
                  <FaChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${s.packageSlide} ${s.hero} ${s.packageSlide6}`}>
        <div className={s.packageSlide__contentWrapper}>
          <div className={s.packageSlide__content}>
            <h2 className={s.packageSlide__title}>Supervision &amp; Support</h2>
            <p className={s.packageSlide__undertitle}>We're Involved on the Ground to Ensure Your Program Exceeds Expectations!</p>
            <img className={s.packageSlide__mobileImage} src='/images/programming/front-adnotated.png' alt='Mainstages Theater ina Box' />
            <div className={s.bodyRte}>
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
              <div className={s.packageSlide__buttonWrapper}>

                <Link className='button package-slide__button' to='/programming/camp-package/' sx={{variant: 'buttons.simpleAccent'}}>
                  See camp package options
                  <FaChevronRight />
                </Link>
                <br />
                <Link className='button package-slide__button' to='/school-programs/' sx={{variant: 'buttons.simpleAccent'}}>
                  See school program options
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
