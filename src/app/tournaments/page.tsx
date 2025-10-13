"use client";
import Wrapper from "./ui/Wrapper";
import TournamentForm from "./TournamentForm";
import React, { useEffect, useState } from "react";
import Successful from "./ui/Sucesfull";
import { useRouter } from "next/navigation";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [active, setActive] = React.useState(false);
  const [successful, setSuccessful] = React.useState(false);
  // const [error, setError] = React.useState(false);
  const router = useRouter();

  function stepsController(n: number) {
    setCurrentStep((pre) => pre + n);
    setActive(false);

    if (currentStep == 2) {
      setActive(true);
    }
  }

  useEffect(() => {
    if (successful) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [router, successful]);

  if (successful) {
    return <Successful />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 relative overflow-hidden ">
      <Wrapper currentStep={currentStep} />
      <TournamentForm
        setSuccessful={setSuccessful}
        stepsController={stepsController}
        currentStep={currentStep}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default Page;
