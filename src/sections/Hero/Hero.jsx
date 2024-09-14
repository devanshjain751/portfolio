import React, { useEffect } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/devansh.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/leetcode.webp';
import twitterDark from '../../assets/leetcode1.jpeg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4164326616397650';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Devansh
          <br />
          Jain
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://leetcode.com/u/Deavanshjain/" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Link to Devansh's Leetcode profile" />
          </a>
          <a href="https://github.com/devanshjain751" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Link to Devansh's GitHub profile" />
          </a>
          <a href="https://www.linkedin.com/in/devanshjain751" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Link to Devansh's LinkedIn profile" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>

      {/* Add the script at the end of the component */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4164326616397650"
        crossOrigin="anonymous"
      ></script>
    </section>
  );
}

export default Hero;
