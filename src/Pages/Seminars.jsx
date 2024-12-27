import { useGetSeminarsQuery } from "../redux/apiSlices/banenrSlice";
import { MdDateRange } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";

const SeminarPage = () => {
  const { data: seminarData, isLoading } = useGetSeminarsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const seminarsData = seminarData?.data || [];
  // console.log(seminarsData);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6">Seminars</h2>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        {seminarsData.map((seminar) => (
          <div
            key={seminar._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`${import.meta.env.VITE_BASE_URL}${seminar.banner}`}
              alt={seminar.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{seminar.title}</h3>
              <p>Free Seminar With {seminar.teacher.name}</p>
              <p className="text-gray-500 mb-3 line-clamp-1">
                {seminar.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                  <span>
                    <MdDateRange />
                  </span>{" "}
                  {seminar.date}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <IoTime />
                  </span>{" "}
                  {seminar.time}
                </p>
                <p className="flex items-center gap-2">
                  <span>
                    <GiDuration />
                  </span>{" "}
                  {seminar.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeminarPage;
