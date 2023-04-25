import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const ItemCard = ({item}) => {
  return (
    
        <Card sx={{
          transition: "0.2s",
          "&:hover": {
            transform:"scale(1.05)",
          } ,
          width: 345, 
          height: 300
        }} >
          <CardMedia
            sx={{ height: 140 }}
            image={item.imagen}
            
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {item.titulo}
            </Typography>
            <Typography variant="h6" color="hotpink">
             S/. {item.precio}
            </Typography>
          </CardContent>
          <CardActions>
           <Link to={ `/itemDetail/${item.id}` }>
           <Button variant="contained" color="info" size="small">Ver detalle</Button> 
           </Link>
          </CardActions>
          
        </Card>
    
  )
}

export default ItemCard
