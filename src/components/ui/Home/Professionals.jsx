import randomImg from "../../../assets/randomProfile2.jpg";
import logo from "../../../assets/logo.png";

// Dummy data for Professionals Component

const Professionals = ({ data }) => {
  const totalCoursesSold =
    Array.isArray(data) &&
    data?.reduce((total, teacher) => total + teacher?.enrollmentCount, 0);
  const teachersWithPercentages = data?.map((teacher) => ({
    ...teacher,
    soldPercentage: (
      (teacher?.enrollmentCount / totalCoursesSold) *
      100
    ).toFixed(2),
  }));

  return (
    <div className="md:w-[60%] border h-[290px] bg-white rounded-2xl pb-5 md:flex flex-col justify-center">
      <p className="text-base font-semibold px-10 py-4">Top Teachers</p>
      <div className="md:flex flex-col px-10 gap-4">
        {teachersWithPercentages?.map((value, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              className="w-7 h-7 rounded-full"
              src={
                `${import.meta.env.VITE_BASE_URL}${value?._id?.profile}` ||
                randomImg
              }
              alt={value?._id?.name}
            />

            <h1 className="text-sm font-medium w-32 truncate">
              {value?._id?.name}
            </h1>

            <div className="flex items-center flex-1">
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${value?.soldPercentage}%` }}
                ></div>
              </div>
            </div>

            <p className="text-sm font-medium">{value?.soldPercentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
