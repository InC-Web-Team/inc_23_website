import "../styles/event_registrations.css";
import React, { useRef } from "react";
import { useState } from "react";
import {
  InputBox,
  Buttons,
  FileInputBox,
  toast,
  NoteBox,
  CloseMessage,
} from "../../index.js";
import styled from "styled-components";
import { paymentLinks, state_arr, year_arr } from "../../../static/data";
import Dropdown from "../../dropdown";
import RadioButtons from "../../radioButtons";
import {
  useRegisterStep1,
  useRegisterStep2,
  useRegisterStep3,
  useRegisterStep4,
} from "../../../hooks/events.hooks";
import {
  projectDomains,
  projectTypes,
  localTypes,
  departments
} from "../../../static/data";

import payment_qr from "../../../assets/payment QR/payment_qr.jpg";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #155e75;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#075985" : "#155e75")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #000000;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #155e75;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -15px;
  margin-top: 100px;
`;

const ButtonStyle = styled.button`
  border-radius: 4px;
  border: 0;
  background: #155e75;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  width: 90px;
  :active {
    transform: scale(0.98);
  }
  :disabled {
    background: #155e75;
    color: #000000;
    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #155e75;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "Step1",
    step: 1,
  },
  {
    label: "Step2",
    step: 2,
  },
  // {
  //   label: "Step3",
  //   step: 3,
  // },
  // {
  //   label: "Step4",
  //   step: 4,
  // },
];
const totalSteps = steps.length;
const initialErrorsForm0 = {
  faculty_name: "",
  faculty_email: "",
  department: "",
  faculty_phone: "",
};
const initialErrorsForm1 = {
  judge_name: "",
  judge_email: "",
  judge_phone: "",
  mode: "",
  judge_company: "",
  judge_location: "",
};

const mode_evealution = [
  { value: "SEL", label: "Select", disabled: true },
  { value: "Online", label: "Online (Only Judges outside Pune)" },
  { value: "Offline", label: "Offline (All the judges in Pune will be requested to come physically for the evaluation)" },
  { value: "Other", label: "Other" },
];

function Teacher_Judge() {
  //form0
  const [activeStep, setActiveStep] = React.useState(1);
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;
  const [form0, setForm0] = useState({
    faculty_name: "",
    faculty_email: "",
    faculty_phone: "",
  });
  const [errors0, setErrors0] = useState(initialErrorsForm0);
  const registerUserMutationForm0 = useRegisterStep1(setErrors0, "impetus");

  const handleInputChange0 = (e) => {
    const { name, value } = e.target;
    setForm0((prevState) => {
      errors0[name] !== "" &&
        setErrors0((prevState) => ({ ...prevState, [name]: "" }));
      return { ...prevState, [name]: value };
    });
  };
  const handleSelectChange0 = (e) => {
    const { name, value } = e.target;
    setForm0((prevState) => {
      errors0[name] !== "" &&
        setErrors0((prevState) => ({ ...prevState, [name]: "" }));
      return { ...prevState, [name]: value };
    });
  };


  const [formFields, setFormFields] = useState([
    {
      judge_name: "",
      judge_email: "",
      judge_phone: "",
      mode: "SEL",
      judge_company: "",
      judge_location: "",
    },
  ]);

  const [errors1, setErrors1] = useState(initialErrorsForm1);
  const registerUserMutationForm1 = useRegisterStep2(setErrors1, "impetus");

  const handleFormChange = (event, index) => {
    const { name, value } = event.target;
    setFormFields((prevState) => {
      errors1[name] !== "" &&
        setErrors1((prevState) => ({ ...prevState, [name]: "" }));
      let data = [...prevState];
      data[index][name] = value;
      return data;
    });
  };

  const handleSelectChange1 = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  const addFields = () => {
    if (formFields.length < 6) {
      for (const property in formFields.at(-1)) {
        if (property === "judge_name" && formFields.at(-1)[property] === "") {
          toast.warn("Please enter name");
          return;
        } else if (property === "judge_email" && !validateEmail(formFields.at(-1)[property])) {
          toast.warn("Please enter a valid E-mail address");
          return;
        } else if (property === "judge_phone" && formFields.at(-1)[property].length !== 10) {
          toast.warn("Please enter a valid phone number");
          return;
        } else if (property === "mode" && formFields.at(-1)[property] === "SEL") {
          toast.warn("Please mode of elavlaution");
          return;
        } else if (property === "judge_company" && formFields.at(-1)[property] === "") {
          toast.warn("Please enter Judge Company : ");
          return;
        } else if (property === "judge_location" && formFields.at(-1)[property] === "") {
          toast.warn("Please enter Judge Loaction ");
          return;
        }
      }


      const memberFormData = new FormData();
      memberFormData.append("member_id", formFields.at(-1).member_id);
      const tempMemberDetails = { ...formFields.at(-1) };
      delete tempMemberDetails.member_id;
      memberFormData.append("body", JSON.stringify(tempMemberDetails));
      registerUserMutationForm1.mutate(memberFormData, {
        onSuccess: () => {
          setErrors1(initialErrorsForm1);
          SetMemberCount((memberCount) => memberCount + 1);
          toast.success(`Judge ${memberCount + 1} added !`, { icon: "✅" });
        }
      });
      return;
    }
    toast.warn("Maximum 5 members are allowed");
  };

  const addAnotherMember = () => {
    if (formFields.length > 5) {
      toast.warn("Limit Reached !");
      return;
    }
    let object = {
      name: "",
      email: "",
      phone: "",
      gender: "SEL",
      member_id: "",
      codechef_id: ""
    };
    setFormFields([...formFields, object]);
  }

  const removefields = (index) => {
    setFormFields((data) => data.slice(index, 1));
  };


  const [formStep, setFormStep] = useState(1);

  const prevForm = (e) => {
    // e.preventDefault();
    setFormStep((currentStep) => currentStep - 1);
    setActiveStep(activeStep - 1);
  };

  const [memberCount, SetMemberCount] = useState(0);

  const submit = ()=>{

  }

  const nextForm = (e) => {
    e.preventDefault();
    if (formStep === 0) {
      // console.log("form0", form0);
      for (const property in form0) {
        if (property === "name" && form0[property].length < 10) {
          toast.warn("Please enter Your Complete Name.");
          return;
        } else if (property === "faculty_email" && form0[property] === "") {
          toast.warn("Please enter Email_id");
          return;
        } else if (property === "department" && form0[property] === "") {
          toast.warn("Please Select the department");
          return;
        } else if (property === "faculty_phone" && formFields.at(-1)[property].length !== 10) {
          toast.warn("Please enter a valid phone number");
          return;
        }
      }
      registerUserMutationForm0.mutate(form0, {
        onSuccess: () => {
          setErrors0(initialErrorsForm0);
          toast.success("Completed Step 1️⃣ !", { icon: "✅" });
          setFormStep((currentStep) => currentStep + 1);
          setActiveStep((activeStep) => activeStep + 1);
          return;
        },
      });
    }
    if (formStep === 1) {
      if (memberCount < 2) {
        toast.warn("At least two member needed!");
        return;
      }
      setFormStep((currentStep) => currentStep + 1);
      setActiveStep((activeStep) => activeStep + 1);
    }
  };


  return (
    <MainContainer>
      {true ? (
        <>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle
                  step={activeStep >= step ? "completed" : "incomplete"}
                >
                  {activeStep > step ? (
                    <CheckMark>L</CheckMark>
                  ) : (
                    <StepCount>{step}</StepCount>
                  )}
                </StepStyle>
                <StepsLabelContainer>
                  <StepLabel key={step}>{label}</StepLabel>
                </StepsLabelContainer>
              </StepWrapper>
            ))}
          </StepContainer>
          <div className=" md:mx-16 my-6">
            <form className="rounded-lg px-8 pt-6 pb-8 mb-4 border">
              {/* form 0 */}
              {formStep === 0 && (
                <>
                  <InputBox
                    type="text"
                    label={"Name Of The Faculty..."}
                    name={"faculty_name"}
                    placeholder={"Full Name"}
                    classNames=""
                    required
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.name}
                    error={errors0.name}
                    tip={"Complete Name of the Faculty"}
                  ></InputBox>
                  <InputBox
                    type="email"
                    label={"Faculty Email"}
                    name={"faculty_email"}
                    placeholder={"Email"}
                    classNames=""
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.guide_email}
                    error={errors0.guide_email}
                    tipstyle={"hidden"}
                  ></InputBox>
                  <Dropdown
                    label="Department of the Faculty"
                    options={[
                      { value: "SEL", label: "Select", selected: true },
                      ...departments,
                    ]}
                    name={"department"}
                    state={form0}
                    setState={setForm0}
                    required
                    error={errors0.domain}
                  />
                  <InputBox
                    type="text"
                    label={"Faculty Phone"}
                    name={"faculty_phone"}
                    placeholder={"Phone"}
                    classNames=""
                    onChange={(e) => handleInputChange0(e)}
                    value={form0.guide_phone}
                    error={errors0.guide_phone}
                    tipstyle={"hidden"}
                  ></InputBox>
                </>
              )}
              {/* form 1 */}
              {formStep === 1 && (
                <>
                  <NoteBox
                    title="Note"
                    text="After filling details of each Judge click the Add Judge-name button to add the details. And you can add more Judges by clicking on Add another Judge."
                  />

                  {formFields.map((form, index) => {
                    return (
                      <>
                        <h1 className="input-label font-medium text-white border-red-500 p-2 w-28 border-2 text-lg after:ml-0.5 after:text-gold rounded-md shadow-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-center my-2">
                          Judge {index + 1}
                        </h1>

                        <div key={index}>
                          <InputBox
                            label="Judge Name"
                            name="judge_name"
                            type="text"
                            placeholder="Judge Full name"
                            required
                            error={errors1.name}
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.name}
                            tip={
                              "Please Enter Complete Judge Name."
                            }
                          />
                          <InputBox
                            label="Email ID"
                            name="judge_email"
                            type="text"
                            placeholder="Judge Email "
                            required
                            error={errors1.email}
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.email}
                          />
                            <InputBox
                            label="Judge Location"
                            name="judge_location"
                            type="text"
                            placeholder="Judge Location"
                            required
                            error={errors1.email}
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.email}
                          />
                            <InputBox
                            label="Judge Company"
                            name="judge_company"
                            type="text"
                            placeholder="Company Name"
                            required
                            error={errors1.email}
                            onChange={(event) => handleFormChange(event, index)}
                            value={form.email}
                          />
                          <div className="md:flex">
                            <div className="mr-1 w-full md:w-1/2">
                              <InputBox
                                label="Phone No (If Possible)"
                                name="judge_phone"
                                type="tel"
                                placeholder="phone number"
                                required
                                error={errors1.phone}
                                onChange={(event) =>
                                  handleFormChange(event, index)
                                }
                                value={form.phone}
                              />
                            </div>
                            <div className="input-box-dropdown w-full mb-4 relative">
                              <label
                                className={`input-label font-medium mb-1 text-white text-lg flex`}
                              >
                                {"Mode Of evaluation"}
                                <h1 className="text-gold">*</h1>
                              </label>
                              <div className="relative inline-block w-full">
                                <select
                                  name={"gender"}
                                  value={form.gender}
                                  onChange={(event) =>
                                    handleFormChange(event, index)
                                  }
                                  required
                                  error={errors1.gender}
                                  className={`w-full h-10 pl-4 pr-8 bg-[#0B1E47] text-base text-gold placeholder-gray-500 border rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue`}
                                >
                                  {mode_evealution.map((option) => (
                                    <option
                                      key={option?.value}
                                      value={option?.value}
                                      className={`py-1 bg-[#0B1E47] ${
                                        option?.className || ""
                                      }`}
                                    >
                                      {option?.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          {memberCount < 6 ? (
                            <Buttons
                              value={
                                <>
                                  <span>
                                    {`add member- `}
                                    <span
                                      style={{
                                        color: "gold",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      {form.name.split(" ")[0]}
                                    </span>
                                  </span>
                                </>
                              }
                              onClick={addFields}
                              classNames="my-2"
                              loading={registerUserMutationForm1.isLoading}
                            />
                          ) : (
                            <></>
                          )}
                          <hr className="my-5 border-dashed border-gold" />
                        </div>
                      </>
                    );
                  })}
                </>
              )}
              {/* form 2 */}

              {formStep === 1 ? (
                  <div className=" text-right">
                  <Buttons
                    className="mx-2"
                    value=" Previous Step"
                    onClick={prevForm}
                  />
                  <Buttons
                    className=" mx-2 my-2  "
                    value="Submit"
                    onClick={nextForm}
                    loading={
                      registerUserMutationForm0.isLoading ||
                      registerUserMutationForm1.isLoading
                    }
                  />
                </div>
                )
               : (
                formStep === 0 ? 
                (
                  <Buttons
                    className=" mx-2 my-2  "
                    value="Next Step"
                    onClick={nextForm}
                    loading={
                      registerUserMutationForm0.isLoading ||
                      registerUserMutationForm1.isLoading 
                    }
                  />
                ) : <></>
              )}
              {formStep < 2 && (
                <div className="md:flex justify-between">
                  <div>
                    {formStep == 1 && formFields.length < 5 ? (
                      <>
                        <Buttons
                          className=" mx-2  "
                          value="add another member"
                          onClick={addAnotherMember}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div>
                  </div>
                </div>
              )} 
            </form>
            {<Buttons
                  value="submit"
                  onClick={submit}
                  classNames='mx-2 my-2'
              /> }
          </div>
        </>
      ) : (
        <div className="md:mx-16 my-20">
          <CloseMessage />
        </div>
      )}
    </MainContainer>
  );
}

export default Teacher_Judge;