import React, { useEffect } from "react";
import Step1 from "./ui/Step1";
import Step2 from "./ui/Step2";
import Step3 from "./ui/Step3";
import Buttons from "./ui/Buttons";

export type FormData = {
  name: string;
  age_category: string;
  location: string;
  description?: string;
  start_date: string;
  end_date?: string;
};

type props = {
  stepsController: CallableFunction;
  currentStep: number;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
};

const TournamentForm = ({
  stepsController,
  currentStep,
  active,
  setActive,
  setSuccessful,
}: props) => {
  const [FormData, setFormData] = React.useState<FormData | null>({
    name: "",
    age_category: "",
    location: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  const handleForms = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...FormData!, [e.target.name]: e.target.value });
  };
  const steps = [
    <Step1 key={1} handleForms={handleForms} />,
    <Step2 key={2} handleForms={handleForms} />,
    <Step3 key={3} values={FormData!} />,
  ];

  useEffect(() => {
    const { name, age_category, location, start_date } = FormData!;
    if (name && age_category && location && currentStep == 1) {
      setActive(true);
    }
    if (start_date && currentStep == 2) {
      setActive(true);
    }
  }, [FormData, currentStep, setActive]);

  const submitForm = () => {
    console.log("Form submitted:", FormData);
    setSuccessful(true);
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden grid">
      {steps[currentStep - 1]}

      <Buttons
        submitForm={submitForm}
        active={active}
        currentStep={currentStep}
        stepsController={stepsController}
      />
    </div>
  );
};

export default TournamentForm;
