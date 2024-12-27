import React, { useState } from "react";
import { Modal, Button, Table, message } from "antd";
import moment from "moment/moment";
import { IoMdAdd } from "react-icons/io";
import {
  useAddProfileBannerMutation,
  useDeleteProfileBannerMutation,
  useGetProfileBannerQuery,
} from "../../../redux/apiSlices/banenrSlice";
import whiteBg from "../../../assets/whiteBG.png";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import toast from "react-hot-toast";

const ProfileBanner = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [imageFile, setImageFile] = useState(null);
  const [imgURL, setImgURL] = useState();
  const [file, setFile] = useState(null);

  const { data: bannerData, isLoading } = useGetProfileBannerQuery();
  const [addProfileBanner] = useAddProfileBannerMutation();
  const [deleteProfileBanner] = useDeleteProfileBannerMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const showAddModal = () => setIsAddModalVisible(true);
  const handleAddModalCancel = () => {
    setIsAddModalVisible(false);
    setImageFile(null);
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsAddModalVisible(true);
  };

  const onChangeImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imgUrl = URL.createObjectURL(selectedFile);
      setImgURL(imgUrl);
      setFile(selectedFile);
    }
  };

  const handleAddSlider = async () => {
    const formData = new FormData();

    formData.append("type", "PROFILE");
    if (file) {
      formData.append("banner", file);
    } else {
      message.error("Please upload an image.");
      return;
    }

    try {
      const response = await addProfileBanner(formData).unwrap();
      if (response.success) {
        toast.success("Banner added successfully.");
        setIsAddModalVisible(false);
        setImgURL(null);
      }
    } catch (error) {
      message.error("Failed to add banner.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteProfileBanner(id).unwrap();
      if (response.success) {
        toast.success("Banner deleted successfully.");
      }
    } catch (error) {
      message.error("Failed to delete banner.");
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "URL",
      key: "URL",
      render: (text) => (
        <img
          src={`${import.meta.env.VITE_BASE_URL}${text}` || "No Image"}
          alt="slider"
          style={{ width: 100, height: 60, cursor: "pointer" }}
          className="object-cover"
          onClick={() => handleImageClick(text)}
        />
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
        <Button danger onClick={() => handleDelete(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="p-5 w-[80%]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Profile Banner</h1>
        <Button
          onClick={showAddModal}
          className="mb-4 py-5 text-white bg-primary"
        >
          <IoMdAdd size={20} /> Add Banner
        </Button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table
          columns={columns}
          dataSource={bannerData?.data || []}
          rowKey="_id"
          pagination={false}
        />
      )}

      <Modal
        title="Add New Banner"
        open={isAddModalVisible}
        onOk={handleAddSlider}
        onCancel={handleAddModalCancel}
        okButtonProps={{
          style: {
            backgroundColor: "#b58700",
            borderColor: "#b58700",
          },
        }}
      >
        <div className="flex flex-col items-center mb-4">
          <input
            onChange={onChangeImage}
            type="file"
            id="img"
            style={{ display: "none" }}
          />
          <label
            htmlFor="img"
            className="relative w-full h-80 cursor-pointer border border-gray-300 bg-white bg-cover bg-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            style={{
              backgroundImage: `url(${imgURL ? imgURL : whiteBg})`,
            }}
          >
            {!imgURL && (
              <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <MdOutlineAddPhotoAlternate
                  size={60}
                  className="text-gray-600"
                />
              </div>
            )}
          </label>
          <p className="mt-2 text-sm text-gray-500">Click to upload image</p>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileBanner;
