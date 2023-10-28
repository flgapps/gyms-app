import CardMedia from "@mui/material/CardMedia";

interface MediaProps {
  srcImage: string;
  altIOmage: string;
}

export const ViewImageCard = ({ srcImage, altIOmage }: MediaProps) => {
  return (
    <CardMedia
      component="img"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        objectFit: "cover",
      }}
      image={srcImage}
      alt={altIOmage}
    />
  );
};
