import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

export default () => (
  <div>
    <Head title="Home"/>
    <Nav/>
    <div className="hero">

      <section className="home-section home-parallax home-fade home-full-height bg-dark-60 agency-page-header" id="home"
               data-background="assets/images/agency_bg.jpg">
        <div className="titan-caption">
          <div className="caption-content">
            <div className="font-alt mb-30 titan-title-size-1">Grow your awesome idea</div>
            <div className="font-alt mb-40 titan-title-size-3">Make business <span className="rotate">easy | simple | flexible</span>
            </div>
            <a className="section-scroll btn btn-border-w btn-circle" href="#about">Learn More</a>
          </div>
        </div>
      </section>

      <h1 className="title">Nurse</h1>
      <p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>
      <div className="row">
        <div className={'col-md-3'} style={{ border: '1px solid red', padding: '1em' }}>
          Yo
        </div>
      </div>
      <div className="row">
        <Link href="//nextjs.org/docs/">
          <a className="card">
            <h3>Getting Started &rarr;</h3>
            <p>Learn more about Next.js on official website</p>
          </a>
        </Link>
        <Link href="//github.com/create-next-app/create-next-app">
          <a className="card">
            <h3>Create Next App&rarr;</h3>
            <p>Was this tools helpful?</p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);
