import styles from "./Drafts.module.css";

function Drafts(props) {
  const tableContent = [
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",
      t_n: "Tutors Name",
    },
  ];
  return (
    <div className={styles.Drafts}>
      <div className={styles.heading}>
        <div>
          <h2>Quizzes</h2>
          <p>All Tutor's Quizzes</p>
        </div>
        <div>
          <button style={{ backgroundImage: `url(filtericon.png)` }}>
            Filters
          </button>
        </div>
      </div>

      <table>
        <tr className={styles.thead}>
          <div>
            <th>Quiz Title</th>
            <th>Class/Grade</th>
            <th>Subject</th>
            <th>Actions</th>
          </div>
        </tr>
        {tableContent.map((c) => {
          return (
            <tr key={""} className={styles.tbody}>
              <td>{c.qt}</td>
              <td>{c.c_g}</td>
              <td>{c.c}</td>
              <td>
                <button>
                  <img alt="" src="./actionEye.png" />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Drafts;
