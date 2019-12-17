document.write(
  `
<div class="innerContent">
  <nav
    id="header"
    class="navbar navbar-toggleable-md navbar-inverse navbar-expand-lg d-flex justify-content-md-around align-items-start mb-1"
  >
    <a class="navbar-brand peace-header" style="margin-top: -10px;" href="/"
      >Peace Estate
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <form method="get" class="form-inline mr-4 ml-4">
      <div class="form-group header-form d-flex align-items-center">
        <img
          src="../images/search.jpeg"
          width="16px"
          height="16px"
          alt="Search"
          style="opacity: 0.5;"
        /><input
          type="text"
          placeholder="Search residents..."
          class="form-control header-input bg-white"
        />
      </div>
    </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav d-flex justify-content-between icons">
        <li class="nav-item">
          <img src="../images/message.svg" alt="Message" />
        </li>
        <li class="nav-item">
          <img src="../images/Bell.svg" alt="Bell" srcset="" />
        </li>
        <li class="nav-item d-flex flex-row align-items-start justify-content-between">
          <img src="../images/Person.svg" alt="You" srcset=""  style="margin-right: 10px;" />
          <div class="d-flex flex-column" style="width: inherit;">
            <p style="font-size: 16px;">Frederick Damascus</p>
            <p style="font-size: 10px; margin-top: -1.5em;">ADMIN</p>
          </div>
        </li>
        <li class="nav-item">
          <img
            src="../images/chevron-down.svg"
            width="14px"
            height="20px"
            alt="Down"
          />
        </li>
      </ul>
    </div>
  </nav>
</div>
`
);
