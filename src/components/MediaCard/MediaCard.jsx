import "./mediacard.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Date } from "../Date/Date";

export const MediaCard = ({ ...props }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card size="small">
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Date date={props.date} />
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <MyButton onClick={() => navigate(`/article/${props.id}`)} />
      </Card>
    </>
  );
};
const MyButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="read_more">
      read more &rarr;
    </button>
  );
};
