import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";

const FaqModal = ({
  setModalData,
  modalData,
  openAddModel,
  setOpenAddModel,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalData) {
      form.setFieldsValue({
        question: modalData?.question,
        answer: modalData?.answer,
      });
    }
  }, [modalData]);

  const onFinish = (values) => {
    console.log(values);
  };
  return <div></div>;
};

export default FaqModal;
