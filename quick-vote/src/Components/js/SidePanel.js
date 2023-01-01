import "../css/Sidebar.css";

const SidePanel = (props) => {

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
        </div>
      </div>
    </>
  );
};
export default SidePanel;
