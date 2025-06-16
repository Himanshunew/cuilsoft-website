/* eslint-disable @next/next/no-img-element */
const CourseBox = ({ source, title, background }) => {
  return (
    <div className="text-center mb-5">
      <div
        style={{
          backgroundColor: background,
          boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
        }}
        className={`rounded-full p-7 w-40 mx-auto h-36 flex items-center justify-center ${
          background ? `` : "bg-[#ffe4cc]"
        }`}
      >
        <img className="mx-auto" src={source} alt="Training" />
      </div>
      <h4 className="font-semibold text-xl mt-6 uppercase">{title}</h4>
    </div>
  );
};

export default CourseBox;
