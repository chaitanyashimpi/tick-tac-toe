import React from "react";

const Picker = () => {
	return (
		<div className="picker flex flex-col">
			<h1>PICK PLAYER </h1>
			<div className="choice flex">
				<div className="choiceLogo flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 23 23"
                        fill="none"
                    >
                        <path
                            d="M19.4375 4L4 19.4375M4 4L19.4375 19.4375"
                            stroke="#D9D9D9"
                            strokeWidth="7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
				<div className="choiceLogo flex">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.97449 18.0255C9.30734 19.3584 11.1151 20.1071 13 20.1071C14.8849 20.1071 16.6927 19.3584 18.0255 18.0255C19.3584 16.6927 20.1071 14.8849 20.1071 13C20.1071 11.1151 19.3584 9.30734 18.0255 7.97449C16.6927 6.64164 14.8849 5.89286 13 5.89286C11.1151 5.89286 9.30734 6.64164 7.97449 7.97449C6.64164 9.30734 5.89286 11.1151 5.89286 13C5.89286 14.8849 6.64164 16.6927 7.97449 18.0255ZM21.3085 4.6915C23.5121 6.89505 24.75 9.88371 24.75 13C24.75 16.1163 23.5121 19.105 21.3085 21.3085C19.1049 23.5121 16.1163 24.75 13 24.75C9.88371 24.75 6.89505 23.5121 4.69149 21.3085C2.48794 19.105 1.25 16.1163 1.25 13C1.25 9.88371 2.48794 6.89505 4.69149 4.6915C6.89505 2.48794 9.88371 1.25 13 1.25C16.1163 1.25 19.1049 2.48794 21.3085 4.6915Z"
                            fill="#fff"
                            stroke="#fff"
                            strokeWidth="1.5"
                        />
                    </svg>
                </div>
			</div>
		</div>
	);
};

export default Picker;
