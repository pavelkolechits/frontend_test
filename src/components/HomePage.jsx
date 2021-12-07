import { Form } from "./Form/Form";
import { MediaCardList } from "./MediaCardList/MediaCardList";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../redux/constants";

export const HomePage = () => {
  const [countResult, setCountResult] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ACTIONS.GET_NEWS_REQUEST });
  }, []);

  const [value, setValue] = useState("");

  const handleValue = (value) => {
    setValue(value);
  };

  return (
    <>
      <Form countResult={countResult} handleValue={handleValue} value={value} />
      <MediaCardList
        countResult={countResult}
        setCountResult={setCountResult}
        value={value}
      />
    </>
  );
};
