import "./Journal.css";

const Journal = () => {
  return (
    <div className="Journal">
      <h1 className="Title">Journal Entry</h1>
      <div className="Entry">
        <h2 className="Date">Date: 2021-10-10</h2>
        <p className="Content">
          Today I learned about React. It is a JavaScript library for building
          user interfaces. I also learned about JSX, which is a syntax extension
          for JavaScript. I am excited to learn more about React and build some
          cool projects with it.
        </p>
      </div>
    </div>
  );
};
export default Journal;
