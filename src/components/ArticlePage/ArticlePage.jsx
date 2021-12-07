import "./articlepage.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export const ArticlePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const article = useSelector(
    (i) =>
      i.postListReducer.articles.filter((i) => i.source.id === params.id)[0]
  );
  const { title, description, urlToImage, content } = article;
  return (
    <>
      <div className="article_wrap">
        <div className="img_wrap">
          <img className="img_article_page" src={urlToImage || ""} alt="img" />
        </div>
        <div className="article">
          <h2 className="title">{title || ""}</h2>
          <span className="description">{description || ""}</span>
          <span className="content">{content || ""}</span>
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
