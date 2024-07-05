/* eslint-disable react/prop-types */
export default function Chevron({isOpen}) {
  return (
    <svg
    
      style={{transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="currentColor"
      className="bi bi-chevron-right transform transition-transform duration-200"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
      />
    </svg>
  );
}
