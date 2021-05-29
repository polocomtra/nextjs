const Breadcrumb = () => {
  return (
    <div className="my-3">
      <nav
        className="
          typo-root
          breadcrumb-root
          styles-breadcrumb
          typo-body typo-color-secondary
        "
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb-ol">
          <li className="breadcrumb-li">
            <a
              className="
                typo-root
                link-root link-underlineHover
                styles-breadcrum-link
                typo-color-inherit
              "
              href="/"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 2.5V7.5L19.5 9.75V2.5H17Z" fill="#C81526" />
                <path
                  d="M2 12L10.6621 4.20414C11.4227 3.51959 12.5773 3.51959 13.3379 4.20414L17 7.5M22 12L19.5 9.75M17 7.5V2.5H19.5V9.75M17 7.5L19.5 9.75"
                  stroke="#C81526"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 14L11.3492 8.55782C11.7237 8.23683 12.2763 8.23683 12.6508 8.55782L18.3016 13.4014C18.7449 13.7813 19 14.336 19 14.9199V21C19 21.5523 18.5523 22 18 22H14.5C13.9477 22 13.5 21.5523 13.5 21V19.5C13.5 18.9477 13.0523 18.5 12.5 18.5H11.5C10.9477 18.5 10.5 18.9477 10.5 19.5V21C10.5 21.5523 10.0523 22 9.5 22H6C5.44772 22 5 21.5523 5 21V17"
                  stroke="#C81526"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Trang chủ
            </a>
          </li>
          <li aria-hidden="true" className="breadcrumb-seperator">
            <div className="style-breadcrum-arrow">
              <svg
                viewBox="0 0 60 50"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="User-Mobile"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id={271218}
                    transform="translate(30.000000, 25.000000) scale(-1, 1) translate(-30.000000, -25.000000) "
                    fill="#3D5059"
                    fillRule="nonzero"
                  >
                    <path
                      d="M56.6273171,20.294878 L56.7209756,20.3153659 L16.5717073,20.3153659 L29.1931707,7.66609756 C29.8112195,7.04853659 30.1502439,6.21195122 30.1502439,5.33390244 C30.1502439,4.45585366 29.8112195,3.62512195 29.1931707,3.00609756 L27.2292683,1.04121951 C26.6117073,0.423658537 25.7887805,0.082195122 24.9112195,0.082195122 C24.0331707,0.082195122 23.2097561,0.421219512 22.5921951,1.03878049 L0.956585366,22.672439 C0.336585366,23.292439 -0.00243902439,24.1182927 -1.30689589e-05,24.9968293 C-0.00243902439,25.8802439 0.336585366,26.7065854 0.956585366,27.3256098 L22.5921951,48.9612195 C23.2097561,49.5782927 24.0326829,49.9178049 24.9112195,49.9178049 C25.7887805,49.9178049 26.6117073,49.5778049 27.2292683,48.9612195 L29.1931707,46.9963415 C29.8112195,46.3797561 30.1502439,45.5563415 30.1502439,44.6782927 C30.1502439,43.8007317 29.8112195,43.0207317 29.1931707,42.4036585 L16.4292683,29.6836585 L56.6721951,29.6836585 C58.4804878,29.6836585 60,28.125122 60,26.3178049 L60,23.5387805 C60,21.7314634 58.4356098,20.294878 56.6273171,20.294878 Z"
                      id="Path"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </li>
          <li className="breadcrumb-li">
            <a
              className="
                typo-root
                link-root link-underlineHover
                styles-breadcrum-link
                typo-color-inherit
              "
              href="/gio-hang"
            >
              Giỏ hàng
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
