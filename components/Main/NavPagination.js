const NavPagination = () => {
  return (
    <nav aria-label="pagination navigation" className="pagination-root mt-2">
      <ul className="pagination-ul">
        <li>
          <button
            className="
                      button-base-root
                      pagination-item-root
                      pagination-item-page
                      pagination-item-text-secondary
                      pagination-disabledMui-disabled
                    "
            tabIndex={-1}
            type="button"
            disabled
            aria-label="Go to previous page"
          >
            <svg
              className="
                        pagination-svg-icon-root pagination-item-icon
                      "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        </li>
        <li>
          <button
            className="
                      button-base-root
                      pagination-item-root
                      pagination-item-page
                      pagination-item-text-secondary
                      pagination-selected
                    "
            tabIndex={0}
            type="button"
            aria-current="true"
            aria-label="page 1"
          >
            1<span className="pagination-touch-root" />
          </button>
        </li>
        <li>
          <button
            className="
                      button-base-root
                      pagination-item-root
                      pagination-item-page
                      pagination-item-text-secondary
                      pagination-disabled
                    "
            tabIndex={-1}
            type="button"
            disabled
            aria-label="Go to next page"
          >
            <svg
              className="
                        pagination-svg-icon-root pagination-item-icon
                      "
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavPagination;
