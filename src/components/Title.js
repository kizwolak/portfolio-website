import React from "react";

export default function Title() {
  return (
    <section className="hero page">
      <div className="hero-copy">
        <p className="hero-eyebrow mono">software engineer / amazon connect developer</p>
        <h1 className="hero-name">Krzysztof Zwolak</h1>
        <p className="hero-desc">
          I build production software, cloud-based customer systems and
          backend solutions - currently developing Amazon Connect contact
          centre experiences at Deloitte.
        </p>
      </div>
      <div className="terminal" aria-label="Quick facts, shown as a terminal session">
        <div className="terminal-bar">
          <span className="dot dot-red" />
          <span className="dot dot-amber" />
          <span className="dot dot-green" />
          <span className="terminal-path mono">krzysztof@dev ~</span>
        </div>
        <div className="terminal-body mono">
          <p><span className="prompt">$</span> whoami</p>
          <p className="flair">amazon-connect-developer @ deloitte</p>
          <p><span className="prompt">$</span> stack --list</p>
          <p>typescript, python, c#, sql</p>
          <p>aws, amazon-connect, lex, bedrock</p>
          <p><span className="prompt">$</span> location</p>
          <p>wrocław, poland</p>
        </div>
      </div>
    </section>
  );
}
