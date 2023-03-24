import React, { useState } from "react";
import AppForm from "../../components/AppForm/AppForm";
import TextField from "../../components/TextField/TextField";

const ProfilePage = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [date, setDate] = useState<string>("");

  return (
    <main className="w-full h-full bg-light flex flex-col lg:flex-row justify-center items-center overflow-x-hidden overflow-y-auto">
      <AppForm onSubmit={""} className={"space-y-3"}>
        <h1 className="text-4xl"> {date} </h1>
        <TextField
          type="text"
          label="Name"
          placeholder=""
          name="name"
          isSchema={false}
        />
        <TextField
          type="number"
          label="Mobile Phone"
          placeholder=""
          name="mobilePhone"
          isSchema={false}
        />
        <TextField
          type="number"
          label="Age"
          placeholder=""
          name="Age"
          isSchema={false}
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
      </AppForm>
    </main>
  );
};

export default ProfilePage;
