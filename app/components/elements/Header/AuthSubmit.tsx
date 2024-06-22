import React from "react";

type Props = {
  formId: string;
  loading: boolean;
  text: string;
  textWhenLoading: string;
};

const AuthSubmit = ({ formId, loading, text, textWhenLoading }: Props) => {
  return (
    <button
      form={formId}
      className="col-start-1 col-end-3 py-2 px-4 bg-[#d9d9d9] rounded-md text-2xl text-[#080808] font-semibold"
    >
      {loading ? textWhenLoading : text}
    </button>
  );
};

export default AuthSubmit;
