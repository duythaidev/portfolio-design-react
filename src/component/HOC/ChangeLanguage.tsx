import React from "react";

interface Language {
  EN: any;
  VI: any;
}

interface ChangeLanguageProps<P = {}> extends P {
  lang: any;
  func: (lang: string) => void;
}

const ChangeLanguage = <P extends object>(
  WrappedComponent: React.ComponentType<ChangeLanguageProps<P>>,
  language: Language
) => {
  let translation = language.EN;

  const handleChangeLanguage = (lang: string) => {
    translation = lang === "EN" ? language.EN : language.VI;
    console.log("LANGUAGE>>> \n", translation);
  };

  return (props: P) => {
    return (
      <WrappedComponent
        {...props}
        lang={translation}
        func={handleChangeLanguage}
      ></WrappedComponent>
    );
  };
};

export default ChangeLanguage;
