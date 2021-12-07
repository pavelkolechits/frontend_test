import { Form } from "./Form/Form";
import { MediaCardList } from "./MediaCardList/MediaCardList";
import { useState } from "react";

export const HomePage = () => {
  const [countResult, setCountResult] = useState(0);

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
