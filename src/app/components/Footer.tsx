// import React from "react";

// export const Footer = () => {
//   return (
//     <div className="w-full h-[280px] pt-10 pb-10 pr-20 pl-20 flex items-center  bg-[#4338CA] ">
//       <div className="w-full h-[200px] flex flex-row gap-30 justify-between">
//         <div className="w-[247px] h-[200px] flex flex-col gap-3 ">
//           <img className="w-[92px] h-[20px] " src="/Logo (1).png" alt="" />
//           <div className="w-[247px] h-[20px] font-normal text-[14px] text-[#FAFAFA]">
//             © 2024 Movie Z. All Rights Reserved.
//           </div>
//         </div>
//         <div className="w-[913px] h-[200px] flex flex-row gap-24 justify-end">
//           <div className="w-[174px] h-[200px] flex flex-col gap-3">
//             <div className="w-[174px] h-[20px] font-normal text-[14px] text-[#FAFAFA]">
//               Contact Information
//             </div>
//             <div className="w-[174px] h-[104px] flex flex-col gap-6">
//               <div className="w-[174px] h-[40px] flex flex-row gap-3 items-center">
//                 <img
//                   className="w-[13.33px] h-[10.67px]"
//                   src="/Wifi icon.png"
//                   alt=""
//                 />
//                 <div className="w-[146px] h-[40px] flex flex-col ">
//                   <p className=" h-[20px] font-medium text-[14px] text-[#FAFAFA]">
//                     Email:
//                   </p>
//                   <p className="h-[20px] font-normal text-[14px] text-[#FAFAFA] ">
//                     support@movieZ.com
//                   </p>
//                 </div>
//               </div>
//               <div className="w-[158px] h-[40px] flex flex-row gap-3 items-center ">
//                 <img
//                   className="w-[13.26px] h-[13.29px]"
//                   src="/Vector (2).png"
//                   alt=""
//                 />
//                 <div className="w-[130px] h-[40px] flex flex-col ">
//                   <p className=" h-[20px] font-medium text-[14px] text-[#FAFAFA]">
//                     Phone:
//                   </p>
//                   <p className="h-[20px] font-normal text-[14px] text-[#FAFAFA] ">
//                     +976 (11) 123-4567
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[274px] h-[52px] flex flex-col gap-3">
//             <div className="h-[20px] font-normal text-[14px] text-[#FAFAFA]">
//               Follow us
//             </div>
//             <div className="w-[274px] h-[20px] flex flex-row gap-3 font-medium text-[14px] text-[#FAFAFA]  ">
//               <p>Facebook</p>
//               <p>Instagram</p>
//               <p>Twitter</p>
//               <p>Youtube</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export const Footer = () => {
  return (
    <footer className="w-full bg-[#4338CA] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 justify-between">
        {/* Left */}
        <div className="flex flex-col gap-3">
          <img src="/Logo (1).png" className="w-[92px]" />
          <p className="text-sm">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4">
            <p className="font-medium">Contact Information</p>
            <div className="flex items-center gap-2 text-sm">
              <img src="/Wifi icon.png" className="w-4 h-3" />
              support@movieZ.com
            </div>
            <div className="flex items-center gap-2 text-sm">
              <img src="/Vector (2).png" className="w-4 h-4" />
              +976 (11) 123-4567
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium">Follow us</p>
            <div className="flex gap-4 text-sm">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
