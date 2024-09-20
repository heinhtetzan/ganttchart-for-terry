import React from "react";
import {
  format,
  addDays,
  differenceInDays,
  startOfWeek,
  endOfWeek,
} from "date-fns";

type Task = {
  id: number;
  name: string;
  startDate: Date;
  duration: number;
};

const tasks: Task[] = [
  {
    id: 1,
    name: "Design Phase",
    startDate: new Date(2024, 0, 15),
    duration: 10,
  }, // Jan 15, 2024
  {
    id: 2,
    name: "Requirement Gathering",
    startDate: new Date(2024, 0, 25),
    duration: 7,
  }, // Jan 25, 2024
  { id: 3, name: "Prototyping", startDate: new Date(2024, 1, 1), duration: 5 }, // Feb 1, 2024
  {
    id: 4,
    name: "User Feedback Collection",
    startDate: new Date(2024, 1, 7),
    duration: 4,
  }, // Feb 7, 2024
  {
    id: 5,
    name: "System Architecture Design",
    startDate: new Date(2024, 1, 12),
    duration: 8,
  }, // Feb 12, 2024
  {
    id: 6,
    name: "Database Setup",
    startDate: new Date(2024, 1, 21),
    duration: 6,
  }, // Feb 21, 2024
  {
    id: 7,
    name: "Backend Development",
    startDate: new Date(2024, 1, 28),
    duration: 15,
  }, // Feb 28, 2024
  {
    id: 8,
    name: "Frontend Development",
    startDate: new Date(2024, 2, 10),
    duration: 12,
  }, // Mar 10, 2024
  {
    id: 9,
    name: "API Integration",
    startDate: new Date(2024, 2, 24),
    duration: 7,
  }, // Mar 24, 2024
  {
    id: 10,
    name: "Unit Testing",
    startDate: new Date(2024, 3, 1),
    duration: 10,
  }, // Apr 1, 2024
  { id: 11, name: "Bug Fixing", startDate: new Date(2024, 3, 12), duration: 7 }, // Apr 12, 2024
  {
    id: 12,
    name: "Performance Testing",
    startDate: new Date(2024, 3, 20),
    duration: 5,
  }, // Apr 20, 2024
  {
    id: 13,
    name: "UI/UX Improvements",
    startDate: new Date(2024, 3, 26),
    duration: 4,
  }, // Apr 26, 2024
  {
    id: 14,
    name: "Client Review",
    startDate: new Date(2024, 4, 1),
    duration: 6,
  }, // May 1, 2024
  {
    id: 15,
    name: "Security Review",
    startDate: new Date(2024, 4, 8),
    duration: 5,
  }, // May 8, 2024
  {
    id: 16,
    name: "Final Adjustments",
    startDate: new Date(2024, 4, 15),
    duration: 4,
  }, // May 15, 2024
  {
    id: 17,
    name: "Data Migration",
    startDate: new Date(2024, 4, 20),
    duration: 7,
  }, // May 20, 2024
  {
    id: 18,
    name: "System Deployment",
    startDate: new Date(2024, 4, 28),
    duration: 3,
  }, // May 28, 2024
  {
    id: 19,
    name: "Training and Handover",
    startDate: new Date(2024, 5, 1),
    duration: 5,
  }, // Jun 1, 2024
  {
    id: 20,
    name: "Project Closure",
    startDate: new Date(2024, 5, 10),
    duration: 2,
  }, // Jun 10, 2024

  // Additional 20 tasks
  {
    id: 21,
    name: "Post-Launch Support",
    startDate: new Date(2024, 5, 15),
    duration: 10,
  }, // Jun 15, 2024
  {
    id: 22,
    name: "System Monitoring",
    startDate: new Date(2024, 5, 26),
    duration: 7,
  }, // Jun 26, 2024
  {
    id: 23,
    name: "Bug Reporting",
    startDate: new Date(2024, 6, 5),
    duration: 3,
  }, // Jul 5, 2024
  {
    id: 24,
    name: "User Training",
    startDate: new Date(2024, 6, 9),
    duration: 5,
  }, // Jul 9, 2024
  {
    id: 25,
    name: "System Optimization",
    startDate: new Date(2024, 6, 15),
    duration: 6,
  }, // Jul 15, 2024
  {
    id: 26,
    name: "Backup Setup",
    startDate: new Date(2024, 6, 22),
    duration: 4,
  }, // Jul 22, 2024
  {
    id: 27,
    name: "Feature Development",
    startDate: new Date(2024, 6, 27),
    duration: 8,
  }, // Jul 27, 2024
  {
    id: 28,
    name: "Performance Review",
    startDate: new Date(2024, 7, 5),
    duration: 4,
  }, // Aug 5, 2024
  {
    id: 29,
    name: "API Documentation",
    startDate: new Date(2024, 7, 10),
    duration: 5,
  }, // Aug 10, 2024
  {
    id: 30,
    name: "System Auditing",
    startDate: new Date(2024, 7, 16),
    duration: 7,
  }, // Aug 16, 2024
  {
    id: 31,
    name: "Security Enhancements",
    startDate: new Date(2024, 7, 25),
    duration: 5,
  }, // Aug 25, 2024
  {
    id: 32,
    name: "Data Recovery Plan",
    startDate: new Date(2024, 7, 31),
    duration: 4,
  }, // Aug 31, 2024
  {
    id: 33,
    name: "Stakeholder Meeting",
    startDate: new Date(2024, 8, 5),
    duration: 2,
  }, // Sep 5, 2024
  {
    id: 34,
    name: "System Updates",
    startDate: new Date(2024, 8, 10),
    duration: 5,
  }, // Sep 10, 2024
  {
    id: 35,
    name: "Customer Support Training",
    startDate: new Date(2024, 8, 16),
    duration: 6,
  }, // Sep 16, 2024
  {
    id: 36,
    name: "Product Launch",
    startDate: new Date(2024, 8, 24),
    duration: 3,
  }, // Sep 24, 2024
  {
    id: 37,
    name: "Marketing Campaign",
    startDate: new Date(2024, 8, 28),
    duration: 10,
  }, // Sep 28, 2024
  {
    id: 38,
    name: "User Satisfaction Survey",
    startDate: new Date(2024, 9, 10),
    duration: 5,
  }, // Oct 10, 2024
  {
    id: 39,
    name: "System Decommissioning",
    startDate: new Date(2024, 9, 18),
    duration: 7,
  }, // Oct 18, 2024
  {
    id: 40,
    name: "Final Reporting",
    startDate: new Date(2024, 9, 27),
    duration: 3,
  }, // Oct 27, 2024
];

export default function Ganttchart() {
  const startDate = startOfWeek(
    new Date(Math.min(...tasks.map((task) => task.startDate.getTime())))
  );
  const endDate = endOfWeek(
    new Date(
      Math.max(
        ...tasks.map((task) => addDays(task.startDate, task.duration).getTime())
      )
    )
  );
  const totalDays = differenceInDays(endDate, startDate) + 1;

  const getTaskStyle = (task: Task) => {
    const left = `${
      (differenceInDays(task.startDate, startDate) / totalDays) * 100
    }%`;
    const width = `${(task.duration / totalDays) * 100}%`;
    return { left, width };
  };

  return (
    <div className="container mx-auto flex flex-col h-screen py-4">
      <h1 className="text-3xl font-bold border mb-4 p-3">Gantt Chart</h1>
      <div className="overflow-scroll border  flex-grow ">
        <div className="min-w-max relative">
          <div className="flex  sticky bg-white z-20 top-0">
            <div className="w-64"></div>
            {Array.from({ length: totalDays }).map((_, index) => {
              const date = addDays(startDate, index);
              return (
                <div
                  key={index}
                  className="flex-1 w-10 h-12 border text-xs flex flex-col items-center justify-center"
                >
                  <p>{format(date, "MMM")}</p>
                  <p>{format(date, "d")}</p>
                </div>
              );
            })}
          </div>
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center ">
              <div className=" w-64 pr-4 font-medium border truncate sticky z-10 left-0 p-2 bg-white">
                {task.name}
              </div>
              <div className="flex-1 relative h-6">
                <div
                  className="absolute h-full bg-black"
                  style={getTaskStyle(task)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
