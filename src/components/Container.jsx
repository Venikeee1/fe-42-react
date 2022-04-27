export const Container = ({ children, className }) => {
  const classList = `container ${className}`;

  return <div className={classList}>{children}</div>;
};
