import express from "express";

const app = express();
const port = 3000;
const jsonBodyMiddleware = express.json();

app.use(jsonBodyMiddleware);

const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
};


const db = {
  courses: [
    { id: 1, title: "course1" },
    { id: 2, title: "course2" },
    { id: 3, title: "course3" },
    { id: 4, title: "course4" },
    { id: 5, title: "course5" },
  ],
};

app.get("/courses", (req, res) => {
  const foundCourses = db.courses.filter(
    (c) => c.title.indexOf(req.query.title as string) > -1
  );

  res.json(foundCourses);
});

app.get("/courses/:id", (req, res) => {
  const foundCourse = db.courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!foundCourse) res.status(404).send("Course not found");
  res.json(foundCourse);
});

app.post("/courses", (req, res) => {
  if (!req.body.title) res.status(400).send("Title is required");

  const createdCourse = {
    id: db.courses.length + 1,
    title: req.body.title,
  };

  db.courses.push(createdCourse);

  res.json(createdCourse);
});

app.delete("/courses/:id", (req, res) => {
  db.courses = db.courses.filter(
    (course) => course.id !== parseInt(req.params.id)
  );

  res.sendStatus(204);
});

app.put("/courses/:id", (req, res) => {
  const foundCourse = db.courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!foundCourse) return res.status(404).send("Course not found");

  if (!req.body.title) return res.status(400).send("Title is required");

  foundCourse.title = req.body.title;

  return res.json(foundCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
