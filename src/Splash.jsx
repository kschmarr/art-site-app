import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default class Splash extends Component {
  render() {
    return (
      <>
        <Nav />
        <section>
          <h2>What's the purpose of this wonderful app?</h2>
          <blockquote>
            The public site provides a platform for users to view pieces of
            artwork and submit purchase requests for the art. The auth site
            allows the artist to interface with the database (add, edit, and
            remove pieces of art from the site).
          </blockquote>
        </section>
        <section>
          <h2>How does it work?</h2>
          <p>
            Simple. Users navigate to the site and browse beautiful art. They
            can also submit purchase request forms for pieces they love. The
            layout will be responsive and clean. <br />
            The artist will use a graphical interface that provides ease of use
            and clear functionality to keep the site up to date.
          </p>
        </section>
        <section>
          <h2>Is all the art shown available?</h2>
          <p>
            Once a purchase request has been submitted, a 'Sale Pending' note
            will be added to the piece. Once sold, the note will be
            appropriately updated. Whether a piece remains posted on the site
            after sale will be up to the artist.
          </p>
        </section>
        <section>
          <h2>Just want to have a peek? Use these demo credentials:</h2>
          <p>
            Username: Kris Password: lucky
            <br />
            Please be respectful in how you utilize this public user.
            <br />
            Thanks,
            <br />
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;-Management
          </p>
        </section>
        <Link to="/main">
          <button>OKAY, Give me culture!</button>
        </Link>
      </>
    );
  }
}
