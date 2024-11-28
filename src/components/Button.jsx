export default function Button({ children, onClick, isActive, ...props }) {
  let classes = "btn";
  if (isActive) {
    classes += " active";
  }

  return (
    <button {...props} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
