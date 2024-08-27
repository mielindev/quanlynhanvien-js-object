function Validator(option) {
  var formElement = document.querySelector(option.form);
  var selecorRules = {};

  function validate(inputElement, rule) {
    var notifyError =
      inputElement.parentElement.parentElement.querySelector(".sp-thongbao");
    var errorMessage;
    var rules = selecorRules[rule.selector];
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }
    if (errorMessage) {
      notifyError.innerText = errorMessage;
      notifyError.style.display = "block";
    } else {
      notifyError.innerText = "";
      notifyError.style.display = "none";
    }
    return errorMessage;
  }
  //
  if (formElement) {
    var btnAddNv = document.querySelector("#btnThemNV");
    var btnUpdate = document.querySelector("#btnCapNhat");
    btnAddNv.onclick = () => {
      var isSucces = true;
      option.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (isValid) isSucces = false;
      });
      if (isSucces) {
        themNv();
      }
    };
    btnUpdate.onclick = () => {
      var isSucces = true;
      option.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = validate(inputElement, rule);
        if (isValid) isSucces = false;
      });
      if (isSucces) {
        capNhatNv();
      }
    };
    option.rules.forEach((rule) => {
      if (Array.isArray(selecorRules[rule.selector])) {
        selecorRules[rule.selector].push(rule.test);
      } else {
        selecorRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      var notifyError =
        inputElement.parentElement.parentElement.querySelector(".sp-thongbao");
      if (inputElement) {
        inputElement.onblur = function () {
          //   value: inputElement.value
          // test func: rule.test
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          notifyError.innerText = "";
          notifyError.style.display = "none";
        };
      }
    });
  }
}

// Định nghĩa các rules validate
Validator.isRequired = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      if (value.trim()) {
        return undefined;
      } else {
        return customMessage || "Vui lòng nhập trường này";
      }
    },
  };
};
Validator.isEmail = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return customMessage || "Vui lòng nhập email";
      }
    },
  };
};
Validator.isNumber = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^(?=.*[0-9])(?!.* ).{4,6}$/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return customMessage || "Vui lòng nhập số id";
      }
    },
  };
};
Validator.isText = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /(?=.*[a-z])(?=.*[A-Z])/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return customMessage || "Vui lòng nhập trường này";
      }
    },
  };
};

Validator.isPassword = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return customMessage || "Vui lòng nhập password";
      }
    },
  };
};
Validator.isDate = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      var regex =
        /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
      if (regex.test(value)) {
        return undefined;
      } else {
        return customMessage || "Vui lòng nhập tháng - ngày - năm";
      }
    },
  };
};

Validator.amongNumber = function (selector, min, max, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      if (value >= min && value <= max) {
        return undefined;
      } else {
        return customMessage || "Trường này là số";
      }
    },
  };
};
Validator.isEmployee = function (selector, customMessage) {
  return {
    selector: selector,
    test: function (value) {
      if (
        value === "Sếp" ||
        value === "Trưởng phòng" ||
        value === "Nhân viên"
      ) {
        return undefined;
      } else {
        return customMessage || "Hãy chọn chức vụ phù hợp";
      }
    },
  };
};
