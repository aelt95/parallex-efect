import "./App.css";
import background from "./assets/background.png";
import sun_rays from "./assets/sun_rays.png";
import black_shadow from "./assets/black_shadow.png";
import fog_7 from "./assets/fog_7.png";
import fog_6 from "./assets/fog_6.png";
import fog_5 from "./assets/fog_5.png";
import fog_4 from "./assets/fog_4.png";
import fog_3 from "./assets/fog_3.png";
import fog_2 from "./assets/fog_2.png";
import fog_1 from "./assets/fog_1.png";
import mountain_10 from "./assets/mountain_10.png";
import mountain_9 from "./assets/mountain_9.png";
import mountain_8 from "./assets/mountain_8.png";
import mountain_7 from "./assets/mountain_7.png";
import mountain_6 from "./assets/mountain_6.png";
import mountain_5 from "./assets/mountain_5.png";
import mountain_4 from "./assets/mountain_4.png";
import mountain_3 from "./assets/mountain_3.png";
import mountain_2 from "./assets/mountain_2.png";
import mountain_1 from "./assets/mountain_1.png";
import logo from "./assets/aelt-logo.png";
import nature_sound from "./assets/nature-audio.wav";

function App() {
  const imagesData = [
    {
      src: background,
      speedX: 0.3,
      speedY: 0.4,
      class: "parallax bg-img",
    },
    {
      src: fog_7,
      speedX: 0.22,
      speedY: 0.35,
      class: "parallax fog-7",
    },
    {
      src: mountain_10,
      speedX: 0.22,
      speedY: 0.3,
      class: "parallax mountain-10",
    },
    {
      src: fog_6,
      speedX: 0.2,
      speedY: 0.24,
      class: "parallax fog-6",
    },
    {
      src: mountain_9,
      speedX: 0.17,
      speedY: 0.2,
      class: "parallax mountain-9",
    },
    {
      src: mountain_8,
      speedX: 0.13,
      speedY: 0.16,
      class: "parallax mountain-8",
    },
    {
      src: fog_5,
      speedX: 0.1,
      speedY: 0.11,
      class: "parallax fog-5",
    },
    {
      src: mountain_7,
      speedX: 0.09,
      speedY: 0.099,
      class: "parallax mountain-7",
    },
    {
      src: mountain_6,
      speedX: 0.08,
      speedY: 0.1,
      class: "parallax mountain-6",
    },
    {
      src: fog_4,
      speedX: 0.2,
      speedY: 0.1,
      class: "parallax fog-4",
    },
    {
      src: mountain_5,
      speedX: 0.07,
      speedY: 0.08,
      class: "parallax mountain-5",
    },
    {
      src: fog_3,
      speedX: 0.1,
      speedY: 0.1,
      class: "parallax fog-3",
    },
    {
      src: mountain_4,
      speedX: 0.06,
      speedY: 0.05,
      class: "parallax mountain-4",
    },
    {
      src: mountain_3,
      speedX: 0.05,
      speedY: 0.04,
      class: "parallax mountain-3",
    },
    {
      src: fog_2,
      speedX: 0.1,
      speedY: 0.1,
      class: "parallax fog-2",
    },
    {
      src: mountain_2,
      speedX: 0.04,
      speedY: 0.03,
      class: "parallax mountain-2",
    },
    {
      src: mountain_1,
      speedX: 0.03,
      speedY: 0.03,
      class: "parallax mountain-1",
    },
    {
      src: fog_1,
      speedX: 0.2,
      speedY: 0.1,
      class: "parallax fog-1",
    },
  ];
  const parallax_el = document.querySelectorAll(".parallax");

  let xValue = 0,
    yValue = 0;

  window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - innerWidth / 2;
    yValue = e.clientY - innerHeight / 2;

    parallax_el.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      el.style.transform = `translateX(calc(-50% + ${
        -xValue * speedx
      }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
  });

  const handleSound = () => {
    new Audio(nature_sound).play();
  };

  return (
    <main>
      <header className="header">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <button className="music" onClick={handleSound}>
            Play Sound
          </button>
        </nav>
      </header>
      {imagesData.map((element) => {
        return (
          <img
            src={element.src}
            className={element.class}
            data-speedx={element.speedX}
            data-speedy={element.speedY}
          />
        );
      })}
      <div class="text parallax" data-speedx="0.1" data-speedy="0.1">
        <h2>China</h2>
        <h1>Zhangjiajie</h1>
      </div>
      <img src={sun_rays} class="sun-rays" />
      <img src={black_shadow} class="black-shadow" />
    </main>
  );
}

export default App;
