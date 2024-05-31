import { Grid } from "@mui/material";
import "./register-user.css";
import dataRegister from "./data-register";

export default function RegisterUserForm() {
  return (
    <>
      <form className="register">
        <Grid container spacing={2}>
          {dataRegister.textfields.map((item, index) => (
            <Grid key={index} item xs={item.xs}>
              <div className={item.className}>
                <label htmlFor={item.htmlfor}>{item.dataname}</label>
                <input type={item.type} id={item.id} />
              </div>
            </Grid>
          ))}

          {dataRegister.selectfields.map((item, index) => (
            <Grid key={index} item xs={item.xs}>
              <div className={item.className}>
                <label htmlFor={item.htmlfor}>{item.dataname}</label>
                <select id={item.id}>
                  {item.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </Grid>
          ))}
        </Grid>
      </form>
    </>
  );
}
