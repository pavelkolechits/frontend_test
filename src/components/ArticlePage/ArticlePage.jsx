import "./articlepage.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loremText } from "./loremText";

export const ArticlePage = () => {
  const params = useParams();

  let article = useSelector((i) =>
    i.postListReducer.articles.length === 0
      ? JSON.parse(localStorage.getItem("article"))
      : i.postListReducer.articles.filter((i) => i.id === Number(params.id))[0]
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("article", JSON.stringify(article));
  }, [article]);



  const { title, imageUrl, summary } = article;
  return (
    <>
      <div className="article_wrap">
        <div className="img_wrap">
          <img className="img_article_page" src={imageUrl || ""} alt="img" />
        </div>
        <div className="article">
          <h2 className="title">{title || ""}</h2>
          <span className="description">{summary || ""}</span>
          <span className="content">{loremText}</span>
        </div>
      </div>
      <ButtonOfMoving
        onClick={() => navigate("/")}
        className="back_to_homepage"
      >
        &larr; Back to homepage
      </ButtonOfMoving>
    </>
  );
};

const ButtonOfMoving = ({ className, onClick, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
