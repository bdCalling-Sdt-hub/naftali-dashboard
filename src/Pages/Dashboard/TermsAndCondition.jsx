import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import Title from "../../components/common/Title";
import {
  useTermsAndConditionQuery,
  useUpdateTermsAndConditionsMutation,
} from "../../redux/apiSlices/termsAndConditionSlice";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

const TermsAndCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState("STUDENTS");
  const isLoading = false;

  useEffect(() => {
    setContent(content);
  }, [selectedTab]);

  // const {
  //   data: termsAndCondition,
  //   isLoading,
  //   refetch,
  // } = useTermsAndConditionQuery(selectedTab);

  // const [updateTermsAndConditions] = useUpdateTermsAndConditionsMutation();

  const termsAndCondition = [];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const termsAndConditionData = termsAndCondition?.content;

  const termsDataSave = async () => {
    const data = {
      content: content,
      userType: selectedTab,
    };

    try {
      const res = await updateTermsAndConditions(data).unwrap();
      if (res.success) {
        toast.success("Terms and Conditions updated successfully");
        setContent(res.data.content);
        refetch();
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      throw new Error("Something Is wrong at try");
    }
  };

  const tabContent = {
    Students: termsAndConditionData,
    Teachers: termsAndConditionData,
  };

  return (
    <div>
      <Title className="mb-4">Terms and Conditions</Title>

      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 rounded-2xl py-2 ${
            selectedTab === "STUDENTS" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("STUDENTS")}
        >
          Students
        </button>
        <button
          className={`px-4 rounded-2xl py-2 ${
            selectedTab === "TEACHERS" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("TEACHERS")}
        >
          Teachers
        </button>
      </div>

      <JoditEditor
        ref={editor}
        value={tabContent[selectedTab]}
        onChange={(newContent) => {
          setContent(newContent);
        }}
      />

      <div className="flex items-center justify-center mt-5">
        <button
          onClick={termsDataSave}
          type="submit"
          className="bg-primary text-white w-[160px] h-[42px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TermsAndCondition;
