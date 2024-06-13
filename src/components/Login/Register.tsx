// import { createUserWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth, db } from "./firebase";
// import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";

// function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       const user = auth.currentUser;
//       console.log(user);
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: firstName,
//           lastName: lastName,
//           photo:""
//         });
//       }
//       console.log("User Registered Successfully!!");
//       toast.success("User Registered Successfully!!", {
//         position: "top-center",
//       });
//     } catch (error) {
//         const err = error as Error;
//       toast.error(err.message, {
//         position: "bottom-center",
//       });
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <h3>Sign Up</h3>

//       <div className="mb-3">
//         <label>First name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="First name"
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Last name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Last name"
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label>Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           placeholder="Enter email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label>Password</label>
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Enter password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary">
//           Sign Up
//         </button>
//       </div>
//       <p className="forgot-password text-right">
//         Already registered <a href="/login">Login</a>
//       </p>
//     </form>
//   );
// }
// export default Register;