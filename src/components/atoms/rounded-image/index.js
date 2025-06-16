/* eslint-disable @next/next/no-img-element */
export const RoundedImage = ({ source }) => {
  return (
    <div className="about_image abt_none ">
      <img src={source} alt="about" className="about_image" />
    </div>
  );
};
