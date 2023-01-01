import { useRef } from "react";
import "../css/Sidebar.css";

const SidePanel = (props) => {
  const groupName = useRef();
  const groupDescription = useRef();

  const setupGroupModal = () => {
    return (
      <div
        className="modal fade"
        id="groupSetup"
        tabIndex="-1"
        aria-labelledby="groupSetupLabel"
        data-bs-backdrop="static"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="groupSetupLabel">
                Setup Group
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="text-start">
                <div className="mb-3">
                  <label htmlFor="groupName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="gaming"
                    ref={groupName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="groupDescription" className="form-label">
                    About
                  </label>
                  <textarea
                    className="form-control"
                    id="groupDescription"
                    rows="3"
                    ref={groupDescription}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  props.hookOrbisClient.setUpGroup(
                    groupName.current?.value,
                    groupDescription.current?.value
                  )
                }
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Groups
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body position-relative">
          <ul class="list-group">
            {props.hookOrbisClient.userGroups.map((group, index) => {
              return (
                <>
                  <li class="list-group-item">
                    <div class="d-grid gap-2">
                      <button
                        key={index}
                        className="btn btn-primary groupButton mx-2"
                        onClick={() => {
                          props.hookOrbisClient.getSelectedGroupData(
                            group?.group_id
                          );
                        }}
                      >
                        {group?.group_details?.name}
                      </button>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>

          {/* <div className="text-center position-absolute bottom-0">
            <div class="d-grid gap-2">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#groupSetup"
              >
                Set up Group
              </button>
            </div>
            {setupGroupModal()}
          </div> */}
        </div>
      </div>
    </>
  );
};
export default SidePanel;
