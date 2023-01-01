import "../css/Sidebar.css";

const SidePanel = (props) => {

  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Groups
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body position-relative">
          <ul className="list-group">
            {props.hookOrbisClient.userGroups.map((group, index) => {
              return (
                <>
                  <li className="list-group-item">
                    <div className="d-grid gap-2">
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
        </div>
      </div>
    </>
  );
};
export default SidePanel;
