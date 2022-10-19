/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react"; // eslint-disable-line
// import {graphql, Link} from 'gatsby'
// import {mapEdgesToNodes, localizeText} from '../lib/helpers'
// import Img from 'gatsby-image'

import "../styles/landing.css";

export default () => {
  // const productsEdges = data && data.homeProducts
  // const productsNodes = mapEdgesToNodes(productsEdges)

  return (
    <section class="hero">
      <div class="hero__bg-wrapper">
        <h1 class="hero__heading">
          <span>An</span> educational theater <span class="second">company </span> for children
        </h1>
      </div>
      {/* <!-- /.hero__bg-wrapper --> */}

      <div class="hero__cards-wrapper">
        <div class="hero__cards">
          <a class="hero__card n-1" href="/performances/">
            <div class="hero__card-text n-1">
              <h2 class="hero__card-title">Performances</h2>
              <div class="hero__card-description n-1">
                <p>
                  We tour&nbsp;nationwide with professional performers who engage and entertain
                  children of all ages.
                </p>
              </div>
              <span class="button hero__card-button n-1">Learn More</span>
              {/* <!-- <a class="button hero__card-button n-1" href="">Book us</a> --> */}
            </div>
            {/* <!-- /.hero__card-text --> */}
          </a>
          {/* <!-- /.hero__card --> */}

          <a class="hero__card n-2" href="/programming/">
            <div class="hero__card-text n-2">
              <h2 class="hero__card-title">Theater Programming</h2>
              <div class="hero__card-description n-2">
                <p>
                  We provide&nbsp;<strong>ALL</strong>&nbsp;the tools to make it possible for your
                  community to offer an impactful, high-quality&nbsp;theater program.
                </p>
              </div>
              <span class="button hero__card-button n-2">Learn More</span>
              {/* <!-- <a class="button hero__card-button n-2" href="">Book us</a> --> */}
            </div>
            {/* <!-- /.hero__card-text --> */}
          </a>
          {/* <!-- /.hero__card --> */}

          <a class="hero__card n-3" href="/virtual/">
            <div class="hero__card-text n-3">
              <h2 class="hero__card-title">Virtual</h2>
              <div class="hero__card-description n-3">
                <p>ZOOM game shows and birthday parties across the globe</p>
              </div>
              <span class="button hero__card-button n-3">Learn More</span>
              {/* <!-- <a class="button hero__card-button n-3" href="">Book us</a> --> */}
            </div>
            {/* <!-- /.hero__card-text --> */}
          </a>
          {/* <!-- /.hero__card --> */}
        </div>
        {/* <!-- /.hero__cards-wrapper --> */}
      </div>
      {/* <!-- /.hero__cards --> */}
    </section>
  );
};
