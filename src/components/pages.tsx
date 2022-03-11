import React from "react";

export const Home = () => (
  <React.Fragment>
    <h1>Language for Ukraine</h1>
    {/* <button
      //   className="btn btn-info"
      onClick={() => window.open("https://savelife.in.ua/en/donate/")}
    >
      Donate if you can
    </button> */}

    <main>
      <article>
        <p>
          A lot of Ukrainians are fleeing the country now due to the ongoing war
          with Russia.
          <br />
          Many can not speak english or are very limited in this language.
          <br />
          <br />
          We do not realise how privileged we are, being capable to communicate
          with such a large amount of the population. Alone in the European
          Union, 51% of the population can have a conversation in english with
          one another.
          <br />
        </p>
        <p>
          This language barrier makes it a nightmare for Ukrainians to help
          themselves on their way to safety.
          <br />
          Finding a job, even with amazing references and good degrees becomes
          impossible.
          <br />
        </p>
        <p>
          I am trying my best to match up people in need/wanting to learn
          english (other languages on request) with people willing to give just
          a bit of their time to teach the language.
          <br />
        </p>
      </article>

      <article>
        <p>
          <strong>We can all help, this is just one way how.</strong>
        </p>
        <p>
          Share this with as many people as you can. Spread the word. You are
          helping.
          <br />
          Thank you!
        </p>
      </article>
    </main>

    <div className="Container">
      <div className="BigCard">
        <article>
          <h3>Volunteers for teaching!</h3>
          <p>
            If you can <strong>speak russian or ukrainian</strong> and are
            willing to give even just an hour a week of your time, send me an
            email.
          </p>
          <span>language4ukraine@gmail.com</span>
        </article>
        <a
          className="btn PrimaryBtn"
          href="mailto:language4ukraine@gmail.com ?subject=TEACHING"
          target="_blank"
          rel="noopener noreferrer"
        >
          I can help!
        </a>
      </div>

      <div className="BigCard">
        <article>
          <h3>Ukrainian wanting to learn english!</h3>
          <p>
            If you are from Ukraine and want to <strong>learn english</strong>,
            send me an email.
          </p>
          <span>language4ukraine@gmail.com</span>
        </article>
        <a
          className="btn PrimaryBtn"
          href="mailto:language4ukraine@gmail.com ?subject=LEARNING"
          target="_blank"
          rel="noopener noreferrer"
        >
          вчити англійську
        </a>
      </div>
    </div>
  </React.Fragment>
);
export const Articles = () => <h1>Articles</h1>;
export const Blogs = () => <h1>Blogs</h1>;
