import "./mediacardlist.scss";
import { MediaCard } from "../MediaCard/MediaCard";
import { useSelector } from "react-redux";

export const MediaCardList = ({ ...props }) => {
  const state = useSelector((i) => i.postListReducer.articles);

  function createMarkup(text) {
    return { __html: handleData(text) };
  }

  function handleData(text) {
    return text.split(" ").reduce((acc, i) => {
      if (props.value.toLowerCase().includes(i.toLowerCase())) {
        return (acc += `<span class='higtlight'>${i}</span>` + " ");
      }
      return (acc += i + " ");
    }, "");
  }

  return (
    <div className="wrap_media_card">
      {state.length === 0
        ? "LOADING..."
        : state
            .filter(
              (i) =>
                i.title.toLowerCase().includes(props.value) ||
                i.summary.toLowerCase().includes(props.value)
            )
            .map((i) => (
              <MediaCard
                key={i.id}
                id={i.id}
                img={i.imageUrl}
                title={
                  <span dangerouslySetInnerHTML={createMarkup(i.title)}></span>
                }
                content={
                  <span
                    dangerouslySetInnerHTML={createMarkup(i.summary)}
                  ></span>
                }
                date={i.publishedAt}
              />
            ))}
    </div>
  );
};
