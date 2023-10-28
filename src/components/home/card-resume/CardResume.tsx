import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CardInfo {
  category: string;
  infoDetail: string;
}

export const CardResume = ({ category, infoDetail }: CardInfo) => {
  return (
    <Card sx={{ width: 265 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {category}
        </Typography>
        <Typography variant="h4" component="div">
          {infoDetail}
        </Typography>
      </CardContent>
    </Card>
  );
};
