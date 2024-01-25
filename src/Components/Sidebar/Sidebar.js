import React from "react";

import { Img, Line, Text } from "../../components";

const Sidebar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[5px] pr-[5px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex flex-row items-start justify-between mt-[5px] w-[93%] md:w-full">
              <Text className="font-outfit mt-[3px] text-[13px] text-gray-700">{props?.analysefinancia}</Text>
              <Img className="h-5 w-5" src="images/img_checkmark_blue_gray_700_01.svg" alt="checkmark" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Sidebar.defaultProps = { analysefinancia: "Assess Operating Income" };

export default Sidebar;
