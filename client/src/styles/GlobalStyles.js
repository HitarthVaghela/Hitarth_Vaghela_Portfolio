import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #1a1a2e;
    --secondary-color: #0f3460;
    --accent-color: #007bff;
    --background-color: #0c0c1d;
    --text-color: #f0f0f0;
    --light-text-color: #b0b0b0;
    --card-background: #16213e;
    --border-color: #30475e;
    --success-color: #4caf50;
    --danger-color: #f44336;
    --font-primary: 'Poppins', Arial, sans-serif;
    --font-secondary: 'Roboto', Arial, sans-serif;
    --transition: all 0.3s ease-in-out;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--accent-color) var(--primary-color);
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
    overflow-x: hidden;
    cursor: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--primary-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 10px;
  }

  a {
    text-decoration: none;
    color: var(--accent-color);
    transition: var(--transition);
    cursor: none;
  }

  a:hover {
    color: #fff;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea {
    font-family: var(--font-primary);
    cursor: none;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  section {
    padding: 5rem 0;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    margin-bottom: 1rem;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    font-weight: 500;
    cursor: none;
    transition: var(--transition);
    border: none;
    outline: none;
  }

  .btn-primary {
    background-color: var(--accent-color);
    color: #fff;
  }

  .btn-primary:hover {
    background-color: #0069d9;
  }

  .btn-outline {
    background: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
  }

  .btn-outline:hover {
    background-color: var(--accent-color);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    section {
      padding: 4rem 0;
    }
    body, a, button, input, textarea, .btn {
      cursor: auto;
    }
  }

  .text-center {
    text-align: center;
  }

  .section-title {
    margin-bottom: 3rem;
  }

  .section-title h2 {
    display: inline-block;
    position: relative;
    margin-bottom: 1rem;
  }

  .section-title h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50%;
    height: 4px;
    background-color: var(--accent-color);
  }

  .text-gradient {
    background: linear-gradient(to right, var(--accent-color), #00c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cursor-animation {
    position: fixed;
    pointer-events: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-color);
    mix-blend-mode: difference;
    opacity: 0.7;
    transform: translate(-50%, -50%);
    z-index: 9999;
    transition: width 0.3s, height 0.3s, opacity 0.3s;
    box-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color);
  }

  .cursor-animation.hover {
    width: 30px;
    height: 30px;
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid var(--accent-color);
  }
  
  @media screen and (max-width: 768px) {
    .cursor-animation {
      display: none;
    }
  }
`;

export default GlobalStyles; 