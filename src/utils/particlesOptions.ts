// eslint-disable-next-line import/prefer-default-export
export const particlesOptions = {
  autoPlay: true,
  fpsLimit: 60,
  pauseOnOutsideViewport: true,
  detectRetina: true,
  background: {
    color: '#131212',
  },
  backgroundMask: {

  },
  backgroundMode: {

  },
  infection: {

  },
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 1,
      },
      grab: {
        distance: 120,
        links: {
          blink: false,
          color: '#e0d5d5',
          consent: true,
          opacity: 1,
        },
      },
    },
  },
  motion: {

  },
  particles: {
    color: {
      animation: {
        enable: true,
        speed: 3,
        sync: true,
      },
      value: '#ff3100',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 35,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 10,
    },
  },
};
