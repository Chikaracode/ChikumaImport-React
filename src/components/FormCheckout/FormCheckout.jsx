
import { Button,  Grid,  TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({ handleSubmit, handleChange, errors}) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              color="secondary"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="secondary"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
         
          <Grid item xs={11} sm={7}>
            <TextField
              id="outlined-basic"
              label="Telefono"
              variant="outlined"
              color="secondary"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Button type="submit" variant="contained">
            Comprar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormCheckout;
