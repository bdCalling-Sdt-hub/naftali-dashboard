import React, { useState } from "react";
import { Modal, Button, Table, Switch, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// Sample data for the existing sliders
const initialSliders = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFfpXFUGyr4cglfLsa_cr8DQoTfbfjmMMWA&s",
    isActive: true,
  },
  {
    id: 2,
    imageUrl:
      "https://www.codewithrandom.com/wp-content/uploads/2023/08/Copy-of-Copy-of-codewithrandom90.png",
    isActive: false,
  },
  {
    id: 3,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7YwuNzzifopHQUP5e8DqNlg30Og1NDvH_Q&s",
    isActive: true,
  },
];

const SuperAdminDashboard = () => {
  const [sliders, setSliders] = useState(initialSliders);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isViewerModalVisible, setIsViewerModalVisible] = useState(false);
  const [newSlider, setNewSlider] = useState({ imageUrl: "", isActive: true });
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle Add Slider Modal visibility
  const showAddModal = () => setIsAddModalVisible(true);
  const handleAddModalCancel = () => setIsAddModalVisible(false);

  // Handle Image Viewer Modal visibility
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsViewerModalVisible(true);
  };
  const handleViewerModalCancel = () => setIsViewerModalVisible(false);

  // Handle slider image upload
  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      setNewSlider((prev) => ({ ...prev, imageUrl: info.file.response.url }));
      message.success("Image uploaded successfully.");
    } else if (info.file.status === "error") {
      message.error("Image upload failed.");
    }
  };

  // Handle adding a new slider
  const handleAddSlider = () => {
    setLoading(true);
    const newId = sliders.length + 1;
    const addedSlider = { ...newSlider, id: newId };
    setSliders((prevSliders) => [...prevSliders, addedSlider]);
    setLoading(false);
    setIsAddModalVisible(false);
  };

  // Handle status toggle
  const handleStatusToggle = (id) => {
    setSliders((prevSliders) =>
      prevSliders.map((slider) =>
        slider.id === id ? { ...slider, isActive: !slider.isActive } : slider
      )
    );
  };

  // Handle delete
  const handleDelete = (id) => {
    setSliders((prevSliders) =>
      prevSliders.filter((slider) => slider.id !== id)
    );
  };

  // Columns for the table
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
    <div className="p-5 w-[60%]">
      <Button onClick={showAddModal} className="mb-4 bg-primary">
        Add Slider
      </Button>
      <Table
        columns={columns}
        dataSource={sliders}
        rowKey="id"
        pagination={false}
      />

      {/* Image Viewer Modal */}
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
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <p>Cannot find any images!</p>
        )}
      </Modal>

      {/* Add Slider Modal */}
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
            action="/upload" // Your API endpoint to upload images
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

export default SuperAdminDashboard;
