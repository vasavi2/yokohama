

// // import React,{useState,useEffect} from 'react';
// // import "./login.css"
// // import login_image from "./images/Login.png"
// // import Typography from '@mui/material/Typography';
// // import FormControl from '@mui/material/FormControl';
// // import OutlinedInput from '@mui/material/OutlinedInput';
// // import { styled } from '@mui/material/styles';
// // import Button from '@mui/material/Button';
// // import { Icon } from "@iconify/react";
// // import { Divider } from '@mui/material';
// // import Auth from './Auth';
// // import {useNavigate} from "react-router-dom"


// // const Login = () => {
// //       const [view, setView] = useState("password");
// //       const [password, setPassword] = useState("");
// //       const [username, setUsername] = useState("");
// //       const [errorMessage, setErrorMessage] = useState("");


// //   const ColorButton = styled(Button)(({ theme }) => ({
// //     // color: theme.palette.getContrastText(purple[500]),
// //     backgroundColor: '#FFCB05',
// //     // '&:hover': {
// //     //   backgroundColor: purple[700],
// //     // },
// //   }));

// //   const navigate=useNavigate()

// //   // const handleSubmit=()=>{
// //   //   navigate("/dashboard")

// //   // }



  
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setErrorMessage("");
  
// //     if (username === 'admin@gmail.com' && password === 'admin') {
// //       navigate("/prediction");
// //       console.log("Authentication status");
// //     } else if (username === "" && password === "") {
// //       setErrorMessage("Please enter your username and password.");
// //     } else if (username === "") {
// //       setErrorMessage("Please enter your username.");
// //     } else if (password === "") {
// //       setErrorMessage("Please enter your password.");
// //     } else {
// //       setErrorMessage("Incorrect username or password.");
// //     }
// //   };
  





// //       return (
// //     <div className='main_container'>
// //       <div className='left_side'>
// //         <img src={login_image} alt="" height="650px"  width="700px"/>

// //       </div>
// //       <div className='right_side'>
// //       <Typography variant="h5" gutterBottom style={{marginTop:"100px",marginLeft:"280px",color:"#64748B"}}>
// //         Welcome to
// //       </Typography>
// //       <h1 style={{marginLeft:"230px",color:"#0479B2",position:"absolute",top:"140px"}}>WORKSPACE</h1>
// //       <div className='right_left'>
// //         <h3  style={{marginLeft:"10px",fontFamily:"Arial, Helvetica, sans-serif"}}>Sign In for an Account</h3>
// //         {errorMessage && (
// //                       <div className="alert alert-danger">{errorMessage}</div>
// //                     )}

// //         <FormControl fullWidth sx={{ m: 1 }}>
// //           <OutlinedInput
// //             id="outlined-adornment-weight"
// //             aria-describedby="outlined-weight-helper-text"
// //             placeholder='👤User Id'
// //             name="username"
// //                       value={username}
// //                       onChange={(e) => setUsername(e.target.value)}
// //                       autoComplete="username"

// //             inputProps={{
// //               'aria-label': 'weight',
// //             }}
// //           />

// //         </FormControl>

// //         <FormControl fullWidth sx={{ m: 1 }}>
// //           <OutlinedInput
// //             id="outlined-adornment-weight"
// //             aria-describedby="outlined-weight-helper-text"
// //             placeholder='🔒Password'
// //             type={view}
// //             name="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             autoComplete="current-password"
// //             inputProps={{
// //               'aria-label': 'weight',
// //             }}

// //           />
// //           <div className="viewicon">
// //                       {view === "password" ? (
// //                         <Icon
// //                           onClick={() => setView("text")}
// //                           icon="gridicons:not-visible"
// //                           style={{ color: "#888888",position:"absolute",top:"15px",fontSize:"30px",left:"350px" }}
// //                         />
// //                       ) : (
// //                         <Icon
// //                           onClick={() => setView("password")}
// //                           icon="gridicons:visible"
// //                           style={{ color: "#888888",position:"absolute",top:"15px",fontSize:"30px",left:"350px" }}
// //                         />
// //                       )}
// //                     </div>

// //         </FormControl>


// // <div className="wrappers" style={{marginTop:"-20px"}}>
                    
// //                   </div>

// //         {/* <ColorButton variant="contained" fullWidth sx={{ m: 1,height:"45px",color:'black',fontSize:"18px",marginTop:"40px" }}>
// //           Sign in 
// //           </ColorButton> */}
// //           <button className='btn w-100 rounded-0 ' style={{background:"#FFCB05",hover:"blue",marginLeft:"10px",height:"50px",color:'black',fontSize:"18px",marginTop:"40px"}} onClick={handleSubmit}>Sign in</button>
          
// //           {/* <Button variant="contained"  fullWidth sx={{ m: 1,height:"45px",color:'black',fontSize:"18px",marginTop:"40px" }}>
// //             Sign in
// //           </Button> */}

// //           <Divider style={{color:"#64748B",marginLeft:"30px"}}>Or Sign in with</Divider>

// //           <Auth/>

// //           {/* <button>
// //           <img src={outlook} alt="" height="20px"  width="20px"  style={{marginTop:"10px"}}/>
// //           <h2>Login with outlook</h2>
// //           </button> */}


          


        


// //       </div>
// //       <div className='right_right'>

// //       </div>


// //       </div>

      
// //     </div>
// //   );
// // };

// // export default Login;




// import React, { useState } from 'react';
// import "./login.css";
// import login_image from "./images/Login.png";
// import Typography from '@mui/material/Typography';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { Icon } from "@iconify/react";
// import { Divider } from '@mui/material';
// import Auth from './Auth';
// import { useNavigate } from "react-router-dom";

// const Login = ({ onLogin }) => {
//   const [view, setView] = useState("password");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const ColorButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#FFCB05',
//   }));

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     if (username === 'admin@gmail.com' && password === 'admin') {
//       onLogin();
//       navigate("/prediction");
//     } else if (username === "" && password === "") {
//       setErrorMessage("Please enter your username and password.");
//     } else if (username === "") {
//       setErrorMessage("Please enter your username.");
//     } else if (password === "") {
//       setErrorMessage("Please enter your password.");
//     } else {
//       setErrorMessage("Incorrect username or password.");
//     }
//   };

//   return (
//     <div className='main_container'>
//       <div className='left_side'>
//         <img src={login_image} alt="" height="650px" width="700px" />
//       </div>

//       <div className='right_side'>
//         <Typography variant="h5" gutterBottom style={{ marginTop: "100px", marginLeft: "280px", color: "#64748B" }}>
//           Welcome to
//         </Typography>
//         <h1 style={{ marginLeft: "230px", color: "#0479B2", position: "absolute", top: "140px" }}>WORKSPACE</h1>
//         <div className='right_left'>
//           <h3 style={{ marginLeft: "10px", fontFamily: "Arial, Helvetica, sans-serif" }}>Sign In for an Account</h3>
//           {errorMessage && (
//             <div className="alert alert-danger">{errorMessage}</div>
//           )}
//           <FormControl fullWidth sx={{ m: 1 }}>
//             <OutlinedInput
//               id="outlined-adornment-weight"
//               aria-describedby="outlined-weight-helper-text"
//               placeholder='👤User Id'
//               name="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               autoComplete="username"
//               inputProps={{
//                 'aria-label': 'weight',
//               }}
//             />
//           </FormControl>
//           <FormControl fullWidth sx={{ m: 1 }}>
//             <OutlinedInput
//               id="outlined-adornment-weight"
//               aria-describedby="outlined-weight-helper-text"
//               placeholder='🔒Password'
//               type={view}
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="current-password"
//               inputProps={{
//                 'aria-label': 'weight',
//               }}
//             />
//             <div className="viewicon">
//               {view === "password" ? (
//                 <Icon
//                   onClick={() => setView("text")}
//                   icon="gridicons:not-visible"
//                   style={{ color: "#888888", position: "absolute", top: "15px", fontSize: "30px", left: "350px" }}
//                 />
//               ) : (
//                 <Icon
//                   onClick={() => setView("password")}
//                   icon="gridicons:visible"
//                   style={{ color: "#888888", position: "absolute", top: "15px", fontSize: "30px", left: "350px" }}
//                 />
//               )}
//             </div>
//           </FormControl>
//           <button className='btn w-100 rounded-0 ' style={{ background: "#FFCB05", hover: "blue", marginLeft: "10px", height: "50px", color: 'black', fontSize: "18px", marginTop: "40px",cursor:"pointer",width:"400px" }} onClick={handleSubmit}>Sign in</button>
//           <Divider style={{ color: "#64748B", marginLeft: "30px",cursor:"pointer" }}>Or Sign in with</Divider>
//           <Auth />
//         </div>
//         <div className='right_right'>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React,{useState,useEffect} from 'react';
// import "./login.css"
// import login_image from "./images/Login.png"
// import Typography from '@mui/material/Typography';
// import FormControl from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { Icon } from "@iconify/react";
// import { Divider } from '@mui/material';
// import Auth from './Auth';
// import {useNavigate} from "react-router-dom"


// const Login = () => {
//       const [view, setView] = useState("password");
//       const [password, setPassword] = useState("");
//       const [username, setUsername] = useState("");
//       const [errorMessage, setErrorMessage] = useState("");


//   const ColorButton = styled(Button)(({ theme }) => ({
//     // color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: '#FFCB05',
//     // '&:hover': {
//     //   backgroundColor: purple[700],
//     // },
//   }));

//   const navigate=useNavigate()

//   // const handleSubmit=()=>{
//   //   navigate("/dashboard")

//   // }



  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrorMessage("");
  
//     if (username === 'admin@gmail.com' && password === 'admin') {
//       navigate("/prediction");
//       console.log("Authentication status");
//     } else if (username === "" && password === "") {
//       setErrorMessage("Please enter your username and password.");
//     } else if (username === "") {
//       setErrorMessage("Please enter your username.");
//     } else if (password === "") {
//       setErrorMessage("Please enter your password.");
//     } else {
//       setErrorMessage("Incorrect username or password.");
//     }
//   };
  





//       return (
//     <div className='main_container'>
//       <div className='left_side'>
//         <img src={login_image} alt="" height="650px"  width="700px"/>

//       </div>
//       <div className='right_side'>
//       <Typography variant="h5" gutterBottom style={{marginTop:"100px",marginLeft:"280px",color:"#64748B"}}>
//         Welcome to
//       </Typography>
//       <h1 style={{marginLeft:"230px",color:"#0479B2",position:"absolute",top:"140px"}}>WORKSPACE</h1>
//       <div className='right_left'>
//         <h3  style={{marginLeft:"10px",fontFamily:"Arial, Helvetica, sans-serif"}}>Sign In for an Account</h3>
//         {errorMessage && (
//                       <div className="alert alert-danger">{errorMessage}</div>
//                     )}

//         <FormControl fullWidth sx={{ m: 1 }}>
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             aria-describedby="outlined-weight-helper-text"
//             placeholder='👤User Id'
//             name="username"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       autoComplete="username"

//             inputProps={{
//               'aria-label': 'weight',
//             }}
//           />

//         </FormControl>

//         <FormControl fullWidth sx={{ m: 1 }}>
//           <OutlinedInput
//             id="outlined-adornment-weight"
//             aria-describedby="outlined-weight-helper-text"
//             placeholder='🔒Password'
//             type={view}
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="current-password"
//             inputProps={{
//               'aria-label': 'weight',
//             }}

//           />
//           <div className="viewicon">
//                       {view === "password" ? (
//                         <Icon
//                           onClick={() => setView("text")}
//                           icon="gridicons:not-visible"
//                           style={{ color: "#888888",position:"absolute",top:"15px",fontSize:"30px",left:"350px" }}
//                         />
//                       ) : (
//                         <Icon
//                           onClick={() => setView("password")}
//                           icon="gridicons:visible"
//                           style={{ color: "#888888",position:"absolute",top:"15px",fontSize:"30px",left:"350px" }}
//                         />
//                       )}
//                     </div>

//         </FormControl>


// <div className="wrappers" style={{marginTop:"-20px"}}>
                    
//                   </div>

//         {/* <ColorButton variant="contained" fullWidth sx={{ m: 1,height:"45px",color:'black',fontSize:"18px",marginTop:"40px" }}>
//           Sign in 
//           </ColorButton> */}
//           <button className='btn w-100 rounded-0 ' style={{background:"#FFCB05",hover:"blue",marginLeft:"10px",height:"50px",color:'black',fontSize:"18px",marginTop:"40px"}} onClick={handleSubmit}>Sign in</button>
          
//           {/* <Button variant="contained"  fullWidth sx={{ m: 1,height:"45px",color:'black',fontSize:"18px",marginTop:"40px" }}>
//             Sign in
//           </Button> */}

//           <Divider style={{color:"#64748B",marginLeft:"30px"}}>Or Sign in with</Divider>

//           <Auth/>

//           {/* <button>
//           <img src={outlook} alt="" height="20px"  width="20px"  style={{marginTop:"10px"}}/>
//           <h2>Login with outlook</h2>
//           </button> */}


          


        


//       </div>
//       <div className='right_right'>

//       </div>


//       </div>

      
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import "./login.css";
import login_image from "./images/Login.png";
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Icon } from "@iconify/react";
import { Divider } from '@mui/material';
import Auth from './Auth';
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [view, setView] = useState("password");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FFCB05',
  }));

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (username === 'admin@gmail.com' && password === 'admin') {
      onLogin();
      navigate("/home");
    } else if (username === "" && password === "") {
      setErrorMessage("Please enter your username and password.");
    } else if (username === "") {
      setErrorMessage("Please enter your username.");
    } else if (password === "") {
      setErrorMessage("Please enter your password.");
    } else {
      setErrorMessage("Incorrect username or password.");
    }
  };

  return (
    <div className='main_container'>
      <div className='left_side'>
        <img src={login_image} alt="" height="650px" width="700px" />
      </div>

      <div className='right_side'>
        <Typography variant="h5" gutterBottom style={{ marginTop: "100px", marginLeft: "280px", color: "#64748B" }}>
          Welcome to
        </Typography>
        <h1 style={{ marginLeft: "40px", color: "#0479B2", position: "absolute", top: "140px",fontSize:"32px" }}>Yokohama Tyre Curing Time Prediction</h1>
        <div className='right_left'>
          <h3 style={{ marginLeft: "10px", fontFamily: "Arial, Helvetica, sans-serif" }}>Sign In for an Account</h3>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              placeholder='👤User Id'
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              placeholder='🔒Password'
              type={view}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
            <div className="viewicon">
              {view === "password" ? (
                <Icon
                  onClick={() => setView("text")}
                  icon="gridicons:not-visible"
                  style={{ color: "#888888", position: "absolute", top: "15px", fontSize: "30px", left: "350px" }}
                />
              ) : (
                <Icon
                  onClick={() => setView("password")}
                  icon="gridicons:visible"
                  style={{ color: "#888888", position: "absolute", top: "15px", fontSize: "30px", left: "350px" }}
                />
              )}
            </div>
          </FormControl>
          <button className='btn w-100 rounded-0 ' style={{ background: "#FFCB05", hover: "blue", marginLeft: "10px", height: "50px", color: 'black', fontSize: "18px", marginTop: "10px",cursor:"pointer",width:"400px" }} onClick={handleSubmit}>Sign in</button>
          <Divider style={{ color: "#64748B", marginLeft: "30px",cursor:"pointer",marginTop:"10px" }}>Or Sign in with</Divider>
          <Auth />
        </div>
        <div className='right_right'>
        </div>
      </div>
    </div>
  );
};

export default Login;
