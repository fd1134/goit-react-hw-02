import css from "./Feedback.module.css";
const FeedBack = ({ options, totalFeedback }) => {
    const goodSate=options.good+options.neutral;
    const pozitive=Math.round((goodSate / totalFeedback) * 100)
  return (
    <>
       <p className={`${css.p} ${css.good}`}>Good: {options.good} </p>
      <p className={`${css.p} ${css.neutral}`}>Neutral: {options.neutral} </p>
      <p className={`${css.p} ${css.bad}`}>Bad: {options.bad} </p>
      <p className={`${css.p} ${css.pozitive}`}>Pozitive: {pozitive} </p>
    </>
  );
};

export default FeedBack;
