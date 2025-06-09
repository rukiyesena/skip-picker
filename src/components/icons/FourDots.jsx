const FourDotsHorizontal = ({ size = 24, color = "currentColor" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="10" fill={color} />
        <circle cx="36" cy="12" r="10" fill={color} />
        <circle cx="64" cy="12" r="10" fill={color} />
        <circle cx="88" cy="12" r="10" fill={color} />
    </svg>
);

export default FourDotsHorizontal;
