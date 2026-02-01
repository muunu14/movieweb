import React from "react";

export const SectionWrapper = ({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        {action}
      </div>

      {/* 🔥 GRID layout */}
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
        "
      >
        {children}
      </div>
    </section>
  );
};
