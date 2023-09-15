import "./App.css";
import TextField from "@mui/material/TextField";

import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  // const [user, setUser] = useState(null);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/", {
        Name: data.Name,
        Email: data.Email,
        Password: data.Password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="input-wrapper">
        <form className="input" onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <TextField
            {...register("Name", {
              required: "Name Is Required",
              maxLength: { value: 10, message: "Maximum Length 20" },
              minLength: { value: 2, message: "Minimum Length 2" },
            })}
            type="text"
            fullWidth
            label="Name"
          />
          {errors.Name?.message}
          <TextField
            {...register("Email", { required: "Email Is Require" })}
            type="email"
            fullWidth
            label="Email"
          />
          {errors.Email?.message}
          <TextField
            {...register("Password", {
              required: "Password Is Required",
              maxLength: { value: 20, message: "Maximum Password Length 20" },
              minLength: { value: 6, message: "Minimum Password Length 6" },
            })}
            type="password"
            fullWidth
            label="Password"
          />
          {errors.Password?.message}
          <input className="button" type="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
