import React, { useEffect } from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard15.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import "react-calendar/dist/Calendar.css";
import {
  MdVideocam,
  MdEventNote,
  MdSend,
  MdDoneAll,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import $ from "jquery";

const Dashboard1 = () => {
  useEffect(() => {
    function myFunction(x) {
      if (x.matches) {
        $(".showListings").click(() => {
          $(".usersListTog").css({ display: "block" });
          $(".messagesContentBoxTog").css({ display: "none" });
        });
        $(".showMessageDetails").click(() => {
          $(".usersListTog").css({ display: "none" });
          $(".messagesContentBoxTog").css({ display: "block" });
        });
      } else {
      }
    }

    var x = window.matchMedia("(max-width: 650px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
  }, []);

  return (
    <div className={st.dashboard}>
      <div className={st.dashboardLeft}>
        <DashboardMenu />
      </div>
      <div className={st.dashboardRight}>
        <div className={stt.dashboardRightContentChatBox}>
          <DashboardHeader text="Course Completed" />
          <div className={st.dParent}>
            <div className={stt.chatBox}>
              <div className={stt.usersList + " " + "usersListTog"}>
                <div className={stt.userBox + " " + "showMessageDetails"}>
                  <span>
                    <img src="./pic1.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Saim Abbas</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic2.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Aiza Abbas</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic3.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Izza Abbas</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic4.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Fadi Abbas</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic4.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Fadi Abbas</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic5.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Rubab Hashmi</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic5.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Rubab Hashmi</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic5.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Rubab Hashmi</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic5.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Rubab Hashmi</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic5.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Rubab Hashmi</h2>
                </div>
                <div className={stt.userBox}>
                  <span>
                    <img src="./pic5.jpg" alt="" />
                    <div></div>
                  </span>
                  <h2>Rubab Hashmi</h2>
                </div>
              </div>
              <div
                className={
                  stt.messagesContentBox + " " + "messagesContentBoxTog"
                }
              >
                <div className={stt.activeChatDetailsBox}>
                  <div className={stt.userBoxDetails}>
                    <MdKeyboardArrowLeft className="showListings" />
                    <span>
                      <img src="./pic1.jpg" alt="" />
                      <div></div>
                    </span>
                    <main>
                      <h2>Saim Abbas</h2>
                      <h3>Active 2h ago</h3>
                    </main>
                  </div>
                  <div className={stt.activeChatIcons}>
                    <span>
                      <MdVideocam />
                    </span>
                    <span>
                      <MdEventNote />
                    </span>
                  </div>
                </div>
                <div className={stt.messagesBox}>
                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <div className={stt.spMessageTextBox}>
                        <h2>Saim Abbas</h2>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Lorem ipsum dolor sit, amet consectetur
                          adipisicing elit. Porro, odio.
                        </p>
                        <div className={stt.timeSeen}>
                          <span>10:05</span> <MdDoneAll />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={stt.firstPersonMessage}>
                    <div className={stt.fpMessageBox}>
                      <h2>Saim Abbas</h2>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Porro, odio.
                      </p>
                      <div className={stt.timeSeen}>
                        <span>10:05</span> <MdDoneAll />{" "}
                      </div>
                    </div>
                  </div>

                  <div className={stt.secondPersonMessage}>
                    <div className={stt.spMessageBox}>
                      <img src="./pic1.jpg" alt="" />
                      <i>Typing ...</i>
                    </div>
                  </div>
                </div>
                <div className={stt.typeMessageBox}>
                  <input type="text" placeholder="Message" />
                  <button>
                    <MdSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
