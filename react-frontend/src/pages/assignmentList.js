import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment-timezone";

import { Title, Buttons, Assignments, Loading } from "../components";

export function AssignmentList() {
  const [courses, setCourses] = useState([]);
  const [allAssignments, setAllAssignments] = useState([]);
  const [filteredAssignments, setFilteredAssignments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const colours = [
    "#828C51",
    "#858796",
    "#282C34",
    "#69140E",
    "#193C46",
    "#A1867F",
  ];
  // start pulling courses when components loads
  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    setFilteredAssignments(
      allAssignments.sort((a, b) => a.difference - b.difference)
    );
  }, [allAssignments]);

  const getCourses = async () => {
    const res = await fetch("http://0.0.0.0:5000/courses", {
      method: "GET",
    });

    var parsed = parseCourses(await res.json());
    getCourseAssignments(parsed);
  };

  // pull assignments for each course
  const getCourseAssignments = async (parsedCourses) => {
    setIsLoading(true);
    var assignmentList = [];
    for (var i = parsedCourses.length - 1; i >= 0; i--) {
      let responseData = await fetch(
        `http://0.0.0.0:5000/course/assignments/${parsedCourses[i].id}`
      );
      let responseJson = await responseData.json();

      if (responseJson.length === 0) {
        parsedCourses.splice(i, 1);
        continue;
      }

      // select unique colour from list
      if (parsedCourses.length >= colours.length) {
        var colour = colours[Math.floor(Math.random() * colours.length)];
      } else {
        colour = colours[i];
      }
      parsedCourses[i].colour = colour;

      var now = moment().tz("America/Toronto");
      now.tz("Etc/Greenwich");

      for (var j = 0; j < responseJson.length; j++) {
        if (responseJson[j].due_at === null) {
          continue;
        }
        var future = moment.tz(responseJson[j].due_at, "Etc/Greenwich");

        assignmentList.push({
          name: responseJson[j].name,
          course: parsedCourses[i].name,
          difference: future.diff(now, "days"),
          countdown: future.from(now),
          time: future.calendar(),
          colour: colour,
        });
      }
    }
    setAllAssignments(assignmentList);
    setCourses(parsedCourses);
    setIsLoading(false);
  };

  const parseCourses = function (courseArray) {
    var parsedCourses = [];

    for (var i = 0; i < courseArray.length; i++) {
      if (courseArray[i].access_restricted_by_date === true) {
        continue;
      }

      parsedCourses.push({
        name: courseArray[i].name,
        isSelected: true,
        id: courseArray[i].id,
      });
    }

    return parsedCourses;
  };

  const updateList = () => {
    var filteredAssignments = [];
    for (var i = 0; i < courses.length; i++) {
      if (courses[i].isSelected === true) {
        filteredAssignments.push(
          ...allAssignments.filter((assign) => {
            return assign.course === courses[i].name;
          })
        );
      }
    }
    setFilteredAssignments(
      filteredAssignments.sort((a, b) => a.difference - b.difference)
    );
  };

  const handleSelect = (e) => {
    var temp = courses;
    temp[Number(e.target.id)].isSelected = !temp[Number(e.target.id)]
      .isSelected;
    setCourses(temp);
    updateList();
  };

  return (
    <>
      <Title
        title="Assignment Countdown"
        subtitle="Tracking all future assignments"
      ></Title>
      <Buttons classes={courses} handleSelect={handleSelect} />
      {isLoading ? (
        <Loading>
          <Loading.Heading heading="Pulling content from the Canvas API..." />
        </Loading>
      ) : null}
      <Assignments assignments={filteredAssignments} />
    </>
  );
}
