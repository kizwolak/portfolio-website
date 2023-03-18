import React from "react";

export default function Title() {
  const [time, setTime] = React.useState(new Date().getHours());
  React.useEffect(() => {
    const newTime = new Date().getHours();
    setTime(newTime);
  }, []);
  const isLoaded = localStorage.getItem("loaded");
  const greeting = () => {
    if (time >= 5 && time < 12) {
      return (
        <p
          className={
            !isLoaded
              ? "title-greeting title-greeting-fade-in"
              : "title-greeting"
          }
        >
          Good morning!
        </p>
      );
    } else if (time >= 12 && time < 17) {
      return (
        <p
          className={
            !isLoaded
              ? "title-greeting title-greeting-fade-in"
              : "title-greeting"
          }
        >
          Good afternoon!
        </p>
      );
    } else if (time >= 17 && time < 22) {
      return (
        <p
          className={
            !isLoaded
              ? "title-greeting title-greeting-fade-in"
              : "title-greeting"
          }
        >
          Good evening!
        </p>
      );
    } else if (time >= 22 && time < 5) {
      console.log(true);
      return (
        <p
          className={
            !isLoaded
              ? "title-greeting title-greeting-fade-in"
              : "title-greeting"
          }
        >
          Good night!
        </p>
      );
    } else {
      return (
        <p
          className={
            !isLoaded
              ? "title-greeting title-greeting-fade-in"
              : "title-greeting"
          }
        >
          Hello!
        </p>
      );
    }
  };

  return (
    <section className="title">
      {greeting()}
      <p className={!isLoaded ? "subtitle subtitle-fade-in" : "subtitle"}>
        My name is Krzysztof and I want to work for you.
      </p>
    </section>
  );
}
