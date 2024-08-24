import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/portfolio.png';
import freshBurger from '../../assets/tictactoe.png';
import hipsster from '../../assets/rocket.jpeg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/devanshjain751/portfolio"
          h3="Portfolio"
          p="Portfolio App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://tictactoedevansh.netlify.app/"
          h3="Tic-Tac-Toe"
          p="Tic-Tac-Toe"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/devanshjain751/Rocket-Moving-with-Mouse"
          h3="Rocket Moving"
          p="Rocket Moving"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
