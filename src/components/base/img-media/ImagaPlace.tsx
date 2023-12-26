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
        width: "300px",
        height: "220px"
      }}
      image={srcImage}
      alt={altIOmage}
    />
  );
};
