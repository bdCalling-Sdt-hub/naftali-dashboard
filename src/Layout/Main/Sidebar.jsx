import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import {
  MdAdminPanelSettings,
  MdCancelPresentation,
  MdCategory,
  MdFeaturedPlayList,
  MdManageAccounts,
  MdMiscellaneousServices,
  MdOutlineVideoLibrary,
  MdOutlineVideoSettings,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiFolderVideoFill, RiFolderVideoLine } from "react-icons/ri";
import { TbSettingsCog, TbSettingsStar, TbUserScreen } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsMicrosoftTeams } from "react-icons/bs";
import { PiUserPlus } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiSolidCategoryAlt } from "react-icons/bi";
import {
  FaClipboardUser,
  FaMoneyBillTransfer,
  FaScissors,
} from "react-icons/fa6";
import { FaBorderStyle } from "react-icons/fa";
import { TfiLayoutSlider } from "react-icons/tfi";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    Cookies.remove("refreshToken");
    navigate("/auth/login");
  };

  const menuItems = [
    {
      key: "/",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/" className="">
          Dashboard
        </Link>
      ),
    },

    {
      key: "/students",
      icon: <TbUserScreen size={24} />,
      label: <Link to="/students">Students</Link>,
    },
    {
      key: "Teachers",
      icon: <PiUserPlus size={24} />,
      label: "Teachers",
      children: [
        {
          key: "/teachers",
          icon: <PiUserPlus size={24} />,
          label: (
            <Link to="/teachers" className="text-white hover:text-white">
              Teachers
            </Link>
          ),
        },
        {
          key: "/freelancers",
          icon: <PiUserPlus size={24} />,
          label: (
            <Link to="/freelancers" className="text-white hover:text-white">
              Freelancers
            </Link>
          ),
        },
      ],
    },
    {
      key: "BannerMenu",
      icon: <MdFeaturedPlayList size={24} />,
      label: "Banners",
      children: [
        {
          key: "/banners",
          icon: <MdFeaturedPlayList size={24} />,
          label: (
            <Link to="/banners" className="text-white hover:text-white">
              Home Banners
            </Link>
          ),
        },
        {
          key: "/sliders",
          icon: <TfiLayoutSlider size={24} />,
          label: (
            <Link to="/sliders" className="text-white hover:text-white">
              Home Sliders
            </Link>
          ),
        },
        {
          key: "/profileBanner",
          icon: <FaClipboardUser size={24} />,
          label: (
            <Link to="/profileBanner" className="text-white hover:text-white">
              Profile Banner
            </Link>
          ),
        },
      ],
    },
    {
      key: "CoursesMenu",
      icon: <MdOutlineVideoLibrary size={24} />,
      label: "Courses",
      children: [
        {
          key: "/offline-courses",
          icon: <RiFolderVideoFill size={24} />,
          label: (
            <Link to="/offline-courses" className="text-white hover:text-white">
              Offline Courses
            </Link>
          ),
        },
        {
          key: "/freelancer-courses",
          icon: <RiFolderVideoLine size={24} />,
          label: (
            <Link
              to="/freelancer-courses"
              className="text-white hover:text-white"
            >
              Freelancer Courses
            </Link>
          ),
        },
        {
          key: "/manage-courses",
          icon: <MdOutlineVideoSettings size={24} />,
          label: (
            <Link to="/manage-courses" className="text-white hover:text-white">
              Manage Courses
            </Link>
          ),
        },
      ],
    },
    {
      key: "MyTeam",
      icon: <BsMicrosoftTeams size={24} />,
      label: "My Team",
      children: [
        {
          key: "/manage-admin",
          icon: <MdAdminPanelSettings size={24} />,
          label: (
            <Link to="/manage-admin" className="text-white hover:text-white">
              Admin
            </Link>
          ),
        },
        {
          key: "/manage-teachers",
          icon: <MdManageAccounts size={24} />,
          label: (
            <Link to="/manage-teachers" className="text-white hover:text-white">
              Teachers
            </Link>
          ),
        },
      ],
    },
    {
      key: "/seminars",
      icon: <FaBorderStyle size={24} />,
      label: <Link to="/seminars">Seminars</Link>,
    },

    {
      key: "/our-transactions",
      icon: <FaMoneyBillTransfer size={24} />,
      label: <Link to="/our-transactions">Transactions</Link>,
    },

    {
      key: "subMenuSetting",
      icon: <IoSettingsOutline size={24} />,
      label: "Settings",
      children: [
        {
          key: "/personal-information",
          label: (
            <Link
              to="/personal-information"
              className="text-white hover:text-white"
            >
              Personal Information
            </Link>
          ),
        },
        {
          key: "/change-password",
          label: (
            <Link to="/change-password" className="text-white hover:text-white">
              Change Password
            </Link>
          ),
        },

        {
          key: "/about-us",
          label: (
            <Link to="/about-us" className="text-white hover:text-white">
              About Us
            </Link>
          ),
        },
        {
          key: "/terms-and-condition",
          label: (
            <Link
              to="/terms-and-condition"
              className="text-white hover:text-white"
            >
              Terms And Condition
            </Link>
          ),
        },
        {
          key: "/privacy-policy",
          label: (
            <Link to="/privacy-policy" className="text-white hover:text-white">
              Privacy Policy
            </Link>
          ),
        },
        {
          key: "/f-a-q",
          label: (
            <Link to="/f-a-q" className="text-white hover:text-white">
              FAQ
            </Link>
          ),
        },
      ],
    },
    {
      key: "/logout",
      icon: <IoIosLogOut size={24} />,
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  useEffect(() => {
    const selectedItem = menuItems.find(
      (item) =>
        item.key === path || item.children?.some((sub) => sub.key === path)
    );

    if (selectedItem) {
      setSelectedKey(path);

      if (selectedItem.children) {
        setOpenKeys([selectedItem.key]);
      } else {
        const parentItem = menuItems.find((item) =>
          item.children?.some((sub) => sub.key === path)
        );
        if (parentItem) {
          setOpenKeys([parentItem.key]);
        }
      }
    }
  }, [path]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div className="mt-5 overflow-y-scroll">
      <div className="px-10">
        <Link
          to={"/"}
          className="mb-10 flex items-center flex-col gap-2 justify-center py-4"
        >
          <img src={logo} alt="" />
        </Link>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{ borderRightColor: "transparent", background: "transparent" }}
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;
