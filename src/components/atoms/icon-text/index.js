export const IconText = ({ icon, title, className}) => {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <div>{icon}</div>
      {title}
    </span>
  );
};
