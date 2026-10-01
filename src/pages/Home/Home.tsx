import ExerciseCard from "../../components/ExerciseCard/ExerciseCard";
import exercisesData from "../../data/exercises.json";
import "./Home.css";

export function Home() {
  const introExercises = exercisesData.filter(
    (ex) => ex.category === "Introduction",
  );
  const boostExercises = exercisesData.filter((ex) => ex.category === "Boost");

  return (
    <div className="home-container">
      <h1 className="home-title">C Tutorial</h1>

      {/* קטגוריה ראשונה: Introduction */}
      <section className="section-block">
        <h2 className="category-title">Introduction</h2>
        <div className="exercises-list">
          {introExercises.map((ex) => (
            <div className="exercise-wrapper" key={ex.id}>
              <ExerciseCard question={ex.question} answer={ex.answer} />
            </div>
          ))}
        </div>
      </section>

      {/* קטגוריה שנייה: Boost */}
      <section className="section-block">
        <h2 className="category-title">Boost</h2>
        <div className="exercises-list">
          {boostExercises.map((ex) => (
            <div className="exercise-wrapper" key={ex.id}>
              <ExerciseCard question={ex.question} answer={ex.answer} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
