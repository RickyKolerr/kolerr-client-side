import { useEffect, useState } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";
import { useLanguage } from "@/contexts/LanguageContext";

export const GuidedTour = () => {
  const [run, setRun] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setRun(true);
    }
  }, []);

  const steps: Step[] = [
    {
      target: ".hero-section",
      content: t("tour.hero"),
      placement: "center",
      disableBeacon: true,
    },
    {
      target: ".search-section",
      content: t("tour.search"),
      placement: "bottom",
    },
    {
      target: ".features-section",
      content: t("tour.features"),
      placement: "top",
    },
    {
      target: ".cta-section",
      content: t("tour.cta"),
      placement: "top",
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setRun(false);
      localStorage.setItem("hasSeenTour", "true");
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showProgress
      showSkipButton
      callback={handleJoyrideCallback}
      styles={{
        options: {
          primaryColor: "#646cff",
          zIndex: 1000,
        },
      }}
      locale={{
        back: t("tour.back"),
        close: t("tour.close"),
        last: t("tour.finish"),
        next: t("tour.next"),
        skip: t("tour.skip"),
      }}
    />
  );
};