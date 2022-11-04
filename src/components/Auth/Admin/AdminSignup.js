import { useState } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
//import Button from '@mui/material/Button';
// import Button from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Button } from '@mui/material';
import { NavLink } from "react-router-dom";
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

const AdminSignUp = ({ setLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  //   // send user creds to signup route

  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://mighty-fjord-86271.herokuapp.com/admin/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(setLogin);
    // alert("signup success");
    console.log(formData);
  };
  const onFormInputChanged = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   return (
  //     <div className="container text-center">
  //       <div className="row gx-4">
  //         <div className="col border">hello</div>
  //         <form className="col border">
  //           <h1>SignUp</h1>
  //           <input
  //             name="username"
  //             type="type"
  //             className="form-control my-2"
  //             placeholder="enter your user name"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <input
  //             name="email"
  //             type="email"
  //             className="form-control my-2"
  //             placeholder="type in your email address"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <input
  //             name="password"
  //             type="password"
  //             className="form-control my-2"
  //             placeholder="Please enter your password"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <input
  //             name="password_confirmation"
  //             type="password"
  //             className="form-control my-2"
  //             placeholder="Please reenter your password to confirm"
  //             onChange={onFormInputChanged}
  //           ></input>
  //           <button
  //             className="btn btn-primary"
  //             type="submit"
  //             onClick={onFormSubmit}
  //           >
  //             Submit
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  // export default SignUp;

  // =========================================MUI starts here ====================================

  // function Copyright(props) {
  //   return (
  //     <Typography variant="body2" color="text.secondary" align="center" {...props}>
  //       {'Copyright © '}
  //       <Link color="inherit" href="https://mui.com/">
  //         Your Website
  //       </Link>{' '}
  //       {new Date().getFullYear()}
  //       {'.'}
  //     </Typography>
  //   );
  // }

  const theme = createTheme();

  // export default function SignUp() {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);
  //     console.log({
  //       email: data.get('email'),
  //       password: data.get('password'),
  //     });
  //   };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={onFormSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={onFormInputChanged}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="family-name"
                  onChange={onFormInputChanged}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={onFormInputChanged}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  // id="password"
                  autoComplete="new-password"
                  onChange={onFormInputChanged}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={onFormInputChanged}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              onClick={onFormSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <NavLink exact to="/signin" variant="body2"> */}
                <Link to="/adminsignin" variant="body2">
                  Already have an account? Sign in
                </Link>
                {/* </NavLink> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};
export default AdminSignUp;

// ======================================MUI ends here ============================================
