import React from "react";

const Myteam = () => {
  return (
    <div>
      <section className="w-[100%]">
        <div className="flex flex-col items-center justify-center py-5">
          <h1 className="headings ">
            We are the people who designed this initittle UI
          </h1>
          <p className="text-[#130741] text-2xl font-bold">
            We are Formidable force
          </p>
        </div>

        <div className="flex items-center space-x-2 space-y-2 w-[100%]">
          <div className="w-[33%] flex flex-col items-center">
            <img className="w-[90%] " src="Victo.jpg" alt="" />
            <h1 className="text-[#130741] text-lg font-bold">
              EKEATOR VICTOR UZOMA
            </h1>
            <h1 className="text-[#130741] text-md font-bold ">
              UI/UX DESIGNER
            </h1>
          </div>
          <div className="w-[33%] flex flex-col items-center">
            <img className="w-[90%] " src="Oge.jpg" alt="" />
            <h1 className="text-[#130741] text-lg font-bold">MISS OGECHUKWU</h1>
            <h1 className="text-[#130741] text-md font-bold ">UI WRITER </h1>
          </div>
          <div className="w-[33%] flex flex-col items-center">
            <img className="w-[90%] h-[570px] " src="Mma.jpg" alt="" />
            <h1 className="text-[#130741] text-lg font-bold">MRS. MMACHUKWU</h1>
            <h1 className="text-[#130741] text-md font-bold ">UX RESERCHER</h1>
          </div>
        </div>

        <div className="headings flex justify-center py-5">
          <h1>Javascript Developers</h1>
        </div>

        <div className="flex items-center space-x-20 space-y-2 w-[100%]">
          <div className="w-[33%] flex flex-col items-center">
            <img className="" src="Mimi.jpg" alt="" />
            <h1 className="text-[#130741] text-lg font-bold">
              MMUOCHUKWUKA MIRACLE
            </h1>
            <h1 className="text-[#130741] text-md font-bold ">WEB DEVELOPER</h1>
          </div>
          <div className="w-[33%] flex flex-col items-center">
            <img className="" src="Benz.jpg" alt="" />
            <h1 className="text-[#130741] text-lg font-bold">emeka john</h1>
            <h1 className="text-[#130741] text-md font-bold ">emeka john</h1>
          </div>
          <div className="w-[33%] flex flex-col items-center">
            <img className="" src="Benz.jpg" alt="" />
            <h1 className="text-[#130741] text-lg font-bold">emeka john</h1>
            <h1 className="text-[#130741] text-md font-bold ">emeka john</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Myteam;
