// Updated Faq.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Modal, Input, Button } from "antd";
import {
  useAddFaqMutation,
  useDeleteFaqMutation,
  useGetFaqsQuery,
} from "../../../redux/apiSlices/faqSlice";
import toast from "react-hot-toast";

const Faq = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { data: faqs, isLoading } = useGetFaqsQuery();
  const [addFaq] = useAddFaqMutation();
  const [deleteFaq] = useDeleteFaqMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const faqData = faqs?.data || [];

  const handleAddOrUpdateFaq = async () => {
    if (question && answer) {
      try {
        if (modalData) {
          // Update FAQ logic here
          console.log("Update FAQ:", { question, answer });
        } else {
          await addFaq({ question, answer }).unwrap();
        }
        toast.success("FAQ added successfully!");
        setOpenAddModel(false);
        setModalData(null);
        setQuestion("");
        setAnswer("");
      } catch (error) {
        console.error("Error adding FAQ:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteFaq(id).unwrap();
      toast.success("FAQ deleted successfully!");
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      toast.error("Failed to delete FAQ.");
    }
  };

  return (
    <div className="">
      <div className="mb-4 my-10 flex justify-between items-center w-full">
        <h1 className="text-2xl font-semibold">Frequently Asked Questions</h1>
        <button
          onClick={() => {
            setOpenAddModel(true);
            setModalData(null);
            setQuestion("");
            setAnswer("");
          }}
          className="flex items-center gap-1 px-4 py-2 text-white bg-primary rounded hover:bg-secondary hover:text-black transition-colors"
        >
          <FaPlus />
          Add FAQ
        </button>
      </div>

      <div className="pb-6 px-4 rounded-md">
        {faqData?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-start gap-4 py-4 px-4 rounded-lg bg-white mb-3"
          >
            <GoQuestion color="#8b0000" size={25} className="mt-3" />
            <div className="flex-1">
              <p className="text-base font-medium rounded-xl py-2 px-4 flex items-center gap-8">
                <span className="flex-1">{item?.question}</span>
              </p>
              <div className="rounded-xl py-2 px-4 mt-4">
                <p className="text-[#919191] leading-6">{item?.answer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <CiEdit
                onClick={() => {
                  setOpenAddModel(true);
                  setModalData(item);
                  setQuestion(item.question);
                  setAnswer(item.answer);
                }}
                className="text-2xl cursor-pointer text-[#00809E]"
              />
              <RxCross2
                onClick={() => handleDelete(item?._id)}
                className="text-2xl cursor-pointer text-red-600"
              />
            </div>
          </div>
        ))}
      </div>

      <Modal
        title={modalData ? "Edit FAQ" : "Add FAQ"}
        open={openAddModel}
        onCancel={() => setOpenAddModel(false)}
        footer={null}
      >
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Input.TextArea
            rows={4}
            placeholder="Enter answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <div className="flex justify-end gap-2">
            <Button onClick={() => setOpenAddModel(false)}>Cancel</Button>
            <Button type="primary" onClick={handleAddOrUpdateFaq}>
              {modalData ? "Update" : "Add"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Faq;
