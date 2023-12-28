// import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      firstName: "Firstname",
      lastName: "Lastname",
      email: "email@gmail.com",
    },
  });
  console.log(errors);
  const formSubmitHandler = (data) => {
    toast.success("Registration Complete", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("data:", data);
  };
  return (
    <div>
      <ToastContainer />
      <fieldset className="border border-solid border-gray-300 p-3">
        <legend className="text-md bg-black text-white">Fill This Form</legend>

        <form
          onSubmit={handleSubmit(formSubmitHandler)}
          className="flex bg-slate-300 p-4 flex-col justify-center space-y-5 px-20 font-bold text-1xl"
        >
          {isSubmitSuccessful && (
            <div className="text-white px-3 py-2 bg-blue-700">
              <p className="text-2xl font-bold">Registration Successful</p>
            </div>
          )}
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            className="bg-slate-100"
            {...register("firstName", {
              required: "Fill First Name",
              minLength: { value: 3, message: "Minimum 3 char required" },
            })}
          />
          {/* {<p className="err">{errors.firstName?.message}</p>} */}

          {<p className={"font-bold"}>{errors.firstName?.message}</p>}

          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            className="bg-slate-100"
            {...register("lastName", {
              required: "Please enter Last Name",
              minLength: { value: 1, message: "Minimum 1 char required" },
            })}
          />
          {<p className="font-bold">{errors.lastName?.message}</p>}

          <label>Email: </label>
          <input
            type="email"
            name="email"
            className="bg-slate-100"
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter valid email",
              },
            })}
          />
          {<p className="font-bold">{errors.email?.message}</p>}

          <label> Password:</label>
          <input
            type="password"
            name="password"
            className="bg-slate-100"
            {...register("password", {
              required: "Please enter Password",
              minLength: { value: 8, message: "Minimum 8 char required" },
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
                message: "Please enter valid password",
              },
            })}
          />
          {<p className="font-bold">{errors.password?.message}</p>}

          <input
            type="submit"
            value="Register"
            className="cursor-pointer text-2xl m-2 bg-green-400 p-3 rounded-md hover:bg-green-500 hover:text-white"
          />
          <button
            onClick={() => {
              reset();
            }}
          >
            RESET
          </button>
        </form>
      </fieldset>
    </div>
  );
}
