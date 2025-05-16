var closeProjectOverview = function closeProjectOverview(e) {
      if (e.target.classList.contains('po-header--close') || e.target.classList.contains('project-overview--wrapper')) {
        e.currentTarget.remove();
        (0,_hooks_handle_modal_offset__WEBPACK_IMPORTED_MODULE_0__["default"])();
        _hooks_handle_closeonesc__WEBPACK_IMPORTED_MODULE_1__["default"].forceCleanup();
      }
    };
