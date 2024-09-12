// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";

export default function MediaCard({
  category,
  image,
  description,
  price,
  title,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const singleProduct = () => {
    navigate(`/single/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong>Title:</strong>
          {title}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <strong>Price:</strong> {price}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <strong>category:</strong> {category}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <strong>Description:</strong>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" color="primary" backgroundColor="primary" onClick={singleProduct}>Show More</Button> */}
        <Button variant="contained" onClick={singleProduct}>
          Show More
        </Button>
      </CardActions>
    </Card>
  );
}
