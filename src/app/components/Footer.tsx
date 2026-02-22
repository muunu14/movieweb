export const Footer = () => {
  return (
    <footer className="w-full bg-[#4338CA] text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10 justify-between">
        <div className="flex flex-col gap-3">
          <img src="/Logo (1).png" className="w-[92px]" />
          <p className="text-sm">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
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
