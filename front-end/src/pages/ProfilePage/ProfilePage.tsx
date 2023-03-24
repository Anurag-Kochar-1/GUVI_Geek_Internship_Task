import React, { useState } from "react";
import AppForm from "../../components/AppForm/AppForm";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import axios from "axios";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const [mobileNumber, setMobileNumber] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [selectedGender, setSelectedGender] = useState("");
  const [date, setDate] = useState<string>("");

  const updateUserProfile = async () => {
    const res = await axios.put(
      `https://anurag-guvi-api.onrender.com/api/updateUser/641d14ed1255fea71a807e53`,
      {
        age,
        mobile: mobileNumber,
        dob: date,
        gender: selectedGender,
      }
    );

    if (res.status === 201) {
      toast("Updated Successfully", {
        duration: 4000,
        position: "top-center",
        icon: "✅",
      });
    }

    console.log(res);
  };

  return (
    <main className="w-full h-full flex flex-col lg:flex-row justify-center items-center overflow-x-hidden overflow-y-auto">
      <AppForm
        onSubmit={updateUserProfile}
        className={
          "w-[90%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] flex flex-col items-center justify-start space-y-5 lg:px-10 py-10"
        }
      >
        <h1 className="text-5xl xl:text-6xl font-bold bg-gradient-to-r from-indigo-500 to-fuchsia-300 bg-clip-text text-transparent">
          {" "}
          Profile{" "}
        </h1>
        <TextField
          type="number"
          label="Mobile Number"
          placeholder=""
          name="mobileNumber"
          isSchema={false}
          value={mobileNumber}
          onChange={(e: any) => setMobileNumber(e.target.value)}
        />
        <TextField
          type="number"
          label="Age"
          placeholder=""
          name="Age"
          isSchema={false}
          value={age}
          onChange={(e: any) => setAge(e.target.value)}
        />

        <div className="w-full flex flex-col items-start justify-start space-y-1">
          <label htmlFor="selectGender" className="font-semibold text-base">
            Gender
          </label>
          <select
            id="selectGender"
            title="choose"
            className="w-full h-12 bg-white border-2 rounded-md placeholder:text-black text-black p-2 outline-brand font-medium"
            value={selectedGender}
            onChange={(e) => {
              setSelectedGender(e.target.value);
            }}
          >
            {["Male", "Female", "Other"]?.map((category) => {
              return (
                <option key={category} value={category} className="">
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <div className="w-full flex flex-col items-start justify-start space-y-1">
          <label htmlFor="selectGender" className="font-semibold text-base">
            DOB
          </label>
          <input
            type="date"
            title="dob"
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-12 bg-white border-2 rounded-md placeholder:text-black text-black p-2 outline-brand font-medium"
          />
        </div>

        <Button size="FULL" type={"submit"}>
          Update Profile
        </Button>
      </AppForm>
    </main>
  );
};

export default ProfilePage;
