import React, { useState } from "react";
import { Modal, Button, Table, Switch, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment/moment";
import banner1 from "../../../assets/Rectangle 5322.png";
import banner2 from "../../../assets/Rectangle 5323.png";
import banner3 from "../../../assets/Rectangle 5325.png";
import banner4 from "../../../assets/Rectangle 5326.png";

const initialSliders = [
  {
    id: 1,
    imageUrl: banner1,

    isActive: true,
    createdAt: "2024-12-25 12:00:00",
  },
  {
    id: 2,
    imageUrl: banner2,
    isActive: false,
    createdAt: "2024-12-24 15:30:00",
  },
  {
    id: 3,
    imageUrl: banner3,
    isActive: true,
    createdAt: "2024-12-23 10:45:00",
  },
  {
    id: 4,
    imageUrl: banner4,
    isActive: true,
    createdAt: "2024-12-23 09:45:00",
  },
];

const ProfileBanner = () => {
  const [sliders, setSliders] = useState(initialSliders);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isViewerModalVisible, setIsViewerModalVisible] = useState(false);
  const [newSlider, setNewSlider] = useState({
    imageUrl: "",
    isActive: true,
    createdAt: "",
  });
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const showAddModal = () => setIsAddModalVisible(true);
  const handleAddModalCancel = () => setIsAddModalVisible(false);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsViewerModalVisible(true);
  };
  const handleViewerModalCancel = () => setIsViewerModalVisible(false);

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      setNewSlider((prev) => ({ ...prev, imageUrl: info.file.response.url }));
      message.success("Image uploaded successfully.");
    } else if (info.file.status === "error") {
      message.error("Image upload failed.");
    }
  };

  const handleAddSlider = () => {
    setLoading(true);
    const newId = sliders.length + 1;
    const addedSlider = {
      ...newSlider,
      id: newId,
      createdAt: new Date().toLocaleString("en-US"),
    };
    setSliders((prevSliders) => [...prevSliders, addedSlider]);
    setLoading(false);
    setIsAddModalVisible(false);
  };

  const handleStatusToggle = (id) => {
    setSliders((prevSliders) =>
      prevSliders.map((slider) =>
        slider.id === id ? { ...slider, isActive: !slider.isActive } : slider
      )
    );
  };

  const handleDelete = (id) => {
    setSliders((prevSliders) =>
      prevSliders.filter((slider) => slider.id !== id)
    );
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text) => (
        <img
          src={text}
          alt="slider"
          style={{ width: 100, height: 60, cursor: "pointer" }}
          onClick={() => handleImageClick(text)}
        />
      ),
    },
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (text, record) => (
        <Switch checked={text} onChange={() => handleStatusToggle(record.id)} />
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (record) => {
        return <p>{moment(record).format("LLL")}</p>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="p-5 w-[80%]">
      <Button onClick={showAddModal} className="mb-4 text-white bg-primary">
        Add Slider
      </Button>
      <Table
        columns={columns}
        dataSource={sliders}
        rowKey="id"
        pagination={false}
      />

      <Modal
        open={isViewerModalVisible}
        onCancel={handleViewerModalCancel}
        footer={null}
        width="80%"
        destroyOnClose
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{ width: "100%", height: "700px" }}
          />
        ) : (
          <p>Cannot find any images!</p>
        )}
      </Modal>

      <Modal
        title="Add New Slider"
        visible={isAddModalVisible}
        onOk={handleAddSlider}
        onCancel={handleAddModalCancel}
        confirmLoading={loading}
      >
        <div>
          <Upload
            name="sliderImage"
            action="/upload"
            showUploadList={false}
            onChange={handleImageUpload}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </div>
        <div className="mt-4">
          <label className="block">Status:</label>
          <Switch
            checked={newSlider.isActive}
            onChange={(checked) =>
              setNewSlider((prev) => ({ ...prev, isActive: checked }))
            }
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProfileBanner;
