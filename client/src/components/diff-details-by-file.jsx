/* eslint-disable react/prop-types */

import React from "react";
import Chevron from "../svg/chevron";

function DiffDetailsByFile({ diffDetails }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-1">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Chevron isOpen={open} />
        <span className="text-color-link text-sm font-semibold">
          {diffDetails.headFile.path}
        </span>
      </div>
      {open && (
        <div className="bg-white border p-2 rounded-md">
          {diffDetails.hunks.map((item) => {
            return (
              <div key={Math.random()}>
                <div className="text-color-muted text-sm p-2 mt-4 bg-slate-50 rounded-md">
                  {item.header}
                </div>
                <div className="table w-full text-sm">
                  {item.lines.map((change) => {
                    if (change.type == "normal") {
                      return (
                        <div
                          className="table-row border-spacing-2"
                          key={Math.random()}
                        >
                          <span className="diff-table-cell text-right">
                            {change.baseLineNumber}
                          </span>
                          <span className="diff-table-cell text-right bg-[#FDFBFF]">
                            {change.headLineNumber}
                          </span>
                          <span className="diff-table-cell text-right">
                            &nbsp;
                          </span>
                          <span className="text-color-code-primary table-cell px-4 whitespace-pre text-sm">
                            {change.content}
                          </span>
                        </div>
                      );
                    } else if (change.type == "delete") {
                      return (
                        <div
                          className="table-row border-spacing-2 bg-[#FFE4E9] "
                          key={Math.random()}
                        >
                          <span className="diff-table-cell text-right">
                            {change.baseLineNumber}
                          </span>
                          <span className="diff-table-cell text-right">
                            &nbsp;
                          </span>
                          <span className="diff-table-cell text-center">-</span>
                          <span className="text-color-code-primary table-cell px-4 text-sm whitespace-pre w-full">
                            {change.content}
                          </span>
                        </div>
                      );
                    } else if (change.type == "insert") {
                      return (
                        <div
                          className="table-row border-spacing-2 bg-[#D8FFCB]"
                          key={Math.random()}
                        >
                          <span className="diff-table-cell text-right">
                            &nbsp;
                          </span>
                          <span className="diff-table-cell text-right">
                            {change.headLineNumber}
                          </span>
                          <span className="diff-table-cell text-center">+</span>
                          <span
                            className="text-color-code-primary table-cell px-4 text-sm  whitespace-pre w-full">
                            {change.content}
                            </span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DiffDetailsByFile;
